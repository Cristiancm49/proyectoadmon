const { Model, DataTypes } = require('sequelize');
const { Usuario } = require('./usuario.models');

class Empresa extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'empresa',
            modelName: 'Empresa',
            timestamps: false
        }
    }
}

const EmpresaSchema = {
    empresa_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    logo: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },
    nombre_empresa: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    nit: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    numero_contacto: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    email_contacto: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255),
        validate: {
            isEmail: true
        }
    },
    usuario_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'usuario',
            key: 'usuario_id'
        }
    }
}

module.exports = { Empresa, EmpresaSchema };
