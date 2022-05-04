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

const juegos = [];
juegos.push(
  new Juego(
    1,
    "The Sims 4",
    "Maxis",
    "2017",
    500,
    "https://sm.ign.com/ign_es/game/l/los-sims-4/los-sims-4_c8f4.jpg"
  )
);
juegos.push(
  new Juego(
    2,
    "God of War",
    "Santa Monica Studio",
    "2022",
    2500,
    "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7"
  )
);
juegos.push(
  new Juego(
    3,
    "Ghostwire",
    "Bethesda",
    "2022",
    3500,
    "https://as01.epimg.net/meristation/imagenes/2022/03/21/game_cover/614163601647871882.jpg"
  )
);
juegos.push(
  new Juego(
    4,
    "Resident Evil 6",
    "Capcom",
    "2013",
    500,
    "https://cracked-gamespc.com/storage/games_tumbl/resident-evil-6-cover-9qp.jpg"
  )
);

let section = document.querySelector(".sectionJuegos");

const listaCarrito = document.getElementById("carrito");
const ItemCarrito = document.getElementById("template");
const carrito = {};
// render listado de juegos
for (const juego of juegos) {
  let item = document.createElement("div");
  item.classList.add("d-flex", "w-25", "justify-content-center");
  item.innerHTML = `<div class="card w-75 d-inline-flex
    align-items-center text-center ">
    <img src="${juego.imagen}" class="img-thumbnail mw-25 caratula" alt="Imagen ${juego.nombre}">
    <div class="card-body d-flex justify-content-end flex-wrap align-content-center flex-column">
    <h5 class="card-title">${juego.nombre}</h5>
    <p class="card-text">$${juego.precio}</p>
    <button id="${juego.id}" type="button" class="btn btn-outline-danger btn-sm">Comprar</button>
    </div>
    </div>`;
  section.appendChild(item);
// enlace botones con información juego
  const botonComprar = document.getElementById(juego.id);

  botonComprar.addEventListener("click", function () {
    const producto = {
      id: juego.id,
      nombre: juego.nombre,
      precio: juego.precio,
      cantidad: 1,
    };
    carrito[producto.nombre] = producto;

    renderCarrito(producto);
    swal.fire({
      title: "Agregado al carrito correctamente",
      icon: "success",
      timer: 1000,
    });
    
  });
}

const renderCarrito = (producto) => {
  
    let item = document.createElement("UL");
    item.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="nombre">${producto.nombre}</span>
        <span class="precio">${producto.precio}</span>
        <span class="cantidad bg-danger rounded-pill badge" id="">${producto.cantidad}</span>
      </li>`;
    listaCarrito.appendChild(item);
};
