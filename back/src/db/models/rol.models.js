const { Model, DataTypes } = require('sequelize');

class Rol extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'rol',
            modelName: 'Rol',
            timestamps: false
        }
    }
}

const RolSchema = {
    rol_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre_rol: {
        allowNull: false,
        type: DataTypes.STRING(20)
    }
}

module.exports = { Rol, RolSchema };