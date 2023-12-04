const { Model, DataTypes } = require('sequelize');

class Menu extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'menu',
            modelName: 'Menu',
            timestamps: false
        }
    }
}

const MenuSchema = {
    menu_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre_menu: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    descripcion_menu: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    precio: {
        allowNull: false,
        type: DataTypes.FLOAT
    }
}

module.exports = { Menu, MenuSchema };