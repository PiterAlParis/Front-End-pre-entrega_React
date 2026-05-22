import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "mi_refugio_carrito_v1";
const CART_UPDATED_EVENT = "cart_updated";

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCartToStorage(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  } catch {}
}

export function useCart() {
  const [cart, setCart] = useState(loadCartFromStorage);

  useEffect(() => {
    const handleStorageUpdate = () => {
      setCart(loadCartFromStorage());
    };

    window.addEventListener(CART_UPDATED_EVENT, handleStorageUpdate);
    window.addEventListener("storage", handleStorageUpdate);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, handleStorageUpdate);
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, []);

  const addItem = useCallback((item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => String(p.id) === String(item.id));
      const nextCart = idx >= 0
        ? prev.map((product, index) => {
            if (index !== idx) return product;
            return {
              ...product,
              cantidad: Number(product.cantidad) + Number(item.cantidad || 1),
              precio: Number(item.precio ?? product.precio ?? 0),
              nombre: item.nombre ?? product.nombre,
              descripcion: item.descripcion ?? product.descripcion ?? "",
              img: item.img ?? product.img ?? "",
            };
          })
        : [
            ...prev,
            {
              id: item.id,
              nombre: item.nombre ?? "",
              precio: Number(item.precio ?? 0),
              descripcion: item.descripcion ?? "",
              img: item.img ?? "",
              cantidad: Number(item.cantidad || 1),
            },
          ];

      saveCartToStorage(nextCart);
      return nextCart;
    });
  }, []);

  const removeItem = useCallback((id) => {
    setCart((prev) => {
      const nextCart = prev.filter((p) => String(p.id) !== String(id));
      saveCartToStorage(nextCart);
      return nextCart;
    });
  }, []);

  const clear = useCallback(() => {
    const nextCart = [];
    saveCartToStorage(nextCart);
    setCart(nextCart);
  }, []);

  const count = cart.reduce((s, i) => s + Number(i.cantidad || 0), 0);

  return { cart, addItem, removeItem, clear, count };
}
