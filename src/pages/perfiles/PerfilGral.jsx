import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import '../../styles/ContentWithImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
//import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Linea from '../../componentes/Linea';
import Lineaformacion from '../../componentes/Lineaformaciob';
import Lineaexperiencia from '../../componentes/Lineaexperiencia';
import dato from '../../assets/dato.json';
import '../../styles/perfil.css';
import Descargacv from '../../componentes/Descargacv';


const PerfilGral = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();
    const [size, setSize] = useState('middle'); // default is 'middle'

    const [mostrarComponente, setMostrarComponente] = useState(false);

    const handleClick = () => {
        setMostrarComponente(true); // Actualiza el estado para mostrar el componente
    };

    //PARAMETROS PARA LLENAR PERFIL//
    // const { id } = useParams(); // Obtener el id desde la URL
    const { id, nombreImagen } = useParams();
    const puestoId = parseInt(id); // Convertir el id a número, ya que useParams devuelve strings

    // Filtrar el perfil del archivo JSON por id
    const puesto = dato.find((item) => item.id === puestoId);
    console.log("Perfil encontrado:", puesto); // Para ver el puesto que se encuentra

    // Si no se encuentra el perfil, muestra un mensaje
    if (!puesto) {
        return <p>Perfil no encontrado</p>;
    }
    const cv = puesto.cv;
    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <div className="container flex flex-row">
                <div className="leftContainer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img
                            src={require(`../../imgOrganigrama/${nombreImagen}`)} // Asegúrate de que la ruta es correcta
                            alt="Descripción de la imagen"
                            style={{ borderRadius: '0%', cursor: 'pointer', width: '50%', height: '40%', objectFit: 'cover', marginLeft: '45px', marginTop: '10px' }}
                        />
                    </div>
                    <div>
                        <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Datos Personales</p>
                        {/* <h2 className="title">{puesto.titulo}</h2> */}
                        <p></p>
                        <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginLeft: '7px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '13px', marginLeft: '2px', fontFamily: 'customFont' }}>{puesto.user}</span>
                        {/* <br></br> */}
                        <p></p>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginLeft: '6px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '11px', marginLeft: '0x', fontFamily: 'customFont' }}>{puesto.mail}</span> {/* Texto */}
                        {/* <p style={{ color: 'white', fontSize: '12px', marginLeft: '18px', fontFamily: 'customFont' }}>{puesto.mail}</p> */}
                        <p></p>
                        <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginLeft: '7px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '13px', marginLeft: '2px', fontFamily: 'Roboto, sans-serif' }}>Telefono {puesto.telefono}</span> {/* Texto */}
                        {/* <p style={{ color: 'white', fontSize: '12px', marginLeft: '50px', fontFamily: 'customFont' }}>2361039980</p> */}
                        <p></p>
                        <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginLeft: '7px', height: '15px', width: '15px' }} /> {/* Icono Font Awesome */}
                        <span style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginLeft: '10px', fontFamily: 'customFont' }}>Domicilio</span> {/* Texto */}
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '10px', fontFamily: 'Roboto, sans-serif' }}>{puesto.domicilio}</p>

                        <p className="coloredUnderline" style={{ textAlign: 'center', color: 'gray', fontSize: '20px', marginLeft: '30px', fontFamily: 'customFont' }}>Competencias</p>
                        {/* <br></br> */}<p></p>
                        <p style={{ color: 'white', fontSize: '10px', marginLeft: '10px', marginRight: '10px', fontFamily: 'Roboto, sans-serif', textAlign: 'justify', lineHeight: '1.6', wordSpacing: '-0.03em', hyphens: 'auto' }}>
                            {puesto.competencias.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p> {/* Texto con saltos de línea */}
                    </div>
                </div>
                <div className="rightContainer">
                    <br></br>
                    <Linea />
                    {/* <br></br> */}
                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'Roboto, sans-serif', textAlign: 'justify' }}>
                        {puesto.perfil.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    {/* <br></br> */}
                    <Lineaformacion />

                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'Roboto, sans-serif', textAlign: 'justify' }}>
                        {puesto.formacion.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    {/* Licenciado en Informática en La Universidad de la Cañada */}
                    <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontWeight: 'bold' }}> Capacitación:</p>
                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'Roboto, sans-serif', textAlign: 'justify' }}>
                        {puesto.capacitacion.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}

                    </p>

                    <Lineaexperiencia />
                    <p style={{ color: 'black', fontSize: '15px', marginLeft: '30px', fontFamily: 'customFont', fontWeight: 'bold' }}> Grupo CTI:</p>
                    {/* <Descargacv cv={cv} style={{ position: 'absolute', top: '0px', right: '20px' }} /> */}
                    <p style={{ color: 'black', fontSize: '13px', marginLeft: '25px', marginRight: '25px', fontFamily: 'Roboto, sans-serif', textAlign: 'justify' }}>
                        {puesto.experiencia.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    {/* <Descargacv cv={cv} style={{ size: 'small',position: 'relative', top: '-10px' }} /> */}
                    <Descargacv cv={cv} />

                    {/* <div style={{ position: 'relative' }}>
  <Descargacv
    cv={cv}
   style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
  /></div> */}

                    {/* cv
                    <Descargadev1 cv={cv} /> */}
                </div>
            </div>
        </div>


    );
};



export default PerfilGral;