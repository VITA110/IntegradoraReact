import React from 'react';

const UniversidadElemento = ({ name, ubi, carrera }) => {
  return (
    <div className="uni-item">
      <h3>{name}</h3>
      <p><strong>Ubicación:</strong> {ubi}</p>
      <p><strong>Programas:</strong> {carrera}</p>
    </div>
  );
};

export default UniversidadElemento;