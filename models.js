const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String, edad: Number, usuario: String })
);

const Pelicula = mongoose.model('Pelicula',
new mongoose.Schema({ nombre: String, precio: String, genero: String, calificacion: String })
);

module.exports = {
  Cliente: Cliente,
  Pelicula: Pelicula
}
