const { Model, DataTypes } = require('sequelize');
const { Reserva } = require('./reserva.models');

class Resena extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'resena',
            modelName: 'Resena',
            timestamps: false
        }
    }
}

const ResenaSchema = {
    resena_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    calificacion: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    resena: {
        allowNull: false,
        type: DataTypes.STRING(250)
    },
    reserva_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Reserva,
            key: 'reserva_id'
        }
    }
}

module.exports = { Resena, ResenaSchema };
