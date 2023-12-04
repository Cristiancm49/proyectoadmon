import React from 'react';
import { Link } from 'react-router-dom';
import ReservationForm from '../../Pages/MyOrders';




const Card = (data) => {
  const paqueteId = data.data.paquete_id;
  return (
    <Link to={`/reserva/${paqueteId}`} className='bg-white cursor-pointer w-56 h-80 rounded-lg mt-4'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 font-medium rounded-lg text-black text-lg m-2 px-3 py-0.5'>{data.data.TipoPaquete?.tipo_paquete}</span>
        <img
          className='w-56 h-64 object-cover rounded-lg'
          src={data.data.img_url}
          alt=''
        />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          +
        </div>
      </figure>
      <div className='flex flex-col'>
        <span className='text-sm font-light'>{data.data.nombre_paquete}</span>
        <div className='flex w-full justify-between'>
        <span className='text-sm font-medium'>{data.data.Transporte?.transporte}</span>
        <span className='text-lg font-medium'>{data.data.Transporte?.precio_por_persona}</span>
        </div>
        
        <span className='text-lg font-medium'>Precioo    ${data.data.precio_por_persona}</span>
      </div>
      
    </Link>
  );
};

export default Card;