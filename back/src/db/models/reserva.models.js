const { Model, DataTypes } = require('sequelize');
const { Paquete } = require('./paquete.models');
const { Cliente } = require('./cliente.models');
const { CuponDescuento } = require('./cuponDescuento.models');
const { MetodoPago } = require('./metodoPago.models');

class Reserva extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'reserva',
            modelName: 'Reserva',
            timestamps: false
        }
    }
}

const ReservaSchema = {
    reserva_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cantidad_personas: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    fecha_reserva: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    fecha_salida: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    fecha_regreso: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    estado_pago: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    precio_total: {
        type: DataTypes.FLOAT,
        defaultValue: null
    },
    metodo_pago_id: {
        type: DataTypes.INTEGER,
        references: {
            model: MetodoPago,
            key: 'metodo_pago_id'
        }
    },
    cupon_descuento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CuponDescuento,
            key: 'cupon_descuento_id'
        }
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'cliente_id'
        }
    },
    paquete_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Paquete,
            key: 'paquete_id'
        }
    }
}

module.exports = { Reserva, ReservaSchema };