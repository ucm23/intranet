import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import curso1 from '../../imgOrganigrama/curso1.png';
import '../../styles/ContentWithImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Linea from '../../componentes/Linea';
import Lineaformacion from '../../componentes/Lineaformaciob';
import Lineaexperiencia from '../../componentes/Lineaexperiencia';
import Descargadev3 from '../../componentesdescarga/Descargadev3';


const PerfilCapacitacion = () => {
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
              src={curso1}
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
            <span style={{ textAlign: 'center', color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}>Luis Alberto Ruíz Aguilar</span><br></br>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '20px', fontFamily: 'customFont' }}>Email</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '12px', marginLeft: '18px', fontFamily: 'customFont' }}>laruiz@consultores-cti.com.mx</p>
            <p></p>
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '15px', fontFamily: 'customFont' }}>Telefono: 5527069660</span> {/* Texto */}
            {/* <p style={{ color: 'white', fontSize: '12px', marginLeft: '50px', fontFamily: 'customFont' }}>2361221762</p> */}
            <p></p>
            <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '15px', fontFamily: 'customFont' }}>Domicilio</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '10px', marginLeft: '20px', fontFamily: 'customFont' }}> Av. Ejército Nacional Mexicano 769, Granada, Miguel Hidalgo, 11520, CDMX</p>

            <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Competencias</p>
            {/* <br></br> */}
            <p></p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Implementación de Aplicaciones de Escritorio, Web, .Net, C# </p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Soporte y mantenimiento a equipo electrónico, eléctrico y telecomunicaciones</p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Diseño de BD, explotación de información SQL Server</p>

          </div>

          {/* contenedor derecho, perfil */}
        </div>
        <div className="rightContainer">
          <br></br>
          <Linea />
          
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
          Profesional en TI con experiencia en implementación de Aplicaciones de Escritorio, Web, .Net, C# y Sharepoint y administración, mantenimiento, 
          diseño, configuración, seguridad, rendimiento y disponibilidad de las bases de datos SQL principalmente en Sistemas de Peaje.

          </p>
          {/* <br></br> */}
          <Lineaformacion />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            Licenciado en Ciencias de la Informática | Instituto Leonardo Bravo, A.C.
            {/* <br></br> */}
            <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Cursos y Certificaciones:</p>
            <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
              * Windows Communication Foundation,Visual Studio.Net <br></br>
              * MCT:SQL Server 2008 Implementing & Maintennace| MICROSOFT CERTIFIED SQL SERVER 2008<br></br>
              * MICROSOFT CERTIFIED PROFESIONAL DEVELOPER VISUAL STUDIO 2010
            </p>
          </p>
          <Lineaexperiencia />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Grupo CTI:</p>
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            * Desarrollo e implementación de Aplicaciones de Escritorio, Web, .Net, C#  <br></br>
            * Soporte y mantenimiento a equipo electrónico, eléctrico y telecomunicaciones<br></br>
            * Instalar, configurar y actualizar sistemas de gestión de bases de datos (DBMS) SQL Server 
          </p>
          <Descargadev3 />
        </div>
      </div>
    </div>

  );
};

export default PerfilCapacitacion;