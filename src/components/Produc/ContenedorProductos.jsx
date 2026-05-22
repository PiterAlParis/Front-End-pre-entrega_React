import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { ListaProductos } from "./ListaProductos";
import Adulto1 from "../../assets/img/Adulto_01.jpg";
import Adulto2 from "../../assets/img/Adulto_02.jpg";
import Adulto3 from "../../assets/img/Adulto_03.jpg";

export const ContenedorProductos = () => {
  const productosArray = [
    { id: 1, nombre: "Mini Akita", descripcion: "descripcion 1", precio: 123456, img: Adulto1 },
    { id: 2, nombre: "Border Collie", descripcion: "descripcion 2", precio: 1654, img: Adulto2 },
    { id: 3, nombre: "Pastor Australiano", descripcion: "descripcion 3", precio: 4221, img: Adulto3 },
  ];
  const [productos] = useState(productosArray);
  const { count } = useCart();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <strong>Productos disponibles</strong>
          <div style={{ fontSize: 14, color: "#555" }}>
            {count > 0 ? `Productos en carrito: ${count}` : "El carrito está vacío"}
          </div>
        </div>
      </div>
      <ListaProductos productos={productos} />
    </div>
  );
};
