import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import conta1 from '../../imgOrganigrama/conta1.png';
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
import Descargaconta1 from '../../componentesdescarga/Descargaconta1';


const Perfilconta1 = () => {
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
                            src={conta1}
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
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '13px', fontFamily: 'customFont' }}>Ashley Michell Huerta Arias </span><br></br>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginLeft: '16px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '20px', fontFamily: 'customFont' }}>Email</span> {/* Texto */}
                        <p style={{ color: 'white', fontSize: '12px', marginLeft: '16px', fontFamily: 'customFont' }}>Ashly@consultores-cti.com.mx</p>
                        <p></p>
                        <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '15px', fontFamily: 'customFont' }}>Telefono: 8115880305</span> {/* Texto */}
                        {/* <p style={{ color: 'white', fontSize: '12px', marginLeft: '50px', fontFamily: 'customFont' }}>8115880305</p> */}
                        <p></p>
                        <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '15px', fontFamily: 'customFont' }}>Domicilio</span> {/* Texto */}
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '20px', fontFamily: 'customFont' }}> Av. Ejército Nacional Mexicano 769, Granada, Miguel Hidalgo, 11520, CDMX</p>

                        <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Competencias</p>
                        <p style={{ color: 'white', fontSize: '3px', marginLeft: '5px', fontFamily: 'customFont' }}> .</p>
                        {/* <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * Senior Project Manager SAP y TIC’s</p> */}
                        {/* <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Maestría en Ingeniería en Sistemas  | 2008 | UNAM</p> */}
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * Senior Project Manager SAP, ORACLE, MICROSOFT, PEOPLESOFT </p>
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * PMO y Desarrollo de Negocios Consultoría ALM SAP y Solución de
                            Industria Healthcare en América Latina (SAP)</p>


                    </div>

   {/* contenedor derecho, perfil */}
                </div>
                <div className="rightContainer">
                    <br></br>
                    <Linea />
                    {/* <br></br> */}
                    <p style={{ color: 'white', fontSize: '2px'}}></p>
                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
                        Senior Project Manager SAP, ORACLE, MICROSOFT, PEOPLESOFT e Infraestructura con 30 años de experiencia en Proyectos de TI de diferentes
                        sectores tanto en iniciativa privada como en sector público, con equipo multidisciplinarios y multiculturales.
                    </p>
                    {/* <br></br> */}
                    <Lineaformacion />
                    {/* <br></br> */}
                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
                        * Maestría en Dirección de Hospitales | 2015 | UDEM <br></br>
                        * Maestría en Ingeniería en Sistemas  | 2008 | UNAM <br></br>
                        * Licenciatura en Informática | 1993  | Universidad Simón Bolívar
                        {/* <br></br> */}
                        <p style={{ color: 'white', fontSize: '1px', marginLeft: '5px', fontFamily: 'customFont' }}> .</p>
                        <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Cursos y Certificaciones:</p>
                        <p style={{ color: 'black', fontSize: '12px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
                            {/* * SAP Solution Manager ,SAP ADM 100, 200 <br></br> */}
                            * Herramientas para Gestión de Ciclo de Vida (ALM SAP) Intellicorp / SmartShift / RevTrac <br></br>
                            * Certificación ITIL V.3.0 Certificado: 882544 <br></br>
                            * Certificación SAP Procurement ECC EHP 4.0 NO.00009778322

                        </p>
                    </p>
                    <Lineaexperiencia />
                    {/* <br></br> */}
                    <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Grupo CTI:</p>
                    <p style={{ color: 'black', fontSize: '12px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify',display: 'inline-block '}}>
                        * Directora General de Grupo CTI  <br></br>
                        * Dirección de proyectos de mantenimiento y mejora continua SAP S/4HANA TIC’s Sector Privado y Sector Público
                        CIBERSEGURIDAD, DESARROLLO DE APLICACIONES WEB (SAP FIORI) Y MÓVILES <br></br>
                        {/* * DATA CENTER:  Administración y mantenimiento de servidores, MICROSOFT TELCO: Internet Satelital, Redes Inalámbricas OUTLOOK, FIREWALL, SAP S/4HANA, Portales (desarrollos propios ) y aplicaciones móviles. */}
                        <Descargaconta1 style={{size:'small'}} />
                    </p>
                </div>
            </div>
        </div>

    );
};


export default Perfilconta1;