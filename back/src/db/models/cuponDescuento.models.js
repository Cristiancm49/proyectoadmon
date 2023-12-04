const { Model, DataTypes, sequelize } = require('sequelize');

const CUPON_DESCUENTO_TABLE = 'cupon_descuento'

class CuponDescuento extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'cupon_descuento',
            modelName: 'CuponDescuento',
            timestamps: false
        }
    }
}

const CuponDescuentoSchema = {
    cupon_descuento_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cupon: {
        allowNull: false,
        type: DataTypes.STRING(10)
    },
    descuento: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

module.exports = { CuponDescuento, CuponDescuentoSchema };