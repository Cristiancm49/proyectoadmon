const { Model, DataTypes } = require('sequelize');

class Departamento extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'departamento',
            modelName: 'Departamento',
            timestamps: false
        }
    }
}

const DepartamentoSchema = {
    departamento_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    departamento: {
        allowNull: false,
        type: DataTypes.STRING(50)
    }
}

module.exports = { Departamento, DepartamentoSchema };