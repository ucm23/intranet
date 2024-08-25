// import Message from "../componentes/Message"
import React from 'react';
import Navbar from '../../componentes/Navbar';


import { useBreakpointValue } from '@chakra-ui/react'

const Noticias = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    return (
        <Navbar  mobile={mobile}>
            
                <div style={{ backgroundColor: '#001529' }}>
                <h1 style={{ color: 'white', fontSize: '36px' }}>Grupo CTI</h1>
                {/* <p>Bienvenido</p> */}
                <p><br></br></p>

                </div>
                <div>
                    {/* <Message mobile={mobile}/> */}
                    <p style={{ color: 'black', fontSize: '36px' }}>Noticias Recientes</p>
                </div>
            
        </Navbar>
    )
}

export default Noticias

