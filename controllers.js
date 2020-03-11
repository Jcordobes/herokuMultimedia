const { Cliente, Pelicula } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) => {
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readCliente = (req, res) => {
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteCliente = (req, res) => {
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateCliente = (req, res) => {
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, telefono: req.body.telefono  } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createCliente = (req, res) => {
    const cliente = new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos, telefono: req.body.telefono });
    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}


// ------ PELICULAS

exports.readPeliculas = (req, res) => {
    Pelicula.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readPelicula = (req, res) => {
    Pelicula.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deletePelicula = (req, res) => {
    Pelicula.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updatePelicula = (req, res) => {
    Pelicula.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, genero: req.body.genero, calificacion: req.body.calificacion } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createPelicula = (req, res) => {
    const pelicula = new Pelicula({ nombre: req.body.nombre, genero: req.body.genero, calificacion: req.body.calificacion });
    pelicula.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}