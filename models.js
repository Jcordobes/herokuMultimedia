const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String, telefono: String })
);

const Pelicula = mongoose.model('Pelicula',
  new mongoose.Schema({ nombre: String, genero: String, calificacion: Number })
);

module.exports = {
  Cliente: Cliente,
  Pelicula: Pelicula
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }