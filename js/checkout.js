//traer del storage la torta
//color a las fallas/errores
//avisar cuando se compro/retiro torta
//validacion de contacto

const checkTorta = (torta,arregloTorta) =>{
    
    for(let k = 0; k < arregloTorta.length; k++){
        /* console.log(torta,arregloTorta[k]) */
        if(torta.id === arregloTorta[k].cake.id){
            return true;
        }
    }
    return false;
}
const getTortaIndice = (productos,torta) =>{
    /* console.log("veo productos",productos)
    console.log("veo torta",torta) */
    return productos.findIndex((elemento) => torta.id === elemento.cake.id)
}
const crearSumario = (contenido) =>{
    if (contenido.length <= 0){
        return;
    }
    let carrito  = [];
    for(let i =0; i < contenido.length; i++){
        if(checkTorta(contenido[i],carrito)){
            let index = getTortaIndice(carrito,contenido[i])
            carrito[index].cant++;
        }
        else{
            carrito.push({cake:contenido[i],cant:1})
        }
    }
    return carrito;
}

$(document).ready(()=>{
    let almacenamiento = JSON.parse(localStorage.getItem('carrito'))
    let carrito = crearSumario(almacenamiento)
    let printHtml = ``
let lista = document.getElementById("checkout")
for(let i = 0; i < carrito.length; i++){
    printHtml += `
    <div class="container d-lg-flex">
    <div class="box-1 bg-light user">
        <div class="box-inner-1 pb-3 mb-3 ">
            <div class="d-flex justify-content-between mb-3 userdetails">
                <p class="fw-bold">Tu producto</p>
            </div>
            <div id="my" class="carousel slide carousel-fade img-details" data-bs-ride="carousel" data-bs-interval="2000">
                <div class="carousel-indicators"> <button type="button" data-bs-target="#my" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button> </div>
                <div class="carousel-inner">
                    <div class="carousel-item active"> <img src="${carrito[i].cake.img}" class="d-block w-100"> </div>
                    <div class="carousel-item"> <img src="${carrito[i].cake.img}" class="d-block w-100 h-100"> </div>
                    <div class="carousel-item"> <img src="${carrito[i].cake.img}" class="d-block w-100"> </div>
                </div> <button class="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                    <div class="icon"> <span class="fas fa-arrow-left"></span> </div> <span class="visually-hidden">Anterior</span>
                </button> <button class="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                    <div class="icon"> <span class="fas fa-arrow-right"></span> </div> <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <p class="dis info my-3">${carrito[i].cake.descripcion} </p>
            <div class="radiobtn"> <input type="radio" name="box" id="one"> <input type="radio" name="box" id="two"> <input type="radio" name="box" id="three"> <label for="one" class="box py-2 first">
                    <div class="d-flex align-items-start"> <span class="circle"></span>
                        <div class="course">
                            <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold">${carrito[i].cake.nombre}</span> <span class="fas fa-dollar-sign">29</span> </div> <span>10 x Presets. Released in 2018</span>
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
                    <p class="dis fw-bold mb-2">Email</p> <input class="form-control" type="email" value="">
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
                        
                        <div class="d-flex flex-column dis">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Total</p>
                                <p class="fw-bold"><span class="fas fa-dollar-sign"></span>35.80</p>
                            </div>
                            <div class="btn btn-primary mt-2">Compra<span class="fas fa-dollar-sign px-1"></span></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>`
}
lista.innerHTML = printHtml;

})







/* <div class="d-flex align-items-center mb-3"> <img src="${carrito[i].cake.img}" class="pic rounded-circle" alt="">
            <p class="ps-2 name">Carta</p>
        </div>parte 1
        <p class="fw-lighter"><span class="fas fa-dollar-sign"></span>33.00+</p> parte 2 tu productos
        <div class="d-flex"> <input class="form-control zip" type="text" placeholder="ZIP"> <input class="form-control state" type="text" placeholder="State"> </div>
                        <div class=" my-3">
                            <p class="dis fw-bold mb-2">VAT Number</p>
                            <div class="inputWithcheck"> <input class="form-control" type="text" value="GB012345B9"> <span class="fas fa-check"></span> </div>
                        </div> parte 3
                        <div class="d-flex align-items-center justify-content-between mb-2">
                                <p>Sub total</p>
                                <p><span class="fas fa-dollar-sign"></span>33.00</p>
                            </div>
                                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                <p>IVA<span>(21%)</span></p>
                                <p><span class="fas fa-dollar-sign"></span>2.80</p>
                            </div> parte 4
        
*/