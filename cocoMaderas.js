
// Variables y Constantes
const contenedorProductos = document.querySelector ("#contenedorProductos")
const carritoDeCompras = document.querySelector ("#carritoDeCompras")
let carrito = JSON.parse (localStorage.getItem("carrito"))||[];
const campos = document.querySelectorAll ("input")
const botonBuscar = document.querySelector ("#botonBuscar")

//Array de productos de Coco maderas Cordoba
const productos = [
    {id: crearID(),producto: "Especiero Gourmet x8", precio: 1600, img:"imagenesProductos/especieroGourmet8.jpg", cantidad:""},
    {id: crearID(),producto: "Especiero Gourmet x5", precio: 1200, img:"imagenesProductos/especieroGourmet5.jpg", cantidad:""},
    {id: crearID(),producto: "Perchero Nordico 6 ganchos", precio: 3300, img:"imagenesProductos/percheroNordico6.jpg", cantidad:""},
    {id: crearID(),producto: "Perchero Nordico 4 ganchos", precio: 3000, img:"imagenesProductos/percheroNordico4.jpg", cantidad:""},
    {id: crearID(),producto: "Perchero Nordico Chico", precio: 2200, img:"imagenesProductos/percheroLineal.jpg", cantidad:""},
    {id: crearID(),producto: "Huevera Premium x6", precio: 870, img:"imagenesProductos/hueveraPremium6.jpg", cantidad:""},
    {id: crearID(),producto: "Huevera Premium x12", precio: 1300, img:"imagenesProductos/hueveraPremium12.jpg", cantidad:""},
    {id: crearID(),producto: "Mesas Nordica x3", precio: 4950, img:"imagenesProductos/mesasNordicasX3.jpg", cantidad:""}
]; 

// Funcion para crear automaticamente un numero de id
function crearID() { 
    return parseInt(Math.random() * 100)
}  


//Mostrar el precio Mayorista (10% de descuento) por consola. para uso interno.
//Me sirve para buscar por consola rapidamente el precio mayorista de todos mis productos del Array. 
function precioMayorista() {
    for (const producto of productos){
        let precioMayorista = producto.precio - (producto.precio * 0.10);
        console.table (producto.producto);
        console.table (precioMayorista);
    }
}

//Buscar productos con el metodo find()
//Falta vincularlo con el boton buscar y mostrarlo en la pagina web
function buscarProducto (){
    const productoBuscado = prompt ("¿que producto busca?")
const resultado = productos.find ((element) => element.producto == productoBuscado)
console.log(resultado);
}

// agregar evento a los elementos input
function verInformacion() {
    campos.forEach (campo => {
        console.log (campo.value)
    })   
}

// agregar evento a los elementos input
function focoEnCampos() {
    campos.forEach(campo => {
        campo.addEventListener("focus", ()=> {campo.className = "camposFoco"})
        campo.addEventListener("blur", ()=> {campo.className = ""})
    })
}


// agregar evento al elemento button
botonBuscar.addEventListener ("mousemove", ()=> {
    botonBuscar.title = "Haz click para buscar un Producto"
})

//pintar los productos en la pagina con los productos del array
function crearCards (){
    productos.forEach (producto => {
        contenedorProductos.innerHTML += ` <div class="card m-3">
        <img src=${producto.img} class="img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.producto}</h5>
          <p>$${producto.precio}</p>
          <button id= "botonAgregar${producto.id}" class="btn btn-dark">AGREGAR</button>
        </div>
      </div>`
    }) 
    
FuncionalidadBotonAgregar();  
}


function FuncionalidadBotonAgregar() {
    productos.forEach((producto) => {
        document.querySelector (`#botonAgregar${producto.id}`) .addEventListener ("click", ()=> {
        console.log (producto);
        AgregarAlCarrito(producto);
    });     
});
}

function AgregarAlCarrito (producto){
    let existe = carrito.some ((productoSome) => productoSome.id === producto.id);
    if (existe === false) {
        producto.cantidad = 1;
        carrito.push(producto);
    } else {
        let prodFind = carrito.find ((productoFind) => productoFind === producto.id);
        producto.cantidad++;
    }
    console.log(carrito);
    VerProductosCarrito();
}

function VerProductosCarrito (producto){
    carritoDeCompras.innerHTML = ""
    carrito.forEach (producto => {
    carritoDeCompras.innerHTML +=   `<tr>
                                        <th scope="row">${producto.id}</th>
                                        <td>${producto.cantidad}</td>
                                        <td>${producto.producto}</td>
                                        <td>${producto.precio}</td>
                                        <td> <button id= "botonBorrar${producto.id}" class="btn btn-dark"> BORRAR </button></td>
                                    </tr>`
    }) 
    
    localStorage.setItem("carrito",JSON.stringify (carrito))

    BorrarProductoCarrito();
}

function BorrarProductoCarrito() {
    carrito.forEach((producto) => {
        document
        .querySelector (`#botonBorrar${producto.id}`) 
        .addEventListener ("click", ()=> {
        carrito = carrito.filter((productoFilter) => productoFilter.id !== producto.id);

        VerProductosCarrito(); 
    });      
});
}

focoEnCampos();
crearCards ();
AgregarAlCarrito();