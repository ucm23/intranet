import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import dev1 from '../../imgOrganigrama/DEV1.png';
import '../../styles/ContentWithImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Linea from '../../componentes/Linea';
import Lineaformacion from '../../componentes/Lineaformaciob';
import Lineaexperiencia from '../../componentes/Lineaexperiencia';
import Descargadev1 from '../../componentesdescarga/Descargadev1';


const Perfildev1 = () => {
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
              src={dev1}
              alt="Descripción de la imagen"
              style={{ borderRadius: '0%', cursor: 'pointer', width: '50%', height: '40%', objectFit: 'cover', marginLeft: '45px', marginTop: '10px' }}
            // Estilo de la imagen
            />
            {/* Contenido del contenedor izquierdo */}
          </div>
          <div>
            <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Datos Personales</p>
            {/* <br></br> */}
            <p></p>
            <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '13px', marginLeft: '18px', fontFamily: 'customFont' }}>Gilberto López Antonio</span>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '20px', fontFamily: 'customFont' }}>Email</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '12px', marginLeft: '18px', fontFamily: 'customFont' }}>glopez@consultores-cti.com.mx</p>
            <p></p>
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '20px', fontFamily: 'customFont' }}>Telefono</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '12px', marginLeft: '50px', fontFamily: 'customFont' }}>2361039980</p>
            <p></p>
            <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '15px', fontFamily: 'customFont' }}>Domicilio</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '10px', marginLeft: '20px', fontFamily: 'customFont' }}> Av. Ejército Nacional Mexicano 769, Granada, Miguel Hidalgo, 11520, CDMX</p>

            <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Competencias</p>
            {/* <br></br> */}
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Implementación de Aplicaciones de Escritorio, Web, .Net, C# y Sharepoint</p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Conocimiento de  HTML5 y scripting</p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Conocimiento en Selenium</p>

          </div>

          {/* contenedor derecho, perfil */}
        </div>
        <div className="rightContainer">
          <br></br>
          <Linea />
          <br></br>
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            Profesional en TI con experiencia en implementación de Aplicaciones de Escritorio, Web, .Net, C# y Sharepoint, trabajando desde el 2019 en autopistas de cuota, con amplia experiencia en Instalación , Mantenimiento y
            Soporte a SISTEMAS DE ITS (SISTEMA DE GESTIÓN DE AUTOPISTAS, PMV, CCTV, CONTROL DE ACCESOS, ANPR,
            RADARES, CCO).
          </p>
          {/* <br></br> */}
          <Lineaformacion />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            Licenciado en Informática en La Universidad de la Cañada
            {/* <br></br> */}
            <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Cursos:</p>
            <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
              * Maintaining a Microsoft SQL Server 2008 Database <br></br>
              * Microsoft Certified Professional Developer (.NetFramework 4.0 Service Communication Applications)
            </p>
          </p>
          <Lineaexperiencia />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Grupo CTI:</p>
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            * Sistema de gestión de autopistas VICTUM (MRO PAQUETE NORESTE)  <br></br>
            * Sistema de gestión de autopistas VICTUM (MRO GUADALAJARA – COLIMA)<br></br>
            * Sistema Tiempos de Cruce CD.VALLES – TAMUIN
          </p>
          <Descargadev1 />
        </div>
      </div>
    </div>

  );
};


export default Perfildev1;