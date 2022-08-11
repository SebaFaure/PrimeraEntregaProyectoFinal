let bienvenida = "¡BIENVENIDOS A COCO MADERAS CORDOBA!"

let presentacion = "Somos una empresa dedicada a la fabricacion de productos en madera, destinados a satisfacer las necesidades del hogar"

console.log (bienvenida);
console.log(presentacion.toUpperCase());

// Pedir nombre a travez de prompt para dar una binevenida personalizada.
function bienvenidos (){
    let nombre = prompt ("Ingresa tu nombre:")
    console.log("¡¡Hola ", nombre, " gracias por visitar nuestra pagina!!");
}

// Funcion para crear automaticamente un numero de id
function crearID() { 
    return parseInt(Math.random() * 1000)
}

