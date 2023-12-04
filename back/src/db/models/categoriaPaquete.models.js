const { Model, DataTypes } = require('sequelize');

class CategoriaPaquete extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'categoria_paquete',
            modelName: 'CategoriaPaquete',
            timestamps: false
        }
    }
}

const CategoriaPaqueteSchema = {
    categoria_paquete_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    categoria_paquete: {
        allowNull: false,
        type: DataTypes.STRING(50)
    }
}

module.exports = { CategoriaPaquete, CategoriaPaqueteSchema };