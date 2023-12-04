const { models } = require('../libs/sequelize');

class MenuService { 
  
    constructor() {}

    async find() {
      const res = await models.Menu.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Menu.findByPk(id);
      return res;
    }

  
  }
  
  module.exports = MenuService;