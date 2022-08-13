//Crear la clase Proveedor
class Proveedor {
  constructor (id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
// Array de Proveedores
const proveedores = [];

//funcion para agregar proveedores
function agregarProveedores(){
  let id = crearID()
  let nombre = prompt ("Nombre del Proveedor:")
  let apellido = prompt ("Apellido del Proveedor:")

  proveedores.push(new Proveedor(id, nombre, apellido))
  console.table (proveedores);
}
// Crear nuevos proveedores de forma estatica
const proveedor1 = new Proveedor (crearID(),"Rodrigo","Ferraro");
const proveedor2 = new Proveedor (crearID(),"Danilo","Rivero");
const proveedor3 = new Proveedor (crearID(),"Mariano","Giovanetti");
const proveedor4 = new Proveedor (crearID(),"Franco","Farias");

//Agregar los proveedores al Array de Proveedores
proveedores.push (proveedor1)
proveedores.push (proveedor2)
proveedores.push (proveedor3)
proveedores.push (proveedor4)


// Mostrar en consola (todas las propiedades o solo las que nos interesan)
console.log (Proveedor);
console.log (Proveedor.apellido);
//Variable para saber cuantos proveedores hay en el array
let cantidadProveedores = proveedores.length

console.log("LISTADO DE PROVEEDORES");
agregarProveedores();