
class Tortas{
    constructor(nombre, descripcion, img, ingredientes, precio, stock, id){
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.img = img,
    this.ingredientes = ingredientes,
    this.precio = precio,
    this.stock = stock,
    this.id = id
    }
    getStock = () => {return this.stock}
    getNombre = () => {return this.nombre}
    getIngredientes = () => {return this.ingredientes}
    getPrecio = () => {return this.precio}
    isAvailable = () => {return this.stock > 0 ? true : false}
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
        }
        getTotal = () => {return this.total}

            agregarProducto = (torta) =>{
            let inputCant = document.getElementById(`input${torta.id}`).value
            console.log("gordatonta",inputCant)
            if(torta.isAvailable() && torta.getStock()>=inputCant && inputCant > 0){
                torta.stock -= inputCant;
                console.log("veo el producto", this.productos)
                for(let j=0; j<inputCant; j++){
                    this.productos.push(torta);
                }
                this.total += torta.getPrecio() * inputCant;
                console.log("a ver",carro)
                localStorage.setItem("carrito",JSON.stringify(this.productos));
            }else{
                if(!torta.isAvailable()){
                    alert("No hay Stock Disponible")
                }
                if(torta.getStock()<inputCant){
                    alert("No hay Suficiente Stock Disponible")
                }
                if(inputCant<=0){
                    alert("Error")
                }
            }
        }
        quitarProducto = (torta) => {
            console.log(torta)
            let contentAux= [];
            let index = getTortaIndice(this.productos,torta);
            for(let k=0; k<this.productos.length; k++) {
                if(k!==index) {
                contentAux.push(this.productos[k]);
                } 
            }
            torta.stock++;
            this.productos = contentAux;
            this.total = this.total - torta.getPrecio()
            localStorage.setItem("carrito",JSON.stringify(this.productos));
            
        }
    };
    //getTortaIndice devuelve la posicion de la torta en el listado
    const getTortaIndice = (productos,torta) =>{
        return productos.findIndex((elemento) => torta.id === elemento.id)
    }

let carro;
let queHaySt = localStorage.getItem("carrito");

if(queHaySt){
    let total = 0;
    let prueba = JSON.parse(queHaySt);
    console.log("veola prueba",prueba)
    for(let t = 0; t<prueba.length; t++){
        total+=prueba[t].precio
    }
    carro = new Carrito(prueba,total);
}else{
    carro = new Carrito([],0);
}
console.log("veo el carro",carro)

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
                    </div>
                    <img src="${baseDatoTorta[i].img}" alt="Torta Brownie" width="200" class="ml-lg-5 order-1 order-lg-2">
                    </div>
                            <div class="btCompra">
                                <input type="submit" value="Comprar" onclick="carro.agregarProducto(baseDatoTorta[${i}])">
                                <button type="button" class="btn btn-danger" onclick="carro.quitarProducto(baseDatoTorta[${i}])">Quitar</button>
                            </div>
                            <div><input type="number" value="0" id="input${baseDatoTorta[i].id}"></div>
            </li>`
}
lista.innerHTML = printHtml;




