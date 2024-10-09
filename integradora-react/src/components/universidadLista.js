
import React from 'react';
import { universidades } from '../universidades'; 
import UniversidadElemento from './universidadElemento'; 

const UniversidadLista = () => {
  return (
    <div className="list-title">
      <h2>Lista de universidades</h2>
      <div className='uni-list'>
      {universidades.map((uni) => (
        <UniversidadElemento 
          key={uni.id} 
          name={uni.name} 
          ubi={uni.ubi} 
          carrera={uni.carrera} 
          imagen={uni.imagen}
        />
      ))}
      </div>
      
    </div>
  );
};

export default UniversidadLista;