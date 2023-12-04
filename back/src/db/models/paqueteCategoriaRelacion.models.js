const { Model, DataTypes } = require('sequelize');

class PaqueteCategoriaRelacion extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'paquete_categoria_relacion',
            modelName: 'PaqueteCategoriaRelacion',
            timestamps: false
        }
    }
}

const PaqueteCategoriaRelacionSchema = {
    id_relacion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING(255)
    },
    paquete_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paquete',
            key: 'paquete_id'
        }
    },
    categoria_paquete_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categoria_paquete',
            key: 'categoria_paquete_id'
        }
    }
}

module.exports = { PaqueteCategoriaRelacion, PaqueteCategoriaRelacionSchema };
