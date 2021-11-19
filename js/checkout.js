//traer del storage la torta
//color a las fallas/errores
//avisar cuando se compro/retiro torta
//validacion de contacto
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
    <div class="container d-lg-flex">
    <div class="box-1 bg-light user">
        <div class="d-flex align-items-center mb-3"> <img src="${baseDatoTorta[i].img}" class="pic rounded-circle" alt="">
            <p class="ps-2 name">Oliur</p>
        </div>
        <div class="box-inner-1 pb-3 mb-3 ">
            <div class="d-flex justify-content-between mb-3 userdetails">
                <p class="fw-bold">Lightroom Presets</p>
                <p class="fw-lighter"><span class="fas fa-dollar-sign"></span>33.00+</p>
            </div>
            <div id="my" class="carousel slide carousel-fade img-details" data-bs-ride="carousel" data-bs-interval="2000">
                <div class="carousel-indicators"> <button type="button" data-bs-target="#my" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button> </div>
                <div class="carousel-inner">
                    <div class="carousel-item active"> <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100"> </div>
                    <div class="carousel-item"> <img src="https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100 h-100"> </div>
                    <div class="carousel-item"> <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100"> </div>
                </div> <button class="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                    <div class="icon"> <span class="fas fa-arrow-left"></span> </div> <span class="visually-hidden">Anterior</span>
                </button> <button class="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                    <div class="icon"> <span class="fas fa-arrow-right"></span> </div> <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <p class="dis info my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa sed officiis odio </p>
            <div class="radiobtn"> <input type="radio" name="box" id="one"> <input type="radio" name="box" id="two"> <input type="radio" name="box" id="three"> <label for="one" class="box py-2 first">
                    <div class="d-flex align-items-start"> <span class="circle"></span>
                        <div class="course">
                            <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold"> Collection 01 </span> <span class="fas fa-dollar-sign">29</span> </div> <span>10 x Presets. Released in 2018</span>
                        </div>
                    </div>
                </label> <label for="two" class="box py-2 second">
                    <div class="d-flex"> <span class="circle"></span>
                        <div class="course">
                            <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold"> Collection 01 </span> <span class="fas fa-dollar-sign">29</span> </div> <span>10 x Presets. Released in 2018</span>
                        </div>
                    </div>
                </label> <label for="three" class="box py-2 third">
                    <div class="d-flex"> <span class="circle"></span>
                        <div class="course">
                            <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold"> Collection 01 </span> <span class="fas fa-dollar-sign">29</span> </div> <span>10 x Presets. Released in 2018</span>
                        </div>
                    </div>
                </label> </div>
        </div>
    </div>
    <div class="box-2">
        <div class="box-inner-2">
            <div>
                <p class="fw-bold">Detalle de Pago</p>
                <p class="dis mb-3">Completa rellenando con tus datos</p>
            </div>
            <form action="">
                <div class="mb-3">
                    <p class="dis fw-bold mb-2">Email</p> <input class="form-control" type="email" value="luke@skywalker.com">
                </div>
                <div>
                    <p class="dis fw-bold mb-2">Datos de Tarjeta</p>
                    <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                        <div class="fab fa-cc-visa ps-3"></div> <input type="text" class="form-control" placeholder="Datos de Tarjeta">
                        <div class="d-flex w-50"> <input type="text" class="form-control px-0" placeholder="MM/YY"> <input type="password" maxlength=3 class="form-control px-0" placeholder="CVV"> </div>
                    </div>
                    <div class="my-3 cardname">
                        <p class="dis fw-bold mb-2">Nombre Completo de Tarjeta</p> <input class="form-control" type="text">
                    </div>
                    <div class="address">
                        <p class="dis fw-bold mb-3">Direccion de Compra</p> <select class="form-select" aria-label="Default select example">
                            <option selected hidden>Argentina</option>
                            <option value="entreRios">Entre Rios</option>
                            <option value="buenosAires">Buenos Aires</option>
                            <option value="provinciaBuenosAires">Provincia de Buenos Aires</option>
                            <option value="cordoba">Cordoba</option>
                            <option value="santaFe">Santa Fe</option>
                            <option value="chaco">Chaco</option>
                            <option value="tierradelFuego">Tierra del Fuego</option>
                            <option value="misiones">Misiones</option>
                            <option value="santaCruz">Santa Cruz</option>
                            <option value="rioNegro">Rio Negro</option>
                            <option value="mendoza">Mendoza</option>
                            <option value="chubut">Chubut</option>
                            <option value="salta">Salta</option>
                            <option value="formosa">Formosa</option>
                            <option value="sanLuis">San Luis</option>
                            <option value="sanJuan">San Juan</option>
                            <option value="jujuy">Jujuy</option>
                            <option value="santaigodelEstero">Santiago del Estero</option>
                            <option value="laRioja">La Rioja</option>
                            <option value="catamarca">Catamarca</option>
                        </select>
                        <div class="d-flex"> <input class="form-control zip" type="text" placeholder="ZIP"> <input class="form-control state" type="text" placeholder="State"> </div>
                        <!-- <div class=" my-3">
                            <p class="dis fw-bold mb-2">VAT Number</p>
                            <div class="inputWithcheck"> <input class="form-control" type="text" value="GB012345B9"> <span class="fas fa-check"></span> </div>
                        </div> -->
                        <div class="d-flex flex-column dis">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p>Sub total</p>
                                <p><span class="fas fa-dollar-sign"></span>33.00</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p>IVA<span>(21%)</span></p>
                                <p><span class="fas fa-dollar-sign"></span>2.80</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Total</p>
                                <p class="fw-bold"><span class="fas fa-dollar-sign"></span>35.80</p>
                            </div>
                            <div class="btn btn-primary mt-2">Pay<span class="fas fa-dollar-sign px-1"></span>35.80 </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>`
}
lista.innerHTML = printHtml;





























/* $(document).ready( async () =>{
    await $.ajax({
        url: urlGet,
        dataType:'json',
        headers:{
            'secret-key':'$2b$10$5v73AYaqW5XBD2NvX3bpU.orFV2GV.KjmkgzveADdmdF.0tmgFGZm'},
            success: (response) =>{
                console.log(response)
                for(let i = 0; i < response.length; i++){
                    let torta = new Tortas(response[i].nombre, response[i].descripcion, response[i].img, response[i].ingredientes, response[i].precio, response[i].stock, response[i].id)
                baseDatoTorta.push(torta)
                }
            }
    })
    let printHtml = ``
    for(let i = 0; i < baseDatoTorta.length; i++){
        printHtml += `
        <div class="container d-lg-flex">
        <div class="box-1 bg-light user">
            <div class="d-flex align-items-center mb-3"> <img src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="pic rounded-circle" alt="">
                <p class="ps-2 name">Oliur</p>
            </div>
            <div class="box-inner-1 pb-3 mb-3 ">
                <div class="d-flex justify-content-between mb-3 userdetails">
                    <p class="fw-bold">Lightroom Presets</p>
                    <p class="fw-lighter"><span class="fas fa-dollar-sign"></span>33.00+</p>
                </div>
                <div id="my" class="carousel slide carousel-fade img-details" data-bs-ride="carousel" data-bs-interval="2000">
                    <div class="carousel-indicators"> <button type="button" data-bs-target="#my" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button> </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active"> <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100"> </div>
                        <div class="carousel-item"> <img src="https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100 h-100"> </div>
                        <div class="carousel-item"> <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100"> </div>
                    </div> <button class="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                        <div class="icon"> <span class="fas fa-arrow-left"></span> </div> <span class="visually-hidden">Anterior</span>
                    </button> <button class="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                        <div class="icon"> <span class="fas fa-arrow-right"></span> </div> <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
                <p class="dis info my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa sed officiis odio </p>
                <div class="radiobtn"> <input type="radio" name="box" id="one"> <input type="radio" name="box" id="two"> <input type="radio" name="box" id="three"> <label for="one" class="box py-2 first">
                        <div class="d-flex align-items-start"> <span class="circle"></span>
                            <div class="course">
                                <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold"> Collection 01 </span> <span class="fas fa-dollar-sign">29</span> </div> <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label> <label for="two" class="box py-2 second">
                        <div class="d-flex"> <span class="circle"></span>
                            <div class="course">
                                <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold"> Collection 01 </span> <span class="fas fa-dollar-sign">29</span> </div> <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label> <label for="three" class="box py-2 third">
                        <div class="d-flex"> <span class="circle"></span>
                            <div class="course">
                                <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold"> Collection 01 </span> <span class="fas fa-dollar-sign">29</span> </div> <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label> </div>
            </div>
        </div>
        <div class="box-2">
            <div class="box-inner-2">
                <div>
                    <p class="fw-bold">Detalle de Pago</p>
                    <p class="dis mb-3">Completa rellenando con tus datos</p>
                </div>
                <form action="">
                    <div class="mb-3">
                        <p class="dis fw-bold mb-2">Email</p> <input class="form-control" type="email" value="luke@skywalker.com">
                    </div>
                    <div>
                        <p class="dis fw-bold mb-2">Datos de Tarjeta</p>
                        <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                            <div class="fab fa-cc-visa ps-3"></div> <input type="text" class="form-control" placeholder="Datos de Tarjeta">
                            <div class="d-flex w-50"> <input type="text" class="form-control px-0" placeholder="MM/YY"> <input type="password" maxlength=3 class="form-control px-0" placeholder="CVV"> </div>
                        </div>
                        <div class="my-3 cardname">
                            <p class="dis fw-bold mb-2">Nombre Completo de Tarjeta</p> <input class="form-control" type="text">
                        </div>
                        <div class="address">
                            <p class="dis fw-bold mb-3">Direccion de Compra</p> <select class="form-select" aria-label="Default select example">
                                <option selected hidden>Argentina</option>
                                <option value="entreRios">Entre Rios</option>
                                <option value="buenosAires">Buenos Aires</option>
                                <option value="provinciaBuenosAires">Provincia de Buenos Aires</option>
                                <option value="cordoba">Cordoba</option>
                                <option value="santaFe">Santa Fe</option>
                                <option value="chaco">Chaco</option>
                                <option value="tierradelFuego">Tierra del Fuego</option>
                                <option value="misiones">Misiones</option>
                                <option value="santaCruz">Santa Cruz</option>
                                <option value="rioNegro">Rio Negro</option>
                                <option value="mendoza">Mendoza</option>
                                <option value="chubut">Chubut</option>
                                <option value="salta">Salta</option>
                                <option value="formosa">Formosa</option>
                                <option value="sanLuis">San Luis</option>
                                <option value="sanJuan">San Juan</option>
                                <option value="jujuy">Jujuy</option>
                                <option value="santaigodelEstero">Santiago del Estero</option>
                                <option value="laRioja">La Rioja</option>
                                <option value="catamarca">Catamarca</option>
                            </select>
                            <div class="d-flex"> <input class="form-control zip" type="text" placeholder="ZIP"> <input class="form-control state" type="text" placeholder="State"> </div>
                            <!-- <div class=" my-3">
                                <p class="dis fw-bold mb-2">VAT Number</p>
                                <div class="inputWithcheck"> <input class="form-control" type="text" value="GB012345B9"> <span class="fas fa-check"></span> </div>
                            </div> -->
                            <div class="d-flex flex-column dis">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <p>Sub total</p>
                                    <p><span class="fas fa-dollar-sign"></span>33.00</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <p>IVA<span>(21%)</span></p>
                                    <p><span class="fas fa-dollar-sign"></span>2.80</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <p class="fw-bold">Total</p>
                                    <p class="fw-bold"><span class="fas fa-dollar-sign"></span>35.80</p>
                                </div>
                                <div class="btn btn-primary mt-2">Pay<span class="fas fa-dollar-sign px-1"></span>35.80 </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>`
                $("#ulDefinitivo").html(printHtml)
    }}) */