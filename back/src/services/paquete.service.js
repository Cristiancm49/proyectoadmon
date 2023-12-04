const { models } = require('../libs/sequelize');
const { Transporte } = require('../db/models/transporte.models');

class PaqueteService {

  constructor() { }

  async find() {
    const res = await models.Paquete.findAll(
      {
        include: [{
          model: Transporte,
        }, {
          model: models.TipoPaquete,
        }, {
          model: models.Menu,
        }, {
          model: models.Empresa,
        }]
      },
    );
    return res;
  }

  async findOne(id) {
    const res = await models.Paquete.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Paquete.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }

}

module.exports = PaqueteService;