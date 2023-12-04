const { models } = require('../libs/sequelize');

class CategoriaPaqueteService { 
  
    constructor() {}

    async find() {
      const res = await models.CategoriaPaquete.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.CategoriaPaquete.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = CategoriaPaqueteService;