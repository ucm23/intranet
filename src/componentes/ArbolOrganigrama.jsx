import React from 'react';
import OrgTree from 'react-org-tree';
// import './styles.css'; // Importa tus estilos
import '../styles/arbol.css';
import imageceo from '../img/CEO.png';
import dev1 from '../img/DEV1.png';
import dev3 from '../img/DEV3.png';
import dev2 from '../img/DEV2.png';
import mesa1 from '../img/MESA1.png';
import conta1 from '../img/conta1.png';

import { useBreakpointValue } from '@chakra-ui/react'
import Navbar from '../componentes/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Perfilceo from '../pages/perfiles/Perfilceo';



// Datos de ejemplo para el organigrama
// const myTreeData = {
//   id: '1',
//   label: <div className="tree-node">CEO</div>, 

const myTreeData = {
    id: '1',
    label: (
        <div className="tree-node" style={{ overflow: 'hidden', overflowX: 'hidden' }}>

            <Link to="/Perfilceo"> {/* El `to` es la ruta a la que deseas navegar */}
                <img className='node__image'
                    src={imageceo} // URL de la imagen del nodo
                    alt="CEO"
                    style={{ borderRadius: '40%', marginRight: '8px', cursor: 'pointer' }}
                />
            </Link>
            <span style={{ fontSize: '12px' }}>Guillermina Sámano
                <br></br>
                Dirección General
            </span>
        </div>
    ),


    children: [
        {
            id: '2',
            label: <div className="tree-node" style={{ fontSize: '11px', textAlign: 'middle' }}>Desarrollo de Aplicaciones</div>,
            children: [
                {
                    id: '3', label: <div className="tree-node">
                        <Link to="/Perfildev1"> 
                        <img className='node__image'
                            src={dev1} // URL de la imagen del nodo
                            alt="DEV"
                            style={{ borderRadius: '50%', marginRight: '8px',cursor: 'pointer' }}
                        />
                        </Link>
                        <span style={{ fontSize: '12px' }}>Gilberto López
                            <br></br>
                            Ing. Desarrollo
                        </span>
                    </div>
                },
                {
                    id: '4', label: <div className="tree-node">
                        <Link to="/Perfildev2"> 
                        <img className='node__image'
                            src={dev2} // URL de la imagen del nodo
                            alt="DEV"
                            style={{ borderRadius: '50%', marginRight: '8px',cursor: 'pointer' }}
                        />
                        </Link>
                        <span style={{ fontSize: '12px' }}>Ulises Cano
                            <br></br>
                            Ing. Desarrollo
                        </span></div>
                },
                {
                    id: '5', label: <div className="tree-node">
                         <Link to="/Perfildev3"> 
                        <img className='node__image'
                            src={dev3} // URL de la imagen del nodo
                            alt="CEO"
                            style={{ borderRadius: '50%', marginRight: '8px',cursor: 'pointer' }}
                        />
                        </Link>
                        <span style={{ fontSize: '12px' }}>Adriana Castillo
                            <br></br>
                            Ing. Desarrollo
                        </span></div>
                },
            ],
        },
        {
            id: '6',
            label: <div className="tree-node" style={{ fontSize: '12px' }}>Mesa de Ayuda y Soporte</div>,
            children: [{
                id: '7', label: <div className="tree-node">
                     <Link to="/Perfilmesa1"> 
                    <img className='node__image'
                        src={mesa1} // URL de la imagen del nodo
                        alt="CEO"
                        style={{ borderRadius: '50%', marginRight: '8px',cursor: 'pointer' }}
                    />
                    </Link>
                    <span style={{ fontSize: '12px' }}>Juan Gil
                        <br></br>
                        Ing. de Soporte
                    </span></div>
            },
            ],
        },
        {
            id: '8',
            label: <div className="tree-node" style={{ fontSize: '12px' }}>Ciber Seguridad</div>,
            children: [{
                id: '7', label: <div className="tree-node">
                     <Link to="/Perfilceo"> 
                    <img className='node__image'
                        src={imageceo} // URL de la imagen del nodo
                        alt="CEO"
                        style={{ borderRadius: '50%', marginRight: '8px',cursor: 'pointer' }}
                    />
                    </Link>
                    <span style={{ fontSize: '12px' }}>Guillermina Sámano
                        <br></br>
                        Ing. CiberSeguridad
                    </span></div>
            },
            ],
        },
        {
            id: '10',
            label: <div className="tree-node" style={{ fontSize: '12px' }}>ITS y Telepeaje</div>,
            children: [{
                id: '7', label: <div className="tree-node">
                     <Link to="/Perfilceo"> 
                    <img className='node__image'
                        src={imageceo} // URL de la imagen del nodo
                        alt="CEO"
                        style={{ borderRadius: '50%', marginRight: '8px',cursor: 'pointer' }}
                    />
                    </Link>
                    <span style={{ fontSize: '12px' }}>Guillermina Sámano
                        <br></br>
                        Ing. en ITS
                    </span></div>
            }],
        },
        {
            id: '12',
            label: <div className="tree-node" style={{ fontSize: '12px' }}>Contabilidad</div>,
            children: [{
                id: '7', label: <div className="tree-node">
                    <Link to="/Perfilconta1"> 
                    <img className='node__image'
                        src={conta1} // URL de la imagen del nodo
                        alt="CEO"
                        style={{ borderRadius: '50%', marginRight: '8px',cursor: 'pointer' }}
                    />
                    </Link>
                    <span style={{ fontSize: '12px' }}>Ashly Huerta
                        <br></br>
                        Lic. Contable
                    </span></div>
            }],
        },
    ],
};

const ArbolOrganigrama = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };
    return (
        <Navbar mobile={mobile}>
            <div style={{ width: '600px', height: '450px' }}>
                <OrgTree
                    data={myTreeData}  // Los datos del organigrama
                    horizontal={false} // Mostrar el organigrama de forma vertical (false) u horizontal (true)
                    collapsible // Permitir colapsar nodos
                />
            </div>

        </Navbar>

    );
};

export default ArbolOrganigrama;