const { models } = require('../libs/sequelize');

class UbicacionService { 
  
    constructor() {}

    async find() {
      const res = await models.Ubicacion.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Ubicacion.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = UbicacionService;