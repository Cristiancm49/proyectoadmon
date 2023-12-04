const { Model, DataTypes } = require('sequelize');

class Ubicacion extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'ubicacion',
            modelName: 'Ubicacion',
            timestamps: false
        }
    }
}

const UbicacionSchema = {
    ubicacion_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    calle: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    numero: {
        type: DataTypes.INTEGER
    },
    departamento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'departamento',
            key: 'departamento_id'
        }
    },
    municipio_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'municipio',
            key: 'municipio_id'
        }
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'empresa',
            key: 'empresa_id'
        }
    }
}

module.exports = { Ubicacion, UbicacionSchema };
