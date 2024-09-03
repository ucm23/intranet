import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import dev3 from '../../img/DEV3.png';

const Perfildev3 = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();
    const [size, setSize] = useState('middle'); // default is 'middle'
    return (
        <Navbar mobile={mobile}>
            <div style={{ height: '100vh', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#001529', overflow: 'hidden', }}>
                    <img src={logo} alt="Logo" style={{ width: '120px', height: '120', 'logo-small': 'logo', verticalAlign: 'middle', borderRadius: '8px' }} />
                    {/* <p><br></br></p> */}
                    <br></br>
                </div>
                <p style={{ textAlign: 'center', color: 'black', fontSize: '22px', marginLeft: '10px' }}> Perfil Profesional</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}> {/* Usando Flexbox para alinear en fila */}
                    <img
                        src={dev3}
                        alt="Descripción de la imagen"
                        style={{ width: '100px', height: '100px', borderRadius: '8px' }} // Estilo de la imagen
                    />
                    <div>
                        {/* <h1>Título del Componente</h1> */}
                        {/* <p>Lic. Adriana Castillo Baeza</p> */}
                        <br></br>
                        <p>Lic. Adriana Castillo Baeza</p> <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        CV
                    </Button>
                    </div>
                </div>
                </div>
        </Navbar>


    );
};

export default Perfildev3;