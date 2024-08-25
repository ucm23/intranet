import React from 'react';
import Navbar from '../../componentes/Navbar';


import {
    useBreakpointValue,
} from '@chakra-ui/react';

const Index = () => {

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <div style={{ backgroundColor: '#001529' }}>
            <Navbar
                mobile={mobile} 
            >
                <h1 style={{ color: 'white', fontSize: '36px' }}>Grupo CTI</h1>
                {/* <p>Bienvenido</p> */}
                <p><br></br></p>
            </Navbar>
           
        </div>
    );
};

export default Index;