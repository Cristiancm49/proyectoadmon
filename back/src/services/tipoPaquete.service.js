const { models } = require('../libs/sequelize');

class TipoPaqueteService { 
  
    constructor() {}

    async find() {
      const res = await models.TipoPaquete.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.TipoPaquete.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = TipoPaqueteService;