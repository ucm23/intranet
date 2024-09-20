import * as React from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react'
import Organigrama2 from '../../componentes/Organigrama2';
import Footer from '../../componentes/Footer';
import '../../styles/estilo.css';




const Organizacion = () => {
    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <div>
            <div>
            <Navbar backgroundColor="#001529" />
            <h1 style={{ textAlign: 'center', color: 'black', fontSize: '22px', marginLeft: '10px' }}> Colaboradores de Grupo CTI</h1>
            <Organigrama2 />
           
        </div>
        {/* <Footer /> */}
        </div>
         
    );
}


export default Organizacion;