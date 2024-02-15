console.log("Hola");
console.info("Info");
console.warn("Cuidado");
console.error("Error");
console.assert(1==1);
console.assert(2==1);

//VARIABLES
var juego = "Minecraft";
//acceso dentro de las llaves que declaraste, version moderna
let precio = 50;
//Constantes
const precioreal = 100;

console.log(2+3+1);


//alert("💀")
//const nombre = prompt("¿Cómo te llamas?");
//console.log("Hola "+ nombre);
const hambre = confirm("Tienes hambre?");
if (hambre) {
    console.log("Es hora de desayunar");
} else {
    console.log("Sigamos trabajando")
}

//funciones
function construir (){
    console.log("Fua chaval, menuda polla")
}
construir();
//operador flecha y funcion anónima ()
const anonimo =() => {console.log("anonimato")}

const desayuno = (comida) => {
    console.log("El desayuno de hoy es "+comida);
}
desayuno("huevito")