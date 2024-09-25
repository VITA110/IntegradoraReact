import React from 'react';

const universidadElemento = ({ name, ubi, carrera }) => {
  return (
    <div className="university-item">
      <h3>{name}</h3>
      <p><strong>Ubicación:</strong> {ubi}</p>
      <p><strong>Programas:</strong> {carrera}</p>
    </div>
  );
};

export default universidadElementos;