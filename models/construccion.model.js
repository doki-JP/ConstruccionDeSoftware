const construcciones = [
  {
    nombre: "casa",
    imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
  },
];

module.exports = class Construccion {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(name, imagen) {
    this.nombre = name;
    this.imagen = img;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    construcciones.push({
      nombre: this.nombre,
      imagen: this.imagen,
    });
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return construcciones;
  }
};
