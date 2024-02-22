console.log("Hola mundo de node")
//fs es el módulo filesystem, modulo para manipular archivos
const fs = require("fs")
//Escribe en el archivo del primer parámetro lo que diga el segundo.
fs.writeFileSync("hola.txt", "Hola cara de cola")

const arreglo = [1,6,234,76,2,97,22]
//in te da el índice del arreglo, of te da el valor en el índice
for (let item of arreglo){
    setTimeout(()=> {
        console.log(item);
    }, item);
    
}