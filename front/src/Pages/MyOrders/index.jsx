import React, { useState } from 'react';

const ReservationForm = ({ paqueteId }) => {
  const [formData, setFormData] = useState({
    fecha_salida: '',
    fecha_regreso: '',
    precio_total: 0,
    metodo_pago_id: '',
    cupon_descuento_id: '',
    cliente_id: '4', // Suponiendo que el cliente_id es fijo
    paquete_id: paqueteId,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la solicitud POST aquí usando fetch o axios
    fetch(`http://localhost:3000/api/v1/paquete/reserva/${paqueteId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta del servidor, si es necesario
        console.log('Reserva creada:', data);
        // Puedes redirigir o realizar otras acciones aquí después de crear la reserva
      })
      .catch(error => {
        console.error('Error al crear la reserva:', error);
        // Puedes manejar errores y mostrar mensajes al usuario aquí
      });
  };

  return (
    <div className="flex justify-center space-x-8 p-8">
      {/* Formulario de Reserva */}
      <div className="bg-white rounded-lg p-6 shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Formulario de Reserva</h2>
        <form onSubmit={handleSubmit}>
          {/* Resto de tus inputs */}
          <div className="mb-4">
            <label htmlFor="fecha_salida" className="block text-sm font-medium text-gray-600">
              Fecha de Salida
            </label>
            <input
              type="date"
              id="fecha_salida"
              name="fecha_salida"
              value={formData.fecha_salida}
              onChange={handleInputChange}
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
              value={formData.fecha_regreso}
              onChange={handleInputChange}
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
              value={formData.precio_total}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Otros inputs... */}
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
