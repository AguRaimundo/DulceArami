

// Desafio complementario ARRAYS

class Tortas{
    constructor(nombre, ingredientes, precio, stock){
    this.nombre = nombre,
    this.ingredientes = ingredientes,
    this.precio = precio,
    this.stock = stock
    }

    getNombre = () => {return this.nombre}
    getIngredientes = () => {return this.ingredientes}
    getPrecio = () => {return this.precio}
    isAvailable = () => {return this.stock > 0 ? true : false}

};
const tortaCookie = new Tortas("Cookie",["Nueces", "Chocolate", "Dulce de Leche", "Crema Chantilly"],2500, 5);
const tortaLemonPie = new Tortas("Lemon Pie",["limon", "Masa Sablee", "Merengue"], 1800, 0 );
const tortaRogel = new Tortas("Rogel", ["Masa Neutra", "Dulce de Leche", "Merengue"],2000,2 );

let listadoTortas = [];

listadoTortas.push(tortaCookie);
listadoTortas.push(tortaLemonPie);
listadoTortas.push(tortaRogel);
/* console.log(listadoTortas); */

const agregarTortas = () => {
    let nombre = prompt("Ingrese su Torta");

    let torta = new Tortas(nombre);

    listadoTortas.push(torta);
}
agregarTortas();

listadoTortas.sort((a,b) => {
    if(a.nombre > b.nombre){
        return 1
    }
    if (a.nombre < b.nombre){
        return -1
    }
    return 0
})

