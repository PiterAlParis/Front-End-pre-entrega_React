import { useEffect, useState } from "react";
import { TarjetaContacto } from "./TarjetaContacto";
import "./Directorio.css";
import { useTitle } from "../../hooks/useTitle";

const DEFAULT_NOSOTROS = [
  { id: 1, nombre: "Ana Pérez", email: "ana@example.com", puesto: "CEO", foto: "/src/assets/img/Adulto_01.jpg" },
  { id: 2, nombre: "Luis Gómez", email: "luis@example.com", puesto: "Dev", foto: "/src/assets/img/Adulto_02.jpg" },
  { id: 3, nombre: "María Ruiz", email: "maria@example.com", puesto: "Diseño", foto: "/src/assets/img/Adulto_03.jpg" },
];

export const Directorio = () => {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);

  useTitle("Directorio");

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
