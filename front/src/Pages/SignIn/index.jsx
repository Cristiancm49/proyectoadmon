import React, { useState, useEffect } from 'react';

const CompanyDetails = ({ companyId }) => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Función para obtener los detalles de la empresa por ID
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/companies/${companyId}`);
        if (!response.ok) {
          throw new Error('Error al obtener los detalles de la empresa');
        }

        const data = await response.json();
        setCompanyData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    // Llamar a la función para obtener los detalles cuando el componente se monta
    fetchCompanyDetails();
  }, [companyId]); // Ejecutar la función cuando companyId cambie

  if (!companyData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-8">
      {/* Información de la Empresa */}
      <div className="bg-white rounded-lg p-6 shadow-md mb-8">
        <img
          src={companyData.logoUrl} 
          alt={companyData.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{companyData.name}</h2>
        <p className="text-gray-600 mb-2">Cantidad de Paquetes: {companyData.packageCount}</p>
        <p className="text-gray-600 mb-2">Ubicación: {companyData.location}</p>
      </div>

      {/* Lista de Paquetes de la Empresa */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4">Paquetes Ofrecidos</h2>
        <ul>
          {companyData.packages.map((packageItem) => (
            <li key={packageItem.id} className="mb-2">
              <h3 className="text-lg font-medium">{packageItem.name}</h3>
              <p className="text-gray-600">{packageItem.description}</p>
              <p className="text-gray-600">Categoría: {packageItem.category}</p>
              <p className="text-gray-600">Precio: ${packageItem.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetails;