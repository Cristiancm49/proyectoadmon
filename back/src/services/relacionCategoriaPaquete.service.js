const { models } = require('../libs/sequelize');

class PaqueteCategoriaRelacionService { 
  
    constructor() {}

    async find() {
      const res = await models.PaqueteCategoriaRelacion.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.PaqueteCategoriaRelacion.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = PaqueteCategoriaRelacionService;