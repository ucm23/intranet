import * as React from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react'
import ArbolOrganigrama from '../../componentes/ArbolOrganigrama';
import Footer from '../../componentes/Footer';




const Colaborador = () => {
    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <div style={{minheight: '105vh',flexdirection: 'column'}}>
            <Navbar backgroundColor="#001529" />
            <div>
            {/* <div style={{flex: '1',overflowy: 'auto',padding: '10px'}}> */}
            <h1 style={{ textAlign: 'center', color: 'black', fontSize: '22px', marginLeft: '10px' }}> Colaboradores de Grupo CTI</h1>
            <ArbolOrganigrama />
           
        </div>
        {/* <Footer /> */}
        </div>
         
    );
}

export default Colaborador