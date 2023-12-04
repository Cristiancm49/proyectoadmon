const { Model, DataTypes } = require('sequelize');
const { Rol } = require('./rol.models'); // Importamos el modelo de Rol

class Usuario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'usuario',
            modelName: 'Usuario',
            timestamps: false
        }
    }
}

const UsuarioSchema = {
    usuario_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(255),
        unique: true
    },
    contrasena: {
        allowNull: false,
        type: DataTypes.STRING(25)
    },
    rol_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: Rol,
            key: 'rol_id'
        }
    }
}

module.exports = { Usuario, UsuarioSchema };