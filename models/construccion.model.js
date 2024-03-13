const db = require('../util/database');

module.exports = class Construccion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen
    }


    static fetchname(name) {
        return db.execute('SELECT nombre FROM construccion WHERE nombre=?', 
            [name]);
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return Construccion.fetchname(this.nombre)
        .then(([rows, fieldData]) => {
            // Verificar si hay alguna fila en el resultado
            if (rows.length > 0) {
                // Si ya existe una construcción con el mismo nombre, actualiza la imagen
                return db.execute('UPDATE construccion SET imagen = ? WHERE nombre = ?', [this.imagen, this.nombre]);
            } else {
                // Si no existe una construcción con el mismo nombre, inserta una nueva
                return db.execute('INSERT INTO construccion (nombre, imagen, username) VALUES (?, ?, "JuanPablo")', [this.nombre, this.imagen]);
            }
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM construccion');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM construccion WHERE id=?', 
            [id]);
    }

    

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}