const urlGet = "https://api.jsonbin.io/b/6181ae6caa02be1d4462cb17/3"

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
    
    $(document).ready( async () =>{
        await $.ajax({
            url: urlGet,
            dataType:'json',
            headers:{
                'secret-key':'$2b$10$5v73AYaqW5XBD2NvX3bpU.orFV2GV.KjmkgzveADdmdF.0tmgFGZm'},
                success: (response) =>{
                    for(let i = 0; i < response.length; i++){
                        let torta = new Tortas(response[i].nombre, response[i].descripcion, response[i].img, response[i].ingredientes, response[i].precio, response[i].stock, response[i].id)
                    baseDatoTorta.push(torta)
                    }
    
                    console.log(baseDatoTorta)}
        })
        let printHtml = ``
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
                                    <div id="cantValue">
                                    <input type="number" value="0" id="input${baseDatoTorta[i].id}"> 
                                    <div id="parraf${baseDatoTorta[i].id}"></div>
                                    </div>
                    </li>`
                    $("#ulDefinitivo").html(printHtml)
        }})
let baseDatoTorta = [];

class Carrito{
    constructor(productos,total){
        this.productos = productos
        this.total = total
        }
        getTotal = () => {return this.total}

            agregarProducto = (torta) =>{
            let inputCant = document.getElementById(`input${torta.id}`).value
            console.log(inputCant)
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
                    if($(`#pError${torta.id}`).is(":visible")){
                        return;
                    }
                    $(`#parraf${torta.id}`).prepend(`<p id="pError${torta.id}" style="display: none" class="errorP"> No seleccionaste una torta </p>`);
                    $("p").fadeIn("slow")
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

/* let printHtml = `` */
let lista = document.getElementById("ulDefinitivo")
/* for(let i = 0; i < baseDatoTorta.length; i++){
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
                            <div id="cantValue">
                            <input type="number" value="0" id="input${baseDatoTorta[i].id}"> 
                            <div id="parraf${baseDatoTorta[i].id}"></div>
                            </div>
            </li>`
}
 */




//tengo el arreglo, crear basedatotorta













