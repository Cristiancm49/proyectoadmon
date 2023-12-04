const { models } = require('../libs/sequelize');

class TransporteService { 
  
    constructor() {}

    async find() {
      const res = await models.Transporte.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Transporte.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = TransporteService;