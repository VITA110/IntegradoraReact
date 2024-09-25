import React from 'react';
import { universidades } from '../universidades'; // Importamos la lista de universidades
import universidadElemento from './universidadElemento'; // Importamos el componente UniversityItem

const universidadElemento = () => {
  return (
    <div className="university-list">
      <h2>Lista de Universidades</h2>
      {universidades.map((uni) => (
        <universidadElemento 
          key={uni.id} 
          name={uni.name} 
          ubi={uni.ubi} 
          carrera={uni.carrera} 
        />
      ))}
    </div>
  );
};

export default universidadElemento;
