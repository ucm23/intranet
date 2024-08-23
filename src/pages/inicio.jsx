import React from 'react';
import NavBar from '../components/NavBar'; 

const Inicio = () => {
    return (
        <>
            <NavBar 
                userName="Nombre de Usuario"  
                photo="/assets/images/logo-removebg.png"
                mobile={false} 
            >
                <h1>Bienvenido a la página de Inicio</h1>
                <p>Este es el contenido de la página de inicio.</p>
            </NavBar>
           
        </>
    );
};

export default Inicio;
