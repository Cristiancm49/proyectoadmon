const { Model, DataTypes } = require('sequelize');

class Transporte extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'transporte',
            modelName: 'Transporte',
            timestamps: false
        }
    }
}

const TransporteSchema = {
    transporte_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    transporte: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    capacidad_maxima: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    precio_por_persona: {
        allowNull: false,
        type: DataTypes.FLOAT
    }
}

module.exports = { Transporte, TransporteSchema };