import { agregarCarrito, carritoFrutas } from "./carrito.js";

let container = document.querySelector(".container");
const retornarCardHTML = (producto) => {
  return `  <div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
 ´              <div class="card-price">$${producto.precio}</div>
                <div class="card-button">
                    <button class="butt button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`;
};

const cargarProductos = (array) => {
  if (container != null) {
    array.forEach((a) => {
      const data = retornarCardHTML(a);
      container.innerHTML += data;
    });
  }
  activarClick();
};

const activarClick = () => {
  const botonesAgregar = document.querySelectorAll(
    ".butt.button-outline.button-add"
  );
  if (botonesAgregar !== null) {
    for (let btn of botonesAgregar) {
      btn.addEventListener("click", (event) => {
        const entero = parseInt(event.target.id);
        agregarCarrito(entero);
        console.table(carritoFrutas);
      });
    }
  }
};

const mostrarError = () => {
  const card = document.querySelector("#cardError");
  if (card) {
    card.classList.remove("ocultar");
  }
};

export const productos = [];

const url = "../productos.json";

const obtenerProductos = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      productos.push(...data);
      cargarProductos(productos);
    })
    .catch((error) => {
      console.error(error);
      mostrarError();
    });
};

obtenerProductos();