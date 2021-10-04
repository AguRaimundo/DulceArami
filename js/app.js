
// Ejercicio 6 ARRAYS

/* const tortas = [];

tortas.push('Torta Brownie');
tortas.push('Mousse de Frutilla');
tortas.push('Cheescake de Frutos Rojos');
tortas.push('Rogel');
tortas.push('Torta Cookie');
tortas.push('Lemon Pie');

console.log(tortas.length); */


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

const listadoTortas = [];

listadoTortas.push(tortaCookie);
listadoTortas.push(tortaLemonPie);
listadoTortas.push(tortaRogel);
console.log(listadoTortas);


//Fin ej 6 ARRAYS








/* INICIO EJ 5 OBJETOS
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
    let cake = prompt("Ingrese su Torta")
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

comprar();
 *FIN EJ 5 OBJETOS*/



/* class DulceArami{
    constructor(torta1, torta2, torta3, stock, disponible) {
        this.torta1 = torta1,
        this.torta2 = torta2,
        this.torta3 = torta3,
        this.stock = stock,
        this.disponible = disponible
        
    }

comprar(cantidad){
    if(this.stock <= 0){
        console.log("No hay stock disponible");
    }
        else{
            this.stock = this.stock - cantidad
            console.log(`Compraste una torta`);
        }
    }
}
const fabrica = new dulceArami ("Torta Mousse", "Lemon Pie", "Selva Negra", )










/* const iva = 21
const tortaDulcedeLeche = 2000;
const tortaChocolate = 1850;
const tortaMousse = 1256;
const tortaLemonPie = 1831;

const compraIva = (tortaElegida) => {
    return tortaElegida * iva / 100;
};

const defineTorta = (torta) => {
    switch (torta){
        case "tdl": 
                return tortaDulcedeLeche;
        case "tc":
                return tortaChocolate;
        case "tm":
                return tortaMousse;
        case "tlp":
                return tortaLemonPie; 
    }
};
const procesoIva = () =>{
    const dato = prompt("Ingrese su Torta");
    let tortaElegida = defineTorta(dato);
    return tortaElegida + compraIva(tortaElegida);
};
console.log(procesoIva());
 */

/* const compra = () => {
    let total = 0;
    while (true){
        dato = prompt("Ingrese su Torta");
        switch (dato){
            case "tdl": 
                total+=tortaDulcedeLeche;
                break;
            case "tc":
                total+=tortaChocolate;
                break;
            case "tm":
                total+=tortaMousse;
                break;
            case "tlp":
                total+=tortaLemonPie;
                break; 
            case "fin":
                return total;
        }
    }
}
 */
/* console.log(compra()); */
/* ej complementario */



