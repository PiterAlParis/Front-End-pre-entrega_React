import { useState } from "react";
import { useCart } from "../../hooks/useCart";

export const Producto = ({ id, nombre, descripcion, precio, img }) => {
  const [favorito, setFavorito] = useState(false);
  const [agregado, setAgregado] = useState(false);
  const { addItem } = useCart();

  const marcarComoFavorito = () => setFavorito(!favorito);

  const agregarAlCarrito = () => {
    addItem({ id, nombre, precio, cantidad: 1, descripcion, img });
    setAgregado(true);
    window.setTimeout(() => setAgregado(false), 900);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8, display: "flex", gap: 12 }}>
      {img && <img src={img} alt={nombre} style={{ width: 120, height: 120, objectFit: "cover" }} />}
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>

        <button
          onClick={agregarAlCarrito}
          style={{ background: "#3498db", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 6, cursor: "pointer" }}
        >
          {agregado ? "Agregado" : "Agregar al carrito"}
        </button>
        <button onClick={marcarComoFavorito} style={{ marginLeft: 8 }}>
          {favorito ? "⭐ Quitar de favoritos" : "★ Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
};
