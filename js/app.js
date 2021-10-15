
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
const tortaBrownie = new Tortas("Torta Brownie",["Manteca", "Huevos", "Frutos Rojos", "Crema Chantilly"],2500,2,1);
const tortaMousse = new Tortas("Mousse de Frutilla",["Crema de Limon", "Huevos", "Esencia de Vainilla"],2300,6,2);
const tortaFrutosRojos = new Tortas ("Cheescake de Frutos Rojos",["Queso crema","Huevos","Manteca Fundida"],2200,4,3);
const tortaCookie = new Tortas("Torta Cookie",["Nueces", "Chocolate", "Dulce de Leche", "Crema Chantilly"],2500, 5,4);
const tortaRogel = new Tortas("Torta Rogel", ["Masa Neutra", "Dulce de Leche", "Merengue"],2000,2,5);
const tortaLemonPie = new Tortas("Lemon Pie",["limon", "Masa Sablee", "Merengue"], 1800, 0,6);
let baseDatoTorta = [tortaBrownie,tortaMousse,tortaFrutosRojos,tortaCookie,tortaLemonPie,tortaRogel];

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

let carro;
let queHaySt = localStorage.getItem("carrito");

if(queHaySt){
    let prueba = JSON.parse(queHaySt);
    carro = new Carrito(prueba.productos,prueba.total);

}else{
    carro = new Carrito([],0);
}

//Sumar elemento al carrito mediante evento click en btn (ej 9 y preentrega)                
//input para ingresar cant de comprar (preentrega)   
//agregar el resto de tortas 


let boton = document.getElementById("sumaCarro");
//hacer funcion sumaCarro para 1 torta
//esta funcion agrega por cada click 1 torta mousse al carrito
const sumaCarro = () =>{
    
    if(tortaBrownie.isAvailable()){
        tortaBrownie.stock--;
        carro.productos.push(tortaBrownie);
        carro.total += tortaBrownie.getPrecio();
        localStorage.setItem("carrito",JSON.stringify(carro));
    }else{
        alert("No hay stock");
    }
}
console.log("veo el carro", carro);




/* const chequeoTorta = (listadoTortas,torta) =>{
    let resultado = listadoTortas.find(cake => cake.id === torta.id);
    return resultado == undefined ? false : true;
} 

const getTortaIndice = (listadoTortas,torta) => {
    return listadoTortas.findIndex(cake => cake.id === torta.id);
} */

/* const defineTorta = (torta) => {
    switch (torta){
        case "cookie": 
                return tortaCookie;
        case "rogel":
                return tortaRogel;
        case "lemonpie":
                return tortaLemonPie;
        case "Mousse":
                return tortaMousse;
        case "brownie":
                return tortaBrownie;
        case "frutosrojos":
                return tortaFrutosRojos;
    }
}; */