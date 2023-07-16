import { productos } from "./index.js";

export const agregarCarrito = (frutaId) => {
  if (parseInt(frutaId) > 0) {
    const fruta = productos.find((produc) => produc.id === frutaId);
    if (fruta !== undefined) {
      const agregado = carritoFrutas.find((item) => item.id === frutaId);
      if (agregado) {
        agregado.cantidad += 1; 
      } else {
        fruta.cantidad = 1;
        carritoFrutas.push(fruta);
      }
    }
  }
  almacenarCarrito();
};

const almacenarCarrito = () => {
  if (carritoFrutas.length > 0) {
    localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas));
  }
};
const recuperarCarrito = () => {
  let data = localStorage.getItem("carritoFrutas");
  return JSON.parse(data) || [];
};

export const carritoFrutas = recuperarCarrito();
