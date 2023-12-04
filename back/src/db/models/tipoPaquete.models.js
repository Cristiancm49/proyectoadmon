const { Model, DataTypes } = require('sequelize');

class TipoPaquete extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'tipo_paquete',
            modelName: 'TipoPaquete',
            timestamps: false
        }
    }
}

const TipoPaqueteSchema = {
    tipo_paquete_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    tipo_paquete: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    cantidad_personas: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

module.exports = { TipoPaquete, TipoPaqueteSchema };