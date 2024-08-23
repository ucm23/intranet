import React from 'react';
import NavBar from '../components/NavBar'; 
import {
    useBreakpointValue,
} from '@chakra-ui/react';

const Index = () => {

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <div style={{ backgroundColor: 'orange' }}>
            <NavBar
                mobile={mobile} 
            >
                <h1>Bienvenido a la página de Inicio</h1>
                <p>Este es el contenido de la página de inicio.</p>
            </NavBar>
           
        </div>
    );
};

export default Index;
