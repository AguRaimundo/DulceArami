const checkTorta = (torta,arregloTorta) =>{
    
    for(let k = 0; k < arregloTorta.length; k++){
        if(torta.id === arregloTorta[k].cake.id){
            return true;
        }
    }
    return false;
}
const getTortaIndice = (productos,torta) =>{
    
    return productos.findIndex((elemento) => torta.id === elemento.cake.id)
}

const crearSumario = (contenido) =>{
    if (contenido.length <= 0){
        return;
    }
    let carrito  = [];
    for(let i =0; i < contenido.length; i++){
        if(checkTorta(contenido[i],carrito)){   //me fijo si esta la torta 
            let index = getTortaIndice(carrito,contenido[i])
            carrito[index].cant++;
        }
        else{
            carrito.push({cake:contenido[i],cant:1})
        }
    }
    return carrito;
}
//Esta funcion me devuelve el total de las sumas de las tortas
const calculoTotal = (carrito) =>{
    let suma = 0;
    for(let i = 0; i < carrito.length; i++){
        suma+=carrito[i].cake.precio*carrito[i].cant

    }
    return suma
}


let lista = document.getElementById("checkout")
$(document).ready(()=>{
    let almacenamiento = JSON.parse(localStorage.getItem('carrito'))
    let carrito = crearSumario(almacenamiento)
    let printHtml = `<div class="container d-lg-flex">
    <div class="box-1 bg-light user">
        <div class="box-inner-1 pb-3 mb-3 ">
            <div class="d-flex justify-content-between mb-3 userdetails">
                <p class="fw-bold">Tu producto</p>
            </div>
            <div class="radiobtn"> `
            for(let i =0; i < carrito.length; i++){
                printHtml +=`<input type="radio" name="box" id="${carrito[i].cake.id}">`    
            }
            for(let i =0; i < carrito.length; i++){
                printHtml +=`<label for="${carrito[i].cake.id}" class="box py-2 first">
                <div class="d-flex align-items-start"> <span class="circle"></span>
                    <div class="course">
                        <div class="d-flex align-items-center justify-content-between mb-2"> <span class="fw-bold">${carrito[i].cake.nombre}</span> <span class="fas fa-dollar-sign">${carrito[i].cake.precio}</span> </div> <span>${carrito[i].cant}</span>
                    </div>
                </div>
            </label> `    
            }

    printHtml += `</div>
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
                                <p class="fw-bold"><span class="fas fa-dollar-sign"></span>${calculoTotal(carrito)}</p>
                            </div>
                            <div class="btn btn-primary mt-2">Compra<span class="fas fa-dollar-sign px-1"></span></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>`

lista.innerHTML = printHtml;
})