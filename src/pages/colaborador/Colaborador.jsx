import * as React from 'react';
import Navbar from '../../componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react'
import ArbolOrganigrama from '../../componentes/ArbolOrganigrama';


const Colaborador = () => {
   
    return (
        <div style={{minheight: '100vh',flexdirection: 'column'}}>
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