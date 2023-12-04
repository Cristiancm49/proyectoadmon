const { Person, PersonSchema } = require('./persons.models');
const { MetodoPago, MetodoPagoSchema } = require('./metodoPago.models');
const { CuponDescuento, CuponDescuentoSchema } = require('./cuponDescuento.models');
const { Rol, RolSchema } = require('./rol.models');
const { Usuario, UsuarioSchema } = require('./usuario.models');
const { Cliente, ClienteSchema } = require('./cliente.models');
const { Menu, MenuSchema } = require('./menu.models');
const { CategoriaPaquete, CategoriaPaqueteSchema } = require('./categoriaPaquete.models');
const { Transporte, TransporteSchema } = require('./transporte.models')
const { TipoPaquete, TipoPaqueteSchema } = require('./tipoPaquete.models');
const { Departamento, DepartamentoSchema } = require('./departamendo.models');
const { Municipio, MunicipioSchema } = require('./municipio.models');
const { Empresa, EmpresaSchema } = require('./empresa.models');
const { Ubicacion, UbicacionSchema } = require('./ubicacion.models');
const { Paquete, PaqueteSchema } = require('./paquete.models');
const { PaqueteCategoriaRelacion, PaqueteCategoriaRelacionSchema } = require('./paqueteCategoriaRelacion.models');
const { Reserva, ReservaSchema } = require('./reserva.models');
const { Resena, ResenaSchema } = require('./resena.models');
const { Auditoria, AuditoriaSchema } = require('./auditoria.models');


function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    MetodoPago.init(MetodoPagoSchema, MetodoPago.config(sequelize));
    CuponDescuento.init(CuponDescuentoSchema, CuponDescuento.config(sequelize));
    Rol.init(RolSchema, Rol.config(sequelize));
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Cliente.init(ClienteSchema, Cliente.config(sequelize));
    Menu.init(MenuSchema, Menu.config(sequelize));
    CategoriaPaquete.init(CategoriaPaqueteSchema, CategoriaPaquete.config(sequelize));
    Transporte.init(TransporteSchema, Transporte.config(sequelize));
    TipoPaquete.init(TipoPaqueteSchema, TipoPaquete.config(sequelize))
    Departamento.init(DepartamentoSchema, Departamento.config(sequelize));
    Municipio.init(MunicipioSchema, Municipio.config(sequelize));
    Empresa.init(EmpresaSchema, Empresa.config(sequelize));
    Ubicacion.init(UbicacionSchema, Ubicacion.config(sequelize));
    Paquete.init(PaqueteSchema, Paquete.config(sequelize));
    PaqueteCategoriaRelacion.init(PaqueteCategoriaRelacionSchema, PaqueteCategoriaRelacion.config(sequelize));
    Reserva.init(ReservaSchema, Reserva.config(sequelize));
    Resena.init(ResenaSchema, Resena.config(sequelize));
    Auditoria.init(AuditoriaSchema, Auditoria.config(sequelize));

    Paquete.hasOne(Transporte, { foreignKey: 'transporte_id' });
    Paquete.hasOne(Menu, { foreignKey: 'menu_id' });
    Paquete.hasOne(TipoPaquete, { foreignKey: 'tipo_paquete_id' });
    Paquete.hasOne(Empresa, { foreignKey: 'empresa_id' });

    Reserva.hasOne(MetodoPago, { foreignKey: 'metodo_pago_id' });
    Reserva.hasOne(CuponDescuento, { foreignKey: 'cupon_descuento_id' });
    Reserva.hasOne(Paquete, { foreignKey: 'paquete_id' });
    Reserva.hasOne(Cliente, { foreignKey: 'cliente_id' });
}


module.exports = setupModels;