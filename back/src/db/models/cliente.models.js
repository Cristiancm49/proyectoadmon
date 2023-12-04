const { Model, DataTypes } = require('sequelize');
const { Usuario } = require('./usuario.models'); // Importamos el modelo de Usuario

class Cliente extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'cliente',
            modelName: 'Cliente',
            timestamps: false
        }
    }
}

const ClienteSchema = {
    cliente_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    primer_nombre: {
        allowNull: false,
        type: DataTypes.STRING(55)
    },
    segundo_nombre: {
        allowNull: true,
        type: DataTypes.STRING(55)
    },
    primer_apellido: {
        allowNull: false,
        type: DataTypes.STRING(55)
    },
    segundo_apellido: {
        allowNull: true,
        type: DataTypes.STRING(55)
    },
    tipo_documento: {
        allowNull: false,
        type: DataTypes.STRING(2)
    },
    numero_documento: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    telefono: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    fecha_nacimiento: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    usuario_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'usuario_id'
        }
    }
}

module.exports = { Cliente, ClienteSchema };