const { Model, DataTypes } = require('sequelize');
const { Transporte } = require('./transporte.models');


class Paquete extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'paquete',
            modelName: 'Paquete',
            timestamps: false
        }
    }
}

const PaqueteSchema = {
    paquete_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    img_url: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },
    nombre_paquete: {
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    precio_por_persona: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    descripcion_paquete: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    menu_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'menu',
            key: 'menu_id'
        }
    },
    disponibilidad: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    tipo_paquete_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tipo_paquete',
            key: 'tipo_paquete_id'
        }
    },
    transporte_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Transporte,
            key: 'transporte_id'
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


module.exports = { Paquete, PaqueteSchema };
