import { useEffect, useState } from "react";
import { TarjetaContacto } from "./TarjetaContacto";
import "./Directorio.css";
import { useTitle } from "../../hooks/useTitle";
import Adulto1 from "../../assets/img/Adulto_01.jpg";
import Adulto2 from "../../assets/img/Adulto_02.jpg";
import Adulto3 from "../../assets/img/Adulto_03.jpg";

const DEFAULT_NOSOTROS = [
  { id: 1, nombre: "Ana Pérez", email: "aperez@mi-tienda.com", puesto: "CEO", foto: Adulto1 },
  { id: 2, nombre: "Luis Gómez", email: "lgomez@mi-tienda.com", puesto: "Dev", foto: Adulto2 },
  { id: 3, nombre: "Leandro Alvarez Parisella", email: "lalvarezparisella@mi-tienda.com", puesto: "Diseño", foto: Adulto3 },
];

export const Directorio = () => {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);

  useTitle("Patistas");

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((res) => {
        const contentType = res.headers.get("content-type") || "";
        if (!res.ok || !contentType.includes("application/json")) {
          // fallback to default data when the JSON isn't available or server returns HTML
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setNosotros(data);
        } else {
          setNosotros(DEFAULT_NOSOTROS);
        }
      })
      .catch(() => {
        setNosotros(DEFAULT_NOSOTROS);
      })
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando equipo...</p>;

  return (
    <div>
      <h2>Nuestro equipo</h2>

      <div className="contenedor-tarjetas">
        {nosotros.map((persona) => (
          <TarjetaContacto key={persona.id} {...persona} />
        ))}
      </div>
    </div>
  );
};
