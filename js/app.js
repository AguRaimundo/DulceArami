
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
}

