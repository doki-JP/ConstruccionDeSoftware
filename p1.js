/*
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
    console.log("se construyó")
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
document.write("hola")*/

//Ejercicio #1

let numero = prompt("Dame un número")
document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>")
for (let c = 1; c <= numero; c++) {
    let cuadrado = c * c;
    let cubo = c * c * c;
    document.write("<tr>");
    document.write("<td>" + c + "</td>");
    document.write("<td>" + cuadrado + "</td>");
    document.write("<td>" + cubo + "</td>");
    document.write("</tr>");
}

//Ejercicio #2
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let sumaCorrecta = num1 + num2;
let tiempoInicio = Date.now();
let respuestaUsuario = prompt("¿Cuál es la suma de " + num1 + " + " + num2 + "?");
let tiempoFin = Date.now();
let tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000;

if (respuestaUsuario == sumaCorrecta) {
    document.write("¡Respuesta correcta! <br>");
} else {
    document.write("Respuesta incorrecta. <br>");
}
document.write("Tiempo transcurrido: " + tiempoTranscurrido + " segundos.");


//Ejercicio 3
function E3(numeros) {
    var negativos = 0;
    var ceros = 0;
    var positivos = 0;
    for (let c = 0; c < numeros.length; c++) {
        if (numeros[c] < 0) {
            // Incrementar el contador de números negativos
            negativos++;
        } else if (numeros[c] === 0) {
            // Incrementar el contador de ceros
            ceros++;
        } else {
            // Incrementar el contador de valores mayores a cero
            positivos++;
        }
    }
    return {
        negativos: negativos,
        ceros: ceros,
        positivos: positivos
    };
}
//Casos de prueba
var numer = [3, -2, 0, 5, -1, 0, 2];
var resultados = E3(numer);
console.log("Cantidad de números negativos:", resultados.negativos);
console.log("Cantidad de ceros:", resultados.ceros);
console.log("Cantidad de valores mayores a cero:", resultados.positivos);

//Ejercicio 4
function E4(matrix) {
    let promediosArray = [];
    for (let i = 0; i < matrix.length; i++) {
        let fila = matrix[i];
        let suma = 0;
        for (let j = 0; j < fila.length; j++) {
            suma += fila[j];
        }
        let promedio = suma / fila.length;
        promediosArray.push(promedio);
    }
    return promediosArray;
}
let matrix = [
    [10, 20, 30],
    [15, 25, 35],
    [5, 10, 15]
];
let promediosResultantes = E4(matrix);
console.log("Promedios de cada fila:", promediosResultantes);

//Ejercicio 5
function inverso(numb) {
    let numArray = numb.toString();
    let charArray = numArray.split('');
    let invArray = charArray.reverse();
    let invChar = invArray.join('');
    let invNum = parseInt(invChar);
    return invNum;
}
//Casos de prueba
let number = 12345;
let numeroInvertido = inverso(number);
console.log("Número invertido:", numeroInvertido);
console.log("Número invertido:", inverso(1223334444555556));
//Ejercicio 6 Área de un rectángulo

function Rectangulo(base, altura) {
    let rectangulo = {
        base: base,
        altura: altura
    }
    rectangulo.calcularArea = function() {
        return rectangulo.base * rectangulo.altura
    }
    rectangulo.calcularPerimetro = function() {
        return (rectangulo.base + rectangulo.altura) *2
    }
    return rectangulo;
}
let rectangulo = Rectangulo(5, 3);
console.log("Base: " + rectangulo.base + ", Altura: " + rectangulo.altura);
console.log("Área: " + rectangulo.calcularArea());
console.log("Perímetro: " + rectangulo.calcularPerimetro());






