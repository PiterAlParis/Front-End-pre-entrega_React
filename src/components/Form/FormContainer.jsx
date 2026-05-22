import { useState } from "react";
import { FormUI } from "./FormUI";
import { validateForm } from "../../utils/validateForm";

export const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm(formData);

    if (Object.keys(error).length > 0) {
      // si hay errores, los guardamos en el estado
      setErrors(error);
    } else {
      //si no hay errores, reseteamos el estado "errors" por si previamente sí tuvo errores
      setErrors({});
      console.log(formData); //mostramos en consola el objeto formData creado
      setFormData({ name: "", lastname: "", email: "", message: "" }); // reseteamos el formulario
    }
  };

  return (
    <FormUI
      onChange={handleChange}
      onSubmit={handleSubmit}
      formData={formData}
      errors={errors}
    />
  );
};
