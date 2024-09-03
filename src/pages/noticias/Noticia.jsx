import * as React from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import inteligencia from '../../img/IA.png';
import noticia from '../../img/noticia2.png';
import noticia3 from '../../img/noticia3.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from "@mui/material";




import { useBreakpointValue } from '@chakra-ui/react'
import Tarjeta from '../../componentes/Tarjeta';


const Noticia = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();


    return (
        <Navbar mobile={mobile}>
            <div style={{ height: '100vh', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#001529', overflow: 'hidden', }}>
                    <img src={logo} alt="Logo" style={{ width: '130px', height: 'auto', 'logo-small': 'logo', verticalAlign: 'middle' }} />
                </div>
                <div>
                        <div style={{  height: '100vh', overflow: 'hidden' ,top: '59%'}}>
                        <br></br>
                            {/* <Tarjeta/> */}
                        </div>

                </div>
            </div>

            

        </Navbar>
    )
}

export default Noticia;