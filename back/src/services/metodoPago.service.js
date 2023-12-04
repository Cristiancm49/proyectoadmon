const { models } = require('../libs/sequelize');

class MetodoPagoService { 
  
    constructor() {}

    async find() {
      const res = await models.MetodoPago.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.MetodoPago.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = MetodoPagoService;