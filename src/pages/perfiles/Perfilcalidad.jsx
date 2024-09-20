import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import calidad1 from '../../imgOrganigrama/CALIDAD1.png';
import BotonDescarga from '../../componentes/BotonDescarga';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import '../../styles/ContentWithImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Linea from '../../componentes/Linea';
import Lineaformacion from '../../componentes/Lineaformaciob';
import Lineaexperiencia from '../../componentes/Lineaexperiencia';
import Descargacalidad from '../../componentesdescarga/Descargacalidad';


const Perfilcalidad = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();
    const [size, setSize] = useState('middle'); // default is 'middle'

    const [mostrarComponente, setMostrarComponente] = useState(false);

    const handleClick = () => {
        setMostrarComponente(true); // Actualiza el estado para mostrar el componente
    };



    return (

        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <Navbar backgroundColor="#001529" />

            <div className="container">
                <div className="leftContainer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}> {/* Usando Flexbox para alinear en fila */}
                        <img
                            src={calidad1}
                            alt="Descripción de la imagen"
                            style={{ borderRadius: '0%', cursor: 'pointer', width: '50%', height: '40%', objectFit: 'cover', marginLeft: '40px', marginTop: '10px' }}
                        // Estilo de la imagen
                        />
                        {/* Contenido del contenedor izquierdo */}
                    </div>
                    <div>
                        {/* <br></br> */}
                        <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Datos Personales</p>
                        {/* <br></br> */}
                        <p></p>
                        <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginLeft: '16px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '16px', fontFamily: 'customFont' }}>José Luis Rangel Aguilar</span>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginLeft: '16px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '20px', fontFamily: 'customFont' }}>Email</span> {/* Texto */}
                        <p style={{ color: 'white', fontSize: '12px', marginLeft: '16px', fontFamily: 'customFont' }}>rangela04@hotmail.com</p>
                        <p></p>
                        <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '15px', fontFamily: 'customFont' }}>Telefono: 8115880305</span> {/* Texto */}
                        {/* <p style={{ color: 'white', fontSize: '12px', marginLeft: '50px', fontFamily: 'customFont' }}>8115880305</p> */}
                        <p></p>
                        <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '15px', fontFamily: 'customFont' }}>Domicilio</span> {/* Texto */}
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '20px', fontFamily: 'customFont' }}> C. Paz Montes de Oca N° 138-1,Benito Juárez,CDMX</p>

                        <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Competencias</p>
                        <p style={{ color: 'white', fontSize: '3px', marginLeft: '5px', fontFamily: 'customFont' }}> .</p>
                        {/* <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * Senior Project Manager SAP y TIC’s</p> */}
                        {/* <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Maestría en Ingeniería en Sistemas  | 2008 | UNAM</p> */}
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * Consultor en Sistemas de Gestión de Calidad, Seguridad y Medio Ambiente </p>
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * Coordinador de Evaluación y Certificación</p>
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * Supervisor de proyecto, construcción y puesta en operación</p>

                    </div>

   {/* contenedor derecho, perfil */}
                </div>
                <div className="rightContainer">
                    <br></br>
                    <Linea />
                    {/* <br></br> */}
                    <p style={{ color: 'white', fontSize: '2px'}}></p>
                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
                    Consultor en Sistemas de Gestión de Calidad, Seguridad y Medio Ambiente en empresas de construcción en obras que serán certificadas.
                    </p>
                    {/* <br></br> */}
                    <Lineaformacion />
                    {/* <br></br> */}
                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
                        * INGENIERO CIVIL <br></br>
                        * Consultor en Sistemas de Gestión de Calidad, Seguridad y Medio Ambiente <br></br>
                        {/* <br></br> */}
                        <p style={{ color: 'white', fontSize: '1px', marginLeft: '5px', fontFamily: 'customFont' }}> .</p>
                        <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Cursos y Certificaciones:</p>
                        <p style={{ color: 'black', fontSize: '12px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
                            {/* * SAP Solution Manager ,SAP ADM 100, 200 <br></br> */}
                            * Curso de Actualización de la Norma ISO 9001 e ISO 14001 <br></br>
                            * Formación de Auditor Interno ISO 9001 <br></br>
                            * Cursos de Estadística y Probabilidad para Ingenieros<br></br>
                            * Curso de Estadística Estadísticas como Herramienta en el Sistema de Calidad<br></br>

                        </p>
                    </p>
                    <Lineaexperiencia />
                    {/* <br></br> */}
                    <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Grupo CTI:</p>
                    <p style={{ color: 'black', fontSize: '12px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify',display: 'inline-block '}}>
                        * Consultor en la Implantación, operación y mejora continua en Sistemas de Gestión de Calidad, Seguridad y Medio Ambiente, 
                        basados principalmente en la Normas ISO.<br></br>
                        * Capacitación y evaluación en Certificación de Competencias Laborales, de acuerdo con las normas emitidas por el CONOCER <br></br>
                        {/* * DATA CENTER:  Administración y mantenimiento de servidores, MICROSOFT TELCO: Internet Satelital, Redes Inalámbricas OUTLOOK, FIREWALL, SAP S/4HANA, Portales (desarrollos propios ) y aplicaciones móviles. */}
                        <Descargacalidad style={{size:'small'}} />
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Perfilcalidad;