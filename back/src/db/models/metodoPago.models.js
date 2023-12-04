const { Model, DataTypes, sequelize } = require('sequelize');

const METODOPG_TABLE = 'metodo_pago'

class MetodoPago extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'metodo_pago',
            modelName: 'MetodoPago',
            timestamps: false
        }
    }
}

const MetodoPagoSchema = {
    metodo_pago_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    metodo_pago: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

module.exports = { MetodoPago, MetodoPagoSchema };