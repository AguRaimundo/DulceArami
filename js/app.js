
// 1ra PREENTREGA

// Simulador del funcionamiento de mi carrito, con un switch donde podes agregar y/o retirar tortas y cuente el total

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
            let contentAux= [];
            let index = getTortaIndice(this.productos,torta);
            for(let k=0; k<this.productos.length; k++) {
                if(k!==index) {
                contentAux.push(this.productos[k]);
                } 
            }
            this.productos = contentAux;
            this.total = this.total - torta.getPrecio()
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

const chequeoTorta = (listadoTortas,torta) =>{
    let resultado = listadoTortas.find(cake => cake.id === torta.id);
    return resultado == undefined ? false : true;
} 

const getTortaIndice = (listadoTortas,torta) => {
    return listadoTortas.findIndex(cake => cake.id === torta.id);
}

//Sumar elemento al carrito mediante evento click en btn (ej 9 y preentrega)
//input para ingresar cant de comprar (preentrega) 
//agregar el resto de tortas


let boton = document.getElementById("sumaCarro");
//hacer funcion sumaCarro para 1 torta
const sumaCarro = () =>{console.log("gorda tonta")}











