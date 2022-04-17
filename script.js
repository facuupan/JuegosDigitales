class Juego {
    constructor(id, nombre, publisher,año, plataforma, precio){
    this.id = id;    
    this.nombre = nombre;
    this.publisher = publisher;
    this.año = año;
    this.plataforma = plataforma;
    this.precio = precio;
    }
}
let carrito = []

const juegos = [];
juegos.push(new Juego(1,"The Sims 4", "Maxis", "2017","PC", 500));
juegos.push(new Juego(2,"Uncharted 2", "Naughty Dog", "2016","Consolas, PC", 1000));
juegos.push(new Juego(3,"Ghostwire", "Bethesda","2022", "Consolas, PC", 3500));

for (const juego of juegos) {
    let div = document.createElement("div");
    div.innerHTML = 
    `<h2>${juego.nombre}</h2>
    <p>Tiene un valor de ${juego.precio}</p>
    <button id='${juego.id}'>Agregar al carrito</button>
    <hr>`;
    document.body.appendChild(div);
    let comprar = document.getElementById(juego.id)
    comprar.addEventListener("click", function(){
    
    });
}



