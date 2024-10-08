
import React from 'react';
import { universidades } from '../universidades'; // Importamos la lista de universidades
import UniversidadElemento from './universidadElemento'; // Importamos el componente UniversityItem

const UniversidadLista = () => {
  return (
    <div className="list-title">
      <h2>Lista de Universidades</h2>
      <div className='uni-list'>
      {universidades.map((uni) => (
        <UniversidadElemento 
          key={uni.id} 
          name={uni.name} 
          ubi={uni.ubi} 
          carrera={uni.carrera} 
        />
      ))}
      </div>
      
    </div>
  );
};

export default UniversidadLista;