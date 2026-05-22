export const TarjetaContacto = ({ nombre, email, puesto, foto }) => {
  const blackSvg =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='100%25' height='100%25' fill='black' /></svg>";

  return (
    <div className="tarjeta">
      <img src={blackSvg} alt={nombre} style={{width:120, height:120, objectFit:'cover'}} />

      <h3>{nombre}</h3>
      <p>{puesto}</p>
      <p>{email}</p>
    </div>
  );
};
