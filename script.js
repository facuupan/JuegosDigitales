// constructor de juegos
class Juego {
  constructor(id, nombre, publisher, año, precio, imagenUrl) {
    this.id = id;
    this.nombre = nombre;
    this.publisher = publisher;
    this.año = año;
    this.precio = precio;
    this.imagen = imagenUrl;
  }
}


// Capturando elementos de html
const sectionJuegos = document.getElementById("sectionJuegos");
const cuerpoCarrito = document.getElementById("cuerpoCarrito");
const footerCarrito = document.getElementById("footerCarrito");

const carrito = [];


fetch("./juegos.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach(juego => {
        let item = document.createElement("div");
        item.classList.add("d-flex", "w-25", "justify-content-center");
        item.innerHTML = `<div class="card w-75 d-inline-flex
          align-items-center text-center ">
          <img src="${juego.imagen}" class="img-thumbnail mw-25 caratula" alt="Caratula ${juego.nombre}">
          <div class="card-body d-flex justify-content-end flex-wrap align-content-center flex-column">
          <h5 class="card-title">${juego.nombre}</h5>
          <p class="card-text">${juego.precio}</p>
          <button data-id="${juego.id}" type="button" class="btn btn-outline-danger btn-sm">Comprar</button>
          </div>
          </div>`;
        sectionJuegos.appendChild(item);
      })
    });

// evento que detecta boton
sectionJuegos.addEventListener("click", (e) => {
  agregarCarrito(e);
});
// verifica que sea un boton de compra
function agregarCarrito(e) {
  if (e.target.classList.contains("btn-outline-danger")) {
    Productos(e.target.parentElement);
  }
  e.stopPropagation();
}
// constructor de producto para items de carrito
const Productos = (objeto) => {
  const producto = {
    id: objeto.querySelector(".btn-outline-danger").dataset.id,
    nombre: objeto.querySelector(".card-title").textContent,
    precio: objeto.querySelector(".card-text").textContent,
    imagen: objeto.imagen,
    cantidad: 1,
  };
  // Si ya está en el carrito suma 1 a la cantidad
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }
  // empuja producto al carrito
  carrito[producto.id] = { ...producto };
  swal.fire({
    title: "Agregado al carrito correctamente",
    icon: "success",
    timer: 750,
  });
  renderCarrito();
};

// Render del carrito cada vez que se agrega un producto
const renderCarrito = () => {
  cuerpoCarrito.innerHTML = "";
  Object.values(carrito).forEach((producto) => {
    let row = document.createElement("TR");
    row.innerHTML = `<th scope="row">${producto.id}</th>
    <th scope="row">${producto.nombre}</th>
    <th scope="row">${producto.cantidad}</th>
    <th scope="row">${producto.cantidad * parseInt(producto.precio)} $</th>`;
    cuerpoCarrito.appendChild(row);
  });
  renderCarritoFooter();
};
// Render de cantidad y precio total
function renderCarritoFooter() {
  footerCarrito.innerHTML = "";
  if (Object.keys(carrito).length === 0) {
    footerCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío</th>`;
  }
  // operacion cantidad total de juegos en el carrito
  const footerCantidad = Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  // operacion de precio final con reduce
  const footerPrecio = Object.values(carrito).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );

  footerCarrito.innerHTML = `<th></th>
  <th scope="row"></th>
  <th scope="row">Cantidad total:   ${footerCantidad}</th>
  <th scope="row">Precio Final: ${footerPrecio} $  <br>
  <button id="finalizar-compra" type="button" class="btn btn-outline-primary btn-sm">Finalizar compra</button></th>
  `;
}
