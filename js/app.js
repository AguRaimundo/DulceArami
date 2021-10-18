
<<<<<<< HEAD
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
=======

class Tortas{
    constructor(nombre, descripcion, img, ingredientes, precio, stock, id){
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.img = img,
    this.ingredientes = ingredientes,
    this.precio = precio,
    this.stock = stock,
    this.id = id
>>>>>>> preentrega
    }

    getNombre = () => {return this.nombre}
    getIngredientes = () => {return this.ingredientes}
    getPrecio = () => {return this.precio}
    isAvailable = () => {return this.stock > 0 ? true : false}
<<<<<<< HEAD

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
=======
    };
const tortaBrownie = new Tortas("Torta Brownie",
                                "Una base húmeda de brownie con nueces, una abundante capa de dulce de leche, una mousse de chocolate semiamargo y para finalizar merengue italiano. ",
                                "../assets/Brownie.jpg",["Manteca", "Huevos", "Frutos Rojos", "Crema Chantilly"],2500,2,1);

const tortaMousse = new Tortas("Mousse de Frutilla",
                                "Base de brownie,  una justa capa dulce de leche, mousse de chocolate SEMIAMARGO, y un mousse de frutillas fresco, que sabe resaltar y completar toda esta torta.",
                                "../assets/tortaMousseFrutillaN.jpg",["Crema de Limon", "Huevos", "Esencia de Vainilla"],2300,6,2);

const tortaFrutosRojos = new Tortas ("Cheescake de Frutos Rojos",
                                    "es un clásico postre reconocido mundialmente, a base de queso. Su textura suave cortada con frutos rojos y mermelada arriba, son la combinación perfecta para pasar una tarde",
                                    "../assets/CheescakeFrutosRojos.jpg",["Queso crema","Huevos","Manteca Fundida"],2200,4,3);

const tortaCookie = new Tortas("Torta Cookie",
                                "Compuesta por tres capas de una masa sablee de galletitas, relleno con dulce de leche y terminado con ganache de chocolate",
                                "../assets/cookieNuevo.jpeg",["Nueces", "Chocolate", "Dulce de Leche", "Crema Chantilly"],2500, 5,4);

const tortaRogel = new Tortas("Torta Rogel",
                                "Un clásico argento, 8 capas de masa neutra a base de huevo, con abundantes capas de dulce de leche y terminado con un delicioso merengue italiano", 
                                "../assets/rogelNuevo.webp",["Masa Neutra", "Dulce de Leche", "Merengue"],2000,2,5);

const tortaLemonPie = new Tortas("Lemon Pie",
                                "Base de una masa sablee suave, una crema de limón exquisita y un merengue italiano que nunca falla. Un clásico.",
                                "../assets/lemon-pie.jpg",["limon", "Masa Sablee", "Merengue"], 1800, 0,6);

let baseDatoTorta = [tortaBrownie,tortaMousse,tortaFrutosRojos,tortaCookie,tortaLemonPie,tortaRogel];


class Carrito{
    constructor(productos,total){
        this.productos = productos
        this.total = total
>>>>>>> preentrega
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


let printHtml = ``
let lista = document.getElementById("ulDefinitivo")
for(let i = 0; i < baseDatoTorta.length; i++){
    printHtml += `
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div class="media-body order-2 order-lg-1">
                        <h5 class="mt-0 font-weight-bold mb-2">${baseDatoTorta[i].nombre}</h5>
                            <p class="font-italic text-muted mb-0 small">⁣${baseDatoTorta[i].descripcion}</p>
                                <div class="d-flex align-items-center justify-content-between mt-1">
                                    <h6 class="font-weight-bold my-2">${baseDatoTorta[i].precio}</h6>
                                </div>
                    </div><img src="${baseDatoTorta[i].img}" alt="Torta Brownie" width="200" class="ml-lg-5 order-1 order-lg-2">
                </div>
                            <div class="btCompra">
                                <input type="submit" value="Comprar" onclick="sumaCarro(baseDatoTorta[${i}])">
                            </div>
            </li>`
}
lista.innerHTML = printHtml;


const sumaCarro = (torta) =>{
    console.log(torta)
    if(torta.isAvailable()){
        torta.stock--;
        carro.productos.push(torta);
        carro.total += torta.getPrecio();
        localStorage.setItem("carrito",JSON.stringify(carro));
    }else{
        alert("No hay stock");
    }
}
<<<<<<< HEAD
 */
/* console.log(compra()); */
/* ej complementario */


=======
console.log("veo el carro", carro);
>>>>>>> preentrega

