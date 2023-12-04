const { models } = require('../libs/sequelize');

class MunicipioService { 
  
    constructor() {}

    async find() {
      const res = await models.Municipio.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Municipio.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = MunicipioService;