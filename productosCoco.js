// Creo el Array de productos de Coco maderas Cordoba
const productos = [
    {id: crearID(),producto: "Especiero Gourmet x8", precio: 1600},
    {id: crearID(),producto: "Especiero Gourmet x5", precio: 1200},
    {id: crearID(),producto: "Perchero Nordico 6 ganchos", precio: 3300},
    {id: crearID(),producto: "Perchero Nordico 4 ganchos", precio: 3000},
    {id: crearID(),producto: "Perchero Nordico Chico", precio: 2200},
    {id: crearID(),producto: "Tabla Asado Individual", precio: 1000},
    {id: crearID(),producto: "Tabla Asado de Corte", precio: 2500},
]; 
//console.log (productos);


// Agregar seis (6) Productos nuevos al final de nuestro array de productos y mostralos a todos en una tabla
productos.push ({id: crearID(),producto: "Tabla Picada Chica", precio: 1300});   
productos.push ({id: crearID(),producto: "Tabla Picada Grande", precio: 1800}); 
productos.push ({id: crearID(),producto: "Mesa de Arrime", precio: 2700});
productos.push ({id: crearID(),producto: "Escritorio", precio: 2100});
productos.push ({id: crearID(),producto: "Mesa Nordica", precio: 1900});
productos.push ({id: crearID(),producto: "Bandeja Matera", precio: 1750});


// Agregar productos al array atravez de prompt
function agregarProductos() {
    const id = crearID()
    const producto = prompt("Ingresa el nombre del Producto que desea agregar:")
    const precio = parseInt(prompt("Ingresa el importe:"))
      
    productos.push({id, producto, precio})
}

//Mostrar el precio Mayorista (10% de descuento)
function precioMayorista() {
    for (const producto of productos){
        let precio =(producto.precio);
        let precioMayorista = precio - (precio * 0.10)
        console.log (producto.producto, "    $", precioMayorista)}
}


//Mostrar precio minorista (15% recargo) utilizando forEach
function precioMinorista() {
    productos.forEach (function(producto, precio) {
    console.log (producto.producto);
    console.log (producto.precio + (producto.precio *0.15));
});
}

//Buscar productos con el metodo find()
function buscarProducto (){
    const productoBuscado = prompt ("¿que producto busca?")
const resultado = productos.find ((element) => element.producto === productoBuscado)
console.log(resultado);

}

//Buscar producto utilizando filter e includes

function productoFilter (){
    let buscar = prompt ("Producto buscado:")
    let resultado = productos.filter (element => element.producto.includes(buscar))
    console.table (resultado);
}

//eliminar el ultimo producto del array 
//productos.pop ()

//Variable para saber cuantos productos hay en el array
let cantidadProductos = productos.length

// Mostrar los objetos del array con sus propiedades:
//console.table (productos);

agregarProductos();
console.table (productos);

console.log("LISTA PRECIO MINORISTA")
precioMinorista();

console.log("LISTA PRECIO MAYORISTA")
precioMayorista();

console.log("PRODUCTO BUSCADO:")
productoFilter ();