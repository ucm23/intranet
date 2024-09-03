import React from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png'
import backgroundImage from '../../img/background.jpg';
import { useNavigate } from 'react-router-dom';
import '../../styles/App.css';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css'; // Estilos por defecto de react-orgchart
import { useResizeDetector } from 'react-resize-detector';


import { useBreakpointValue } from '@chakra-ui/react'


const MyNode = ({ node }) => {
    return (
        <div className="initechNode">
            <p>{node.name}</p>
            <p>{node.title}</p>
        </div>
    );
};

const Colaborador = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (

        <Navbar mobile={mobile}>
            <div style={{ height: '100vh', overflow: 'hidden', background: '#001529' }}>
                <div style={{ backgroundColor: '#001529', overflow: 'hidden' }}>
                    <img src={logo} alt="Logo" style={{ width: '130px', height: 'auto', 'logo-small': 'logo', verticalAlign: 'middle' }} />
                    <p><br></br></p>
                </div>
                <div style={{ background: 'blue' }}>
                    {/* <Message mobile={mobile}/> */}
                    <p style={{ textAlign: 'center', color: 'white', fontSize: '25px' }}>Colaboradores de grupo CTI</p>
                </div>
                <div style={{ background: '#001529', overflow: 'hidden', overflowX: 'hidden', }}>

                    {/* funcion de organigrama */}

                    <div className="org-chart" style={{ marginLeft: '5%', marginTop: '3%', verticalAlign: 'middle', alignItems: 'middle' }}>
                        <ul>
                            <li >
                                <div style={{ fontSize: '15px', backgroundColor: 'green', color: 'white' }}>Dirección General
                                    <br></br>
                                    Guillermina Sámano</div>
                                <ul>
                                    <li>
                                        <div style={{ fontSize: '15px', backgroundColor: 'yellow', color: 'black' }}>Contabilidad</div>
                                        <ul>
                                            <li><div style={{ fontSize: '15px', backgroundColor: 'yellow', color: 'black' }}>Ashly Huerta</div></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <div style={{ fontSize: '15px', backgroundColor: 'pink', color: 'black' }}>Desarrollo de Aplicaciones</div>
                                        <ul>
                                            <li><div style={{ fontSize: '15px', backgroundColor: 'pink', color: 'black' }}>Gilberto López</div></li>
                                            <li><div style={{ fontSize: '15px', backgroundColor: 'pink', color: 'black' }}>Ulises Cano</div></li>
                                            <li><div style={{ fontSize: '15px', backgroundColor: 'pink', color: 'black' }}>Adriana Castillo</div></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <div style={{ fontSize: '15px', backgroundColor: 'yellow', color: 'black' }}>Mesa de Ayuda y Soporte</div>
                                        <ul>
                                            <li><div style={{ fontSize: '15px', backgroundColor: 'yellow', color: 'black' }}>Juan Gil</div></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <div style={{ fontSize: '15px', backgroundColor: 'grey', color: 'white' }}>Ciberseguridad</div>
                                        <ul>
                                            <li><div style={{ fontSize: '15px', backgroundColor: 'grey', color: 'white' }}>Guillermina Sámano</div></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <div style={{ fontSize: '15px', backgroundColor: 'blue', color: 'white' }}>ITS y Peaje</div>
                                        <ul>
                                            <li><div style={{ fontSize: '15px', backgroundColor: 'blue', color: 'white' }}>Guillermina Sámano</div></li>
                                        </ul>
                                    </li>

                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default Colaborador