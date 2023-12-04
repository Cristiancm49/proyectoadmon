const { models } = require('../libs/sequelize');

class DepartamentoService { 
  
    constructor() {}

    async find() {
      const res = await models.Departamento.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Departamento.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = DepartamentoService;