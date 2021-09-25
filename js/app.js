alert("Bienvenido al programa 1")
let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");
let edad = 23
let dato = Number(prompt("Ingrese su edad"));
let sexo = prompt("ingrese sexo");
let palabra ; 

let dinero =Number(prompt("Ingrese su Dinero"));

if (dinero === 15){
    alert("Felicidades, con 15 pe te haces alto guiso");
}

while (" dato != edad "){
    alert("Contrasenia Incorrecta");
}
/* else if (dinero != 15){
    alert("Que lastima, con 15 pe te hacias alto guiso");
}
let numero2 = 40 */

if (sexo === "M") {
    palabra = "Bienvenido";
}else if (sexo === "F"){
    palabra = "Bienvenida";
}else {
    palabra = "Bienvenide";
}


console.log(`${palabra} ${nombre} ${apellido} tu edad es ${edad}`);