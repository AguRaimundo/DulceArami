//Desafio DOM 08


//Copipaste
/* console.log(document);
console.log(document.body);
// Entrar por ID  - getElementById()
console.log(document.getElementById("unico"))
    //ME TRAE SOLO UN OBJETO HTML
// Entrar por Clase  - getElementsByClassName()
console.log(document.getElementsByClassName("clase1"))
    //ME TRAE UN ARRAY DE OBJETOS HTML
// Entrar por Etiqueta - getElementsByTagName()
console.log(document.getElementsByTagName("h1"))
    //ME TRAE UN ARRAY DE OBJETOS HTML
console.log(document.getElementsByTagName("p")[3])
document.getElementsByTagName("p")[3].textContent = "Este es el nuevo texto"
//querySelector
console.log(document.querySelector("#unico"))
console.log(document.querySelector(".clase1"))
console.log(document.querySelector("p"))
//Solamente me trae 1 elemento, el 1° que encuentra
console.log(document.querySelectorAll("p")[3])
document.getElementById("unico").textContent = " Este es el nuevo contenido"
    //document.getElementById("unico").style.color = "red"
//document.getElementById("unico").style.display = "none"
document.getElementById("unico").setAttribute("class", "truco") */

const listado = document.createElement("h2")
listado.setAttribute("id", "listadoAgregado")
listado.textContent = "Lista Nueva"
document.getElementById("aca").appendChild(listado)
console.log(listado) 



class listTortas {
    constructor({ nombre, precio, stock }) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
const datosTortas = () => {
    const producto = new listTortas({
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value
    })
    const tortaP = document.createElement("div")
    const torta = document.createElement("h2")
    torta.textContent = producto.nombre
    tortaP.appendChild(torta)

    const torta1 = document.createElement("p")
    torta1.textContent = producto.precio
    tortaP.appendChild(torta1)

    const torta2 = document.createElement("p")
    torta2.textContent = producto.stock
    tortaP.appendChild(torta2) 
    document.getElementById("aca").appendChild(tortaP)
    return producto
} 




/* 
const pass = 1998
let dato = Number(prompt("Ingrese su Contrasenia"));
let pruebas = 3

while (dato != pass && pruebas > 0){
    alert(`Contrasenia Incorrecta, te quedan ${pruebas} intentos`);
    pruebas--;
    dato = Number(prompt("Ingrese su Contrasenia"));
}
if(dato === pass){
    console.log( `Bienvenido`);
} */
/* const tortaDulcedeLeche = 2000;
const tortaChocolate = 1850;
const tortaMousse = 1256;
const tortaLemonPie = 1831;



const compra = () => {
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

console.log(compra()); */