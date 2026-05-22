export const FormUI = ({ onChange, onSubmit, formData, errors }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Form</h2>

      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          type="text"
          onChange={onChange}
        />

        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="lastname">Apellido: </label>
        <input
          id="lastname"
          name="lastname"
          value={formData.lastname}
          type="text"
          onChange={onChange}
        />

        {errors.lastname && <p className="error">{errors.lastname}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message">Mensaje: </label>
        <textarea
          id="message"
          name="message"
          type="text"
          value={formData.message}
          onChange={onChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <button>Enviar</button>
    </form>
  );
};
