
const campos = document.querySelectorAll ("input")
const BotonAgregar = document.querySelectorAll ("a.btn btn-outline-success")
const botonBuscar = document.querySelector ("#botonBuscar")
const contenedorProductos = document.querySelector ("#contenedorProductos")
const carritoCompras = document.querySelector ("#carritoCompras")

function crearCards (){
    productos.forEach (producto => {
        contenedorProductos.innerHTML += ` <div class="card">
        <img src="imagenesProductos/especierox6.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.producto}</h5>
          <p>$${producto.precio}</p>
          <button id= "botonAgregar${producto.id}" class="btn btn-outline-success">AGREGAR</button>
        </div>
      </div>`
    })   
}
crearCards ()


function verInformacion() {
    campos.forEach (campo => {
        console.log (campo.value)
    })   
}
verInformacion()

botonBuscar.addEventListener ("mousemove", ()=> {
    botonBuscar.title = "Haz click para buscar el Producto"
})

function focoEnCampos() {
    campos.forEach(campo => {
        campo.addEventListener("focus", ()=> {campo.className = "camposFoco"})
        campo.addEventListener("blur", ()=> {campo.className = ""})
    })
}
focoEnCampos()



