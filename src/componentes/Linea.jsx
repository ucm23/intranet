import React from 'react';
import styled from 'styled-components';

// Crear un componente estilizado para la línea
const FullWidthLine = styled.hr`
  width: 97%; /* Línea ocupa todo el ancho */
  border: none; /* Sin borde por defecto */
  border-top: 2px solid black; /* Grosor y color de la línea */
  margin: 15px; /* Sin márgenes */
  
  
`;

function Linea() {
  return (
    <div>
      <h2 style={{ textAlign: 'left', color: '#00152', fontSize: '18px', marginLeft: '30px',fontFamily:'customFont',fontWeight:'bold'}}>Perfil</h2>
      <FullWidthLine /> {/* Línea horizontal */}
      <p style={{ color: 'white', fontSize: '2px'}}></p>
      {/* <h2>Contenido debajo de la línea</h2> */}
    </div>
  );
}

export default Linea;