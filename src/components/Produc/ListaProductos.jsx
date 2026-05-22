import { Producto } from "./Producto";

export const ListaProductos = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => (
        <Producto key={producto.id} {...producto} />
      ))}
    </div>
  );
};
