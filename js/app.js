
// 1ra PREENTREGA
class Tortas{
    constructor(nombre, ingredientes, precio, stock, id){
    this.nombre = nombre,
    this.ingredientes = ingredientes,
    this.precio = precio,
    this.stock = stock,
    this.id = id
    }

    getNombre = () => {return this.nombre}
    getIngredientes = () => {return this.ingredientes}
    getPrecio = () => {return this.precio}
    isAvailable = () => {return this.stock > 0 ? true : false}


};


const tortaCookie = new Tortas("Torta Cookie",["Nueces", "Chocolate", "Dulce de Leche", "Crema Chantilly"],2500, 5,1);
const tortaLemonPie = new Tortas("Lemon Pie",["limon", "Masa Sablee", "Merengue"], 1800, 0,2);
const tortaRogel = new Tortas("Torta Rogel", ["Masa Neutra", "Dulce de Leche", "Merengue"],2000,2,3);



let baseDatoTorta = [tortaCookie,tortaLemonPie,tortaRogel];

class Carrito{
    constructor(productos,total){
        this.productos = productos
        this.total = total
        }
        getTotal = () => {return this.total}

        agregarProducto = (torta) => {
            this.productos.push(torta),
            this.total = this.total + torta.getPrecio()
        }

        quitarProducto = (torta) => {
            this.productos.filter((cake) => torta.id == cake.id)
        }
    };


let carro = new Carrito([],0);


const defineTorta = (torta) => {
    switch (torta){
        case "cookie": 
                return tortaCookie;
        case "rogel":
                return tortaRogel;
        case "lemonpie":
                return tortaLemonPie; 
    }
};

comprar = () => {
    let cake = prompt("Ingrese su Producto")
    const tortas = defineTorta(cake);
    if(tortas.isAvailable()){
        tortas.stock = tortas.stock - 1;
        console.log("Compraste una Torta");
        console.log("Veo la torta despues de comprar",tortas);
    }
    else{
        console.log("No hay stock disponible");
    }
};














// Desafio complementario ARRAYS
/* 
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
const tortaCookie = new Tortas("Torta Cookie",["Nueces", "Chocolate", "Dulce de Leche", "Crema Chantilly"],2500, 5);
const tortaLemonPie = new Tortas("Lemon Pie",["limon", "Masa Sablee", "Merengue"], 1800, 0 );
const tortaRogel = new Tortas("Torta Rogel", ["Masa Neutra", "Dulce de Leche", "Merengue"],2000,2 );

let listadoTortas = [];

listadoTortas.push(tortaCookie);
listadoTortas.push(tortaLemonPie);
listadoTortas.push(tortaRogel);


const agregarTortas = () => {
    let nombre = prompt("Ingrese su Torta");

    let torta = new Tortas(nombre);

    listadoTortas.push(torta);
}
agregarTortas(); */