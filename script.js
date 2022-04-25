class Juego {
    constructor(id, nombre, publisher,año, precio,imagenUrl){
    this.id = id;    
    this.nombre = nombre;
    this.publisher = publisher;
    this.año = año;
    this.precio = precio;
    this.imagen = imagenUrl;
    }
}
const juegos = [];
juegos.push(new Juego(1,"The Sims 4", "Maxis", "2017", 500,"https://sm.ign.com/ign_es/game/l/los-sims-4/los-sims-4_c8f4.jpg"));
juegos.push(new Juego(2,"Uncharted 2", "Naughty Dog", "2016", 1000));
juegos.push(new Juego(3,"Ghostwire", "Bethesda","2022", 3500, ));

let section = document.querySelector(".section");

let contenidoSection = document.createDocumentFragment();

let carrito = [];

let tableCarrito = document.querySelector(".carrito");

for (const juego of juegos) {
    let item = document.createElement("DIV");
    item.innerHTML = 
    `<div class="card w-25 d-inline-flex
    align-items-center text-center p-0">
    <img src="${juego.imagen}" class="img-thumbnail w-50 " alt="Imagen ${juego.nombre}">
    <div class="card-body">
    <h5 class="card-title">${juego.nombre}</h5>
    <p class="card-text">$${juego.precio}</p>
    <button id="${juego.id}" type="button" class="btn btn-primary btn-sm">Comprar</button>
    </div>
    </div>`;
    section.appendChild(item);

    let comprar = document.getElementById(juego.id)
    comprar.addEventListener("click", function(){
        carrito.push(juego.nombre, juego.precio)
        alert("Juego agregado al carrito")
        let tableRow = document.createElement("TR");
        tableRow.innerHTML
    });
}