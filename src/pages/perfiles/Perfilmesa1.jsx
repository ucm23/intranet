import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import mesa1 from '../../imgOrganigrama/MESA1.png';
import '../../styles/ContentWithImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Linea from '../../componentes/Linea';
import Lineaformacion from '../../componentes/Lineaformaciob';
import Lineaexperiencia from '../../componentes/Lineaexperiencia';
import Descargadev1 from '../../componentesdescarga/Descargadev1';
import Descargamesa1 from '../../componentesdescarga/Descargamesa1';


const Perfilmesa1 = () => {
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
              src={mesa1}
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
            <span style={{ textAlign: 'center', color: 'white', fontSize: '13px', marginLeft: '18px', fontFamily: 'customFont' }}>Juan José Gil López</span><br></br>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginLeft: '18px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '20px', fontFamily: 'customFont' }}>Email</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '12px', marginLeft: '18px', fontFamily: 'customFont' }}>juanjose@consultores-cti.com.mx</p>
            <p></p>
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginLeft: '10px', fontFamily: 'customFont' }}>Telefono: 7227072448</span> {/* Texto */}
            {/* <p style={{ color: 'white', fontSize: '12px', marginLeft: '50px', fontFamily: 'customFont' }}>7227072448</p> */}
            <p></p>
            <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginLeft: '20px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
            <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '15px', fontFamily: 'customFont' }}>Domicilio</span> {/* Texto */}
            <p style={{ color: 'white', fontSize: '10px', marginLeft: '20px', fontFamily: 'customFont' }}> Toluca, Estado de México</p>

            <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Competencias</p>
            {/* <br></br> */}
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Conocimientos de JAVA, FLUTTER, C#, HTML, CSS, PHP, PYTHON</p>
            <p style={{ color: 'white', fontSize: '11px', marginLeft: '5px', fontFamily: 'customFont' }}> * Manejo de MySQL, ORACLE, PostgreSQL.</p>
            <p style={{ color: 'white', fontSize: '10px', marginLeft: '5px', fontFamily: 'customFont' }}> * NETBEANS, VISUALSTUDIO, ANDROID STUDIO, SQL WORKBRENCH, VIRTUALBOX, GITHUB</p>

          </div>

          {/* contenedor derecho, perfil */}
        </div>
        <div className="rightContainer">
          <br></br>
          <Linea />
          <br></br>
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            Profesional en TI con apmia experiencia en Mantenimiento preventivo y correctivo de equipos de computo, cctv, telefonía y redes, 
            Soporte técnico a usuarios, Resolución de problemas de hardware y software, Instalación de redes, entre otros.
          </p>
          {/* <br></br> */}
          <Lineaformacion />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
          Ingeniería en Sistemas Computacionales | Instituto Tecnológico de Toluca
            {/* <br></br> */}
            <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Cursos:</p>
            <p style={{ color: 'black', fontSize: '11px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
              *  JAVA, C#, HTML, CSS, PHP, PYTHON, MySQL, ORACLE, PostgreSQL <br></br>
              *  NETBEANS, VISUALSTUDIO, ANDROID STUDIO, SQL WORKBRENCH, VIRTUALBOX, GITHUB
            </p>
          </p>
          <Lineaexperiencia />
          {/* <br></br> */}
          <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Grupo CTI:</p>
          <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'customFont', textAlign: 'justify' }}>
            * Mantenimiento preventivo y correctivo de equipos de computo, cctv, telefonía y redes <br></br>
            * Mantenimiento de Software,Configuración de Redes   <br></br>
            * Desarrollo y documentación de proyectos<br></br>
          </p>
          <Descargamesa1 />
        </div>
      </div>
    </div>

  );
};


export default Perfilmesa1;