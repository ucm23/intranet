import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import becario1 from '../../imgOrganigrama/becario1.png';
import '../../styles/ContentWithImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Linea from '../../componentes/Linea';
import Lineaformacion from '../../componentes/Lineaformaciob';
import Lineaexperiencia from '../../componentes/Lineaexperiencia';
import Descargadev2 from '../../componentesdescarga/Descargadev2';


const PerfilBeca2 = () => {
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
              src={becario1}
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
            <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesomeb */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '2px', fontFamily: 'customFont' }}>Bryan Emmanuel Olmos S.</span><br></br>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '10px', fontFamily: 'customFont' }}>Email</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '12px', marginLeft: '18px', fontFamily: 'customFont' }}>bryanolmos@consultores-cti.com.mx</p>
            <p></p>
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '15px', fontFamily: 'customFont' }}>Telefono: 2361221762</span> {/* Texto */}
            {/* <p style={{ color: 'white', fontSize: '12px', marginLeft: '50px', fontFamily: 'customFont' }}>2361221762</p> */}
            <p></p>
            <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '15px', fontFamily: 'customFont' }}>Domicilio</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '10px', marginLeft: '20px', fontFamily: 'customFont' }}> Av. Ejército Nacional Mexicano 769, Granada, Miguel Hidalgo, 11520, CDMX</p>

            <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Competencias</p>
            {/* <br></br> */}
            <p></p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Implementación de Aplicaciones de Escritorio, Web, .Net, C# y Sharepoint</p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Soporte y mantenimiento a equipo electrónico, eléctrico y telecomunicaciones</p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Configuración, instalación y calibración de Equipo ITS</p>

          </div>

          {/* contenedor derecho, perfil */}
        </div>
        <div className="rightContainer">
          <br></br>
          <Linea />
          <br></br>
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
          Profesional en TI con experiencia en implementación de Aplicaciones de Escritorio, Web, .Net, C# y Sharepoint,HTML, 
          CSS, XML, XSLT, Python, .NET Framework (VB.NET, C#, ASP.NET, ADO.NET, Entity Framework). Windows Communication Foundation (WCF), 
          JavaScript, ajax, jQuery, JSON, Sharepoint CAML.
          </p>
          {/* <br></br> */}
          <Lineaformacion />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            Licenciado en Informática en La Universidad de la Cañada
            {/* <br></br> */}
            <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Cursos:</p>
            <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
              * HTML, CSS, XML, XSLT, Python, .NET Framework,JavaScript, ajax, jQuery, JSON, Sharepoint CAML <br></br>
              * DML, DDL language, Views, Stored Procedures, Functions, Triggers, MS SQL Server, MySQL, Firebird, Oracle, Progress
            </p>
          </p>
          <Lineaexperiencia />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Grupo CTI:</p>
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            * Desarrollo e implementación de Aplicaciones de Escritorio, Web, .Net, C# y Sharepoint  <br></br>
            * Soporte y mantenimiento a equipo electrónico, eléctrico y telecomunicaciones<br></br>
            * Configuración, instalación y calibración de EQUIPO ITS 
          </p>
          <Descargadev2 />
        </div>
      </div>
    </div>

  );
};


export default PerfilBeca2;