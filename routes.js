const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/peliculas",     cors(), controller.readPeliculas);  // Read All
router.get    ("/peliculas/:id", cors(), controller.readPelicula);   // Read
router.delete ("/peliculas/:id", cors(), controller.deletePelicula); // Delete
router.put    ("/peliculas/:id", cors(), controller.updatePelicula); // Update
router.post   ("/peliculas",     cors(), controller.createPelicula); // Create


module.exports = router;
