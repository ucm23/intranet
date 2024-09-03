import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar';
import logo from '../../img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpointValue } from '@chakra-ui/react';
import imageceo from '../../img/CEO.png';
import BotonDescarga from '../../componentes/BotonDescarga';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';


const Perfilceo = () => {
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
                        src={imageceo}
                        alt="Descripción de la imagen"
                        style={{ width: '100px', height: '100px', borderRadius: '8px' }} // Estilo de la imagen
                    />
                    <div>
                    <br></br>
                        <p>Lic. Guillermina Sámano G</p> <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        CV
                    </Button>
                        {/* <p><br></br></p> */}
                    </div>

                </div>
                {/* <div>
                <br></br> */}
                    {/* <Button type="primary" icon={<DownloadOutlined />} size={size} style={{ marginTop: '5%', textAlign: 'right', }} /> */}
                    {/* <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} >
                        CV
                    </Button> */}
                    {/* <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        CV
                    </Button> */}
                {/* </div> */}
            </div>

        </Navbar>


    );
};



export default Perfilceo;