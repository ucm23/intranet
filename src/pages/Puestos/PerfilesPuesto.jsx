import React from 'react';
import Navbar from '../../componentes/Navbar';
import { useBreakpointValue } from '@chakra-ui/react';
import logo from '../../img/logo-white.png'
import backgroundImage from '../../img/fondoperfil.png';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import data from './data.json'; // Importar los datos desde el archivo JSON
import data from '../../assets/data.json';
import '../../styles/perfiles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Descargadev2 from '../../componentesdescarga/Descargadev2';
import Verpdf from './Verpdf';


const PerfilesPuesto = () => {

  const mobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };



  return (
    // <div style={{minheight: '100vh',flexdirection: 'column', maxWidth: '100vw',}}>
    <div style={{ flexDirection: 'column', maxWidth: '100vw', overflow: 'hidden', maxHeight: '100vh', }}>
      <Navbar backgroundColor="#001529" />

      
          <Verpdf style={{ marginTop: '0', paddingTop: '0' }}/>
        </div>
    

   
  );
};

export default PerfilesPuesto;


