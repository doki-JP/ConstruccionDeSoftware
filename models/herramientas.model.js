const herramientas = [
    {
        nombre: "Espada de Netherite", 
        imagen: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/Netherite_Sword_JE2_BE2.png",
        duracion: "500",
    }
];

module.exports = class Herramienta {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_herramienta, mi_imagen, mi_duración) {
        this.nombre = mi_herramienta;
        this.imagen = mi_imagen
        this.duracion=mi_duración
    }

    
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        herramientas.push({
            nombre: this.nombre,
            imagen: this.imagen,
            duracion: this.duracion,
        }); //es lo mismo que construcciones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return herramientas;
    }

}