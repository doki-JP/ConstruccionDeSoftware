console.log("Hola mundo de node")
//fs es el módulo filesystem, modulo para manipular archivos
const fs = require("fs")
//Escribe en el archivo del primer parámetro lo que diga el segundo.
fs.writeFileSync("hola.txt", "Hola cara de cola")

setTimeout(() => {
    console.log("xddddxdxdxdxdxdxddd")
}, 2500)
const arreglo = [1,6,234,76,2,97,22,435,5575,1233,56,1231]
//in te da el índice del arreglo, of te da el valor en el índice
for (let item of arreglo){
    setTimeout(()=> {
        console.log(item);
    }, item);   
}

console.log("soy veloz, desayuno perdedores")

const http = require("http")
const server = http.createServer((request, response) =>{
    //console.log(request);
    console.log(request.url)
    response.setHeader('Content-Type', 'text/html')
    response.write(`hola crayola`)
    response.end()
})
server.listen(2000)
