import React from 'react';
import UniversidadLista from './components/universidadLista'; 
import './App.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">PathFinder</h2>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#univesidades">Universidades</a></li>
        <li><a href="#about">Acerca de</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Bienvenido a PathFinder</h1>
      </header>
      <UniversidadLista />
    </div>    
  );
}

export default App;
