import React from 'react';

const UniversidadElemento = ({ name, ubi, carrera, imagen }) => {
  return (
    <div className="uni-item">
      <img src={require(`../images/${imagen}`)} alt={name} className="uni-image" /> 
      <h3>{name}</h3>
      <p className='uni-img'> </p>
      <p><strong>Ubicación:</strong> {ubi}</p>
      <p><strong>Programas:</strong> {carrera}</p>
      <button className='uni-button' >Ver más</button>
    </div>
  );
};

export default UniversidadElemento;