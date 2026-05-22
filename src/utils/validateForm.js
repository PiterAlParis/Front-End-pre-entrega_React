export const validateForm = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "Debe ingresar un nombre";
  }

  if (!data.lastname) {
    errors.lastname = "Debe ingresar un apellido";
  }

  if (!data.email) {
    errors.email = "Debe ingresar un correo electronico";
  } else if (!data.email.includes("@")) {
    errors.email = "Debe ingresar un correo electronico valido";
  }

  if (!data.message) {
    errors.message = "El mensaje no puede estar vacío";
  }

  return errors;
};
