import { useEffect } from "react";

export function useTitle(title) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = title || "Mi tienda";
    }
  }, [title]);
}
