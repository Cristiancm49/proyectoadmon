const { models } = require('../libs/sequelize');

class CuponDesceuntoService { 
  
    constructor() {}

    async find() {
      const res = await models.CuponDescuento.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.CuponDescuento.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = CuponDesceuntoService;