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
//arreglos
const arreglo = ["Elemento", "jijija"]
const arreglo1 = new Array();
arreglo.push(123)

console.log(arreglo)
//Acá abajo va a extender el arreglo y lo colocará en el 10, los no ocupados van a ser nulos
arreglo[10]="bromita"
arreglo["dos"] = 45

for (let c =0;c<arreglo.length;c++){
    console.log(arreglo[c])
}

for (let celda in arreglo){
    console.log(celda)
}

//Objetos

const objeto = {atributo: "valor", atributo2:"valor2"}
objeto.atributo3 = "caca"
console.log(objeto)


for (let attr of arreglo){
    console.log(attr)
}

for (let attr in objeto){
    console.log(attr)
}

//modificar html
document.write("hola")