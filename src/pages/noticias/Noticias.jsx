// import Message from "../componentes/Message"
import React from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import inteligencia from '../../img/IA.png';
import noticia from '../../img/noticia2.png';
import noticia3 from '../../img/noticia3.png';
// import backgroundImage from '../../img/background.jpg';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from "@mui/material";


import { useBreakpointValue } from '@chakra-ui/react'

const Noticias = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <Navbar mobile={mobile}>
            <div style={{ height: '100vh', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#001529', overflow: 'hidden', }}>
                    <img src={logo} alt="Logo" style={{ width: '130px', height: 'auto', 'logo-small': 'logo', verticalAlign: 'middle' }} />
                    <p><br></br></p>

                </div>

                <div className="container" style={{
                    position: 'absolute',
                    top: '59%',
                    left: '18%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo semitransparente
                    color: 'black', // Texto blanco para contraste
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: '35',
                    height: '70vh',
                    overflow: 'hidden',
                    overflowX: 'hidden',
                    maxWidth: '400px',
                    border: '2px solid #000'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={inteligencia} alt="inteligencia"
                            style={{
                                width: '270px', height: 'auto', verticalAlign: 'center', marginRight: '10px', // Espacio entre la imagen y el texto

                            }}
                        /></div>
                    <h1 style={{ fontSize: '15px', marginTop: '25px', color: '#1890ff' }}>La Inteligencia Artificial puede reducir a la mitad el trabajo de directivos de empresas</h1>
                    <p style={{ fontSize: '12px', marginTop: '25px', color: '#001529' }}>Juan Luis Ramos / El Sol de México
                        La Inteligencia Artificial (IA) Generativa se ha vuelto una aliada de los CEOs y directivos de las empresas, ya que puede manejar hasta 52 por ciento de la carga de trabajo de los líderes empresariales, al optimizar procesos operativos.
                        Esta tecnología es capaz de generar texto, imágenes y otros medios en respuesta a comandos por medio del uso de técnicas de machine learning, lo que le permite analizar grandes cantidades de datos y crear contenido.</p>
                </div>

                <div className="container" style={{
                    position: 'absolute',
                    top: '59%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo semitransparente
                    color: 'black', // Texto blanco para contraste
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: '35',
                    height: '70vh',
                    overflow: 'hidden',
                    overflowX: 'hidden',
                    maxWidth: '400px',
                    border: '2px solid #000'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={noticia} alt="mexico"
                            style={{
                                width: '210px', height: 'auto', verticalAlign: 'center', marginRight: '10px', // Espacio entre la imagen y el texto

                            }}
                        /></div>
                    <h1 style={{ fontSize: '15px', marginTop: '25px', color: '#1890ff' }}>México lidera el crecimiento de firmas dedicadas a la IA en América Latina</h1>
                    <p style={{ fontSize: '12px', marginTop: '25px', color: '#001529' }}>México se ha convertido en un epicentro de desarrollo en inteligencia artificial (IA)
                        con 362 compañías dedicadas a esta tecnología, lo que representa un crecimiento de 965% entre 2018 y 2024, de acuerdo con el estudio La era de la IA en
                        México, realizado por Endeavor México y Santander México.
                        Con base en el documento, México lidera la tasa de crecimiento de la IA en Latinoamérica, dado que el promedio es de 550 por ciento.
                        Además, estima que este sector ha captado más de 500 millones de dólares de inversión e ingresos por 1.3 millones de dólares en 2024.
                    </p>
                </div>

                <div className="container" style={{
                    position: 'absolute',
                    top: '59%',
                    left: '82%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo semitransparente
                    color: 'black', // Texto blanco para contraste
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: '35',
                    height: '70vh',
                    overflow: 'hidden',
                    overflowX: 'hidden',
                    maxWidth: '400px',
                    border: '2px solid #000'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={noticia3} alt="tren"
                            style={{
                                width: '270px', height: 'auto', verticalAlign: 'center', marginRight: '10px', // Espacio entre la imagen y el texto

                            }}
                        /></div>
                    <h1 style={{ fontSize: '15px', marginTop: '25px', color: '#1890ff' }}>Tren Maya, un "horror ambiental"; cadena de TV alemana critica impacto con video reportaje</h1>
                    <p style={{ fontSize: '11px', marginTop: '25px', color: '#001529' }}>Una televisora alemana publicó un video reportaje para criticar el Tren Maya por la contaminación ambiental que está provocando.
                        “El nuevo tren de la selva de México se está convirtiendo en un horror ambiental”, se titula el reportaje difundido por la televisora n-tv, que advierte que “la nueva línea de Tren Maya está 
                        destinada a llevar a los turistas a través de la selva mexicana. Los conservacionistas están haciendo sonar la alarma porque el mega proyecto de construcción está ejerciendo una presión 
                        enorme sobre la vida silvestre y contaminando el agua. 
                        Sin embargo, el gobierno de México no quiere saber nada al respecto y por decreto impide tomar contramedidas”.</p>
                </div>


                <div style ={{textAlign: 'center' }}>
                    <p><br></br></p>
                    <p><br></br></p>
                    <p><br></br></p>
                    <button onClick={goToHome} style={{ color: 'red', marginTop: '27%', }}>Home</button>
                </div>
            </div>

        </Navbar>
    )
}


export default Noticias

