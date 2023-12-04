import React from 'react';

const ReservationForm = (paquete) => {
  return (
    <div className="flex justify-center space-x-8 p-8">
      {/* Formulario de Reserva */}
      <div className="bg-white rounded-lg p-6 shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Formulario de Reserva</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fecha_reserva" className="block text-sm font-medium text-gray-600">
              Fecha de Reserva
            </label>
            <input
              type="text"
              id="fecha_reserva"
              name="fecha_reserva"
              value={new Date().toISOString().split('T')[0]}
              readOnly
              className="mt-1 p-2 block w-full border rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha_salida" className="block text-sm font-medium text-gray-600">
              Fecha de Salida
            </label>
            <input
              type="date"
              id="fecha_salida"
              name="fecha_salida"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha_regreso" className="block text-sm font-medium text-gray-600">
              Fecha de Regreso
            </label>
            <input
              type="date"
              id="fecha_regreso"
              name="fecha_regreso"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="precio_total" className="block text-sm font-medium text-gray-600">
              Precio Total
            </label>
            <input
              type="number"
              id="precio_total"
              name="precio_total"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="metodo_pago_id" className="block text-sm font-medium text-gray-600">
              Método de Pago ID
            </label>
            <input
              type="text"
              id="metodo_pago_id"
              name="metodo_pago_id"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cupon_descuento_id" className="block text-sm font-medium text-gray-600">
              Cupón Descuento ID
            </label>
            <input
              type="text"
              id="cupon_descuento_id"
              name="cupon_descuento_id"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cliente_id" className="block text-sm font-medium text-gray-600">
              Cliente ID
            </label>
            <input
              type="text"
              id="cliente_id"
              name="cliente_id"
              value="4"
              readOnly
              className="mt-1 p-2 block w-full border rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="paquete_id" className="block text-sm font-medium text-gray-600">
              Paquete ID
            </label>
            <input
              type="text"
              id="paquete_id"
              name="paquete_id"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
            Reservar
          </button>
        </form>
      </div>

      {/* Información Adicional (Imagen, Título, Descripción, etc.) */}
      <div className="bg-white rounded-lg p-6 shadow-md w-96">
        <img
          src="https://images.pexels.com/photos/2698891/pexels-photo-2698891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Viaje a Cancun"
          className="w-full h-30 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Viaje a Cancún</h2>
        <p className="text-gray-600 mb-2">Descripción del paquete: Un emocionante viaje a las playas de Cancún.</p>
        <p className="text-gray-600 mb-2">Categoría: Playa</p>
        <p className="text-gray-600 mb-2">Tipo de Paquete: Todo Incluido</p>
        <p className="text-gray-600 mb-2">Precio de Transporte: $500</p>
        <p className="text-gray-600 mb-2">Precio de Menú: $100</p>
        <p className="text-gray-600 mb-2">Precio del Paquete: $1500</p>
      </div>
    </div>
  );
};

export default ReservationForm;
