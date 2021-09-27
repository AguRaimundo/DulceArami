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
const tortaDulcedeLeche = 2000;
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

console.log(compra());