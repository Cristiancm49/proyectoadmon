import React from 'react';

const CompanyDetails = () => {
  return (
    <div className="p-8">
      {/* Información de la Empresa */}
      <div className="bg-white rounded-lg p-6 shadow-md mb-8">
        <img
          src="https://placekitten.com/400/200" 
          alt="Empresa XYZ"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Empresa XYZ</h2>
        <p className="text-gray-600 mb-2">Cantidad de Paquetes: 20</p>
        <p className="text-gray-600 mb-2">Ubicación: Ciudad ABC</p>
      </div>

      {/* Lista de Paquetes de la Empresa */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4">Paquetes Ofrecidos</h2>
        <ul>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Paquete A</h3>
            <p className="text-gray-600">Descripción del Paquete A.</p>
            <p className="text-gray-600">Categoría: Aventura</p>
            <p className="text-gray-600">Precio: $500</p>
          </li>
          {/* Agregar más elementos de lista según sea necesario */}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetails;