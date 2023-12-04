const express = require('express'); 

const personsRouter = require('./persons.router');
const MetodoPagoRouter = require('./metodoPago.router');
const empresaController = require('./empresa.router');
const paqueteController = require('./paquete.router');
const ubicacionController = require('./ubicacion.router');
const menuController = require('./menu.router');
const municipioController = require('./municipio.router');
const departamentoController = require('./departamento.router');
const usuarioController = require('./usuario.router');
const transporteController = require('./transporte.router');
const categoriaController = require('./categoriaPaquete.router');
const relacionController = require('./paqueteRelacion.router');
const tipoPaqueteController = require('./tipoPaquete.router');
const rolController = require('./rol.router');
const reservaController = require('./reserva.router');
const clienteController = require('./cliente.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/tipopaquete', tipoPaqueteController);
  router.use('/metodopg', MetodoPagoRouter);
  router.use('/empresa', empresaController);
  router.use('/paquete', paqueteController);
  router.use('/ubicacion', ubicacionController);
  router.use('/menu', menuController);
  router.use('/departamento', departamentoController);
  router.use('/municipio', municipioController);
  router.use('/usuario', usuarioController);
  router.use('/transporte', transporteController);
  router.use('/categoriapq', categoriaController);
  router.use('/categoriapaquete', relacionController);
  router.use('/rol', rolController);
  router.use('/reserva', reservaController);
  router.use('/cliente', clienteController);


}

module.exports = routerApi;