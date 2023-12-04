const { Model, DataTypes } = require('sequelize');

class Auditoria extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'auditoria',
            modelName: 'Auditoria',
            timestamps: false
        }
    }
}

const AuditoriaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    tabla_afectada: {
        type: DataTypes.STRING(50)
    },
    accion: {
        type: DataTypes.STRING(10)
    },
    fecha_cambio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    detalle: {
        type: DataTypes.JSONB
    }
}

module.exports = { Auditoria, AuditoriaSchema };
