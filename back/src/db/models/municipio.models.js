const { Model, DataTypes } = require('sequelize');


class Municipio extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'municipio',
            modelName: 'Municipio',
            timestamps: false
        }
    }
}

const MunicipioSchema = {
    municipio_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    municipio: {
        allowNull: false,
        type: DataTypes.STRING(50)
    }
}

module.exports = { Municipio, MunicipioSchema };