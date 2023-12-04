const { models } = require('../libs/sequelize');

class RolService { 
  
    constructor() {}

    async find() {
      const res = await models.Rol.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Rol.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = RolService;