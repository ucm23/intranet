import * as React from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpointValue } from '@chakra-ui/react'
import MenuDesplegable from '../../componentes/MenuDesplegable';
import Organigrama from '../../componentes/Organigrama';
import ArbolOrganigrama from '../../componentes/ArbolOrganigrama';
import Organigrama2 from '../../componentes/Organigrama2';



const Organizacion = () => {
    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <Navbar mobile={mobile}>
            <div style={{ height: '100vh', overflow: 'auto' }}>
                <div style={{ backgroundColor: '#001529', overflow: 'hidden', }}>
                    <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto', 'logo-small': 'logo', verticalAlign: 'middle' }} />
                    {/* <p><br></br></p> */}
                    <br></br>
                </div>
                <p style={{ textAlign: 'left', color: 'black', fontSize: '22px', marginLeft: '10px' }}> Grupo CTI</p>
                <div>
                    <div style={{ height: '95vh', overflow: 'hidden', marginTop: '5px' }}>
                        <ArbolOrganigrama />
                        {/* <Organigrama2 /> */}
                    </div>

                </div>
            </div>
        </Navbar>
    )
}


export default Organizacion;