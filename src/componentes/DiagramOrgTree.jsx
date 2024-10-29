import React from 'react';
import OrgTree from 'react-org-tree';
import { useNavigate } from 'react-router-dom';
// import './styles.css'; // Importa tus estilos
import { SearchOutlined, UserOutlined, FileDoneOutlined, ExpandAltOutlined, } from '@ant-design/icons';
import '../styles/arbol.css';
import { HiArrowUpRight, HiDocumentText } from "react-icons/hi2";
import imageceo from '../imgOrganigrama/CEO.png';
import CEO1 from '../imgOrganigrama/CEO1.png';
import dev1 from '../imgOrganigrama/DEV1.png';
import dev3 from '../imgOrganigrama/DEV3.png';
import dev3x from '../imgOrganigrama/DEV3X.png';
import dev2 from '../imgOrganigrama/DEV2.png';
import mesa1 from '../imgOrganigrama/MESA1.png';
import conta1 from '../imgOrganigrama/conta1.png';
import conta2 from '../imgOrganigrama/conta2.png';
import calidad1 from '../imgOrganigrama/CALIDAD1.png';
import rh1 from '../imgOrganigrama/RH1.png';
import becaria1 from '../imgOrganigrama/becaria1.png';
import becario1 from '../imgOrganigrama/becario1.png';
import juridico1 from '../imgOrganigrama/juridico1.png';
import becaria2 from '../imgOrganigrama/becaria2.png';
import SAP1 from '../imgOrganigrama/SAP1.png';
import SAP2 from '../imgOrganigrama/SAP2.png';
import IA1 from '../imgOrganigrama/IA1.png';
import IA2 from '../imgOrganigrama/IA2.png';
import infra1 from '../imgOrganigrama/infra1.png';
import curso1 from '../imgOrganigrama/curso1.png';
import ITS1 from '../imgOrganigrama/ITS1.png';
import ITS2 from '../imgOrganigrama/ITS2.png';
import { Link } from 'react-router-dom';
import Perfilceo from '../pages/perfiles/Perfilceo';
import { Flex } from 'antd';
import HoverText1 from './HoverText1';
import HoverText from './HoverText';
import ImageWithHoverText from './ImageWithHoverText';
import { Button } from '@chakra-ui/react';
import { Button as ButtonAntd } from 'antd';
import UserProfileCard from '../components/UserProfileCard';

const DiagramOrgTree = () => {

    const navigate = useNavigate();
    const handleDetails = (id, profile) => {
        if (profile) navigate(`/PerfilGral/${id}/${profile}`);
        else navigate(`/perfilesPuesto1/${id}`);
    };

    const myTreeData = {
        id: '1',
        label: (
            <div className="org-chart-node" style={{ borderRadius: '10%', fontSize: '14px', height: '225px', fontWeight: 'bold', width: '320px', transition: 'none !important', transform: 'none !important' }} >
                {/* style={{ overflow: 'hidden', overflowX: 'hidden' }}> */}
                {/* <div className="node-container"> */}
                <br></br>
                <Link to="/Perfilceo"> {/* El `to` es la ruta a la que deseas navegar */}
                    <img
                        src={CEO1}
                        alt="CEO"
                        style={{ display: 'flex', width: '85%', height: '65%', objectFit: 'cover', marginLeft: '20px' }}
                    // style={{ borderRadius: '40%', cursor: 'pointer', width: '35%', height: '40%', objectFit: 'cover', marginLeft: '20px', display: 'flex', gap: '10px' }}
                    />
                    <p style={{ fontSize: '14px', fontStyle: 'bold', fontWeight: 'bold' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {/* <Link to={`/Perfilceo/${1}`}> */}
                            <Link to={`/PerfilGral/${1}/${'CEO.png'}`}>
                                <HoverText1 text="Guillermina Sámano G. |" hoverText="CEO Guillermina Sámano G." />
                            </Link>
                            <Link to={`/PerfilGral/${2}/${'ceo2.png'}`}>
                                <HoverText1 text="Edith Sámano G." hoverText="CEO Edith Sámano G." />
                            </Link>
                        </div>
                        <Link to={`/PerfilesPuesto1/${1}`}>
                            <HoverText text="Dirección General" />
                        </Link>
                    </p>
                </Link>
            </div>

        ),

        children: [
            {
                id: '2',
                label: <div className='childrens-label-title' style={{ backgroundColor: '#E5C200' }}>Jurídico y Seguridad</div>,
                children: [{
                    id: '3',
                    label: <UserProfileCard
                        color="#E5C200"
                        name="Luis Manuel Alfaro Rivera"
                        puesto="Lic. Jurídico"
                        urlPhoto={juridico1}
                        onClickCV={() => handleDetails(2)}
                        onClickProfile={() => handleDetails(3, 'juridico1.png')}
                    />
                },
                ],
            },

            {
                id: '4',
                label: <div className='childrens-label-title' style={{ backgroundColor: '#c24d23' }}>Desarrollo Humano</div>,
                children: [{
                    id: '5',
                    label: <UserProfileCard
                        color="#C24D23"
                        name="Marisela Ladrón de G."
                        puesto="Lic. Recursos Humanos"
                        urlPhoto={rh1}
                        onClickCV={() => handleDetails(3)}
                        onClickProfile={() => handleDetails(4, 'RH1.png')}
                    />
                },
                ],
            },
            {
                id: '6',
                label: <div className='childrens-label-title' style={{ backgroundColor: 'brown' }}>Calidad</div>,
                children: [{
                    id: '7',
                    label: <UserProfileCard
                        color="#4E3B31"
                        name="José Luis Rangel"
                        puesto="Lic. Calidad"
                        urlPhoto={calidad1}
                        onClickCV={() => handleDetails(4)}
                        onClickProfile={() => handleDetails(5, 'CALIDAD1.png')}
                    />
                },
                ],
            },

            {
                id: '8',
                label: <div className='childrens-label-title' style={{ backgroundColor: 'green' }}>Contabilidad y Finanzas</div>,
                children: [{
                    id: '9',
                    label: <UserProfileCard
                        color="#4A8D5A"
                        name="Carlos Fco. Sainz R."
                        puesto="Lic. Contable"
                        urlPhoto={conta2}
                        onClickCV={() => handleDetails(5)}
                        onClickProfile={() => handleDetails(6, 'conta2.png')}
                    />
                }],
            },
            {
                id: '10',
                label: <div className='childrens-label-title' style={{ backgroundColor: 'blue' }} >Admon y Cobranza</div>,
                children: [{
                    id: '11',
                    label: <UserProfileCard
                        color="#4682B4"
                        name="Ashley M. Huerta Arias"
                        puesto="Admon y Marketing"
                        urlPhoto={conta1}
                        onClickCV={() => handleDetails(6)}
                        onClickProfile={() => handleDetails(7, 'conta1.png')}
                    />
                }],
            },

            {
                id: '12',
                label: <div className='childrens-label-title' style={{ backgroundColor: '#3C005E' }}>SAP</div>,
                children: [
                    {
                        id: '13',
                        label: <UserProfileCard
                            color="#3C005E"
                            name="Norma Barbosa"
                            puesto="Consultor SAP MM/FI/SD"
                            urlPhoto={SAP1}
                            onClickCV={() => handleDetails(7)}
                            onClickProfile={() => handleDetails(8, 'SAP1.png')}
                        />
                    },

                    {
                        id: '14',
                        label: <UserProfileCard
                            color="#3C005E"
                            name="Francisco J. Mejía R.a"
                            puesto="Consultor Consultor SAP-ABAP"
                            urlPhoto={SAP2}
                            onClickCV={() => handleDetails(8)}
                            onClickProfile={() => handleDetails(9, 'SAP2.png')}
                        />
                    },

                ],
            },

            {
                id: '15',
                label: <div className='childrens-label-title' style={{ backgroundColor: '#001529' }}>Desarrollo de Aplicaciones Web, Móvil y C-S </div>,
                children: [
                    {
                        id: '16',
                        label: <UserProfileCard
                            color="#001529"
                            name="Gilberto López Antonio"
                            puesto="Licenciado en Informática / Dev. Web Senior"
                            urlPhoto={dev1}
                            onClickCV={() => handleDetails(9)}
                            onClickProfile={() => handleDetails(10, 'DEV1.png')}
                        />,

                        children: [

                            {
                                id: '17',
                                label: <UserProfileCard
                                    color="#001529"
                                    name="Ana Cristina Hernández B."
                                    puesto="Becaria Dev. Web"
                                    urlPhoto={becaria1}
                                    onClickCV={() => handleDetails(11)}
                                    onClickProfile={() => handleDetails(12, 'becaria1.png')}
                                />
                                /*<div className="tree-node" style={{ border: '2px solid #001529', borderRadius: '10%', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                                        <br></br>
                                        <Link to={`/PerfilGral/${11}/${'becaria1.png'}`}>
                                            <ImageWithHoverText
                                                imgSrc={becaria1}
                                                hoverText="Ver mi Perfil"
                                                style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                            />
                                        </Link>
                                        <br></br>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Ana Cristina Hernández B.
                                            <br></br>
                                            <Link to={`/PerfilesPuesto1/${12}`}>
                                                <HoverText text="Becaria Dev. Web" />
                                            </Link>
                                        </span></div>*/
                                ,
                            },
                        ],
                    },

                    {
                        id: '18',
                        label: <div className="tree-node" style={{ borderRadius: '10%', border: '2px solid #001529', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                            <br></br>
                            <Link to={`/PerfilGral/${12}/${'DEV2.png'}`}>
                                {/* <Link to="/Perfildev2"> */}
                                <div>
                                    <ImageWithHoverText
                                        imgSrc={dev2}
                                        hoverText="Ver mi Perfil"
                                    />
                                </div>
                            </Link>
                            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Ulises Cano M.
                                <br></br>
                                <Link to={`/PerfilesPuesto1/${10}`}>
                                    <HoverText text="Ing. Dev. Móvil Senior" />
                                </Link>
                            </span></div>,

                        // children: [

                        //     {
                        //         id: '19', label: <div className="tree-node" style={{ border: '2px solid #001529', borderRadius: '10%', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                        //             <br></br>
                        //             <Link to="/PerfilBeca2">
                        //                 <ImageWithHoverText
                        //                     imgSrc={becario1}
                        //                     hoverText="Ver mi Perfil"
                        //                     style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                        //                 />
                        //             </Link>
                        //             <br></br>
                        //             <span style={{ fontSize: '12px', fontWeight: 'bold' }}> Brayan Emmanuel Olmos S.
                        //                 <br></br>
                        //                 <Link to={`/PerfilesPuesto1/${12}`}>
                        //                     <HoverText text="Dev. Web Junior" />
                        //                 </Link>
                        //             </span></div>
                        //     },
                        // ],
                    },
                    {
                        id: '20', label: <div className="tree-node" style={{ borderRadius: '10%', border: '2px solid #001529', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                            <br></br>
                            <Link to={`/PerfilGral/${14}/${'DEV3X.png'}`}>
                                {/* <Link to="/Perfildev3"> */}
                                <div>
                                    <ImageWithHoverText
                                        imgSrc={dev3x}
                                        hoverText="Ver mi Perfil"
                                    // style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                    />
                                </div>
                            </Link>
                            <span style={{ fontSize: '12px', fontWeight: 'bold' }}> Luz Adriana Castillo B.
                                <br></br>
                                <Link to={`/PerfilesPuesto1/${11}`}>
                                    <HoverText text="Ing. Dev.C-S Senior" />
                                </Link>
                            </span></div>,
                        children: [

                            {
                                id: '21', label: <div className="tree-node" style={{ border: '2px solid #001529', borderRadius: '10%', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                                    <br></br>
                                    <Link to={`/PerfilGral/${15}/${'DEV3X.png'}`}>
                                        {/* <Link to="/PerfilBeca3"> */}
                                        <ImageWithHoverText
                                            imgSrc={becaria2}
                                            hoverText="Ver mi Perfil"
                                            style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                        />
                                    </Link>
                                    <br></br>
                                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>  Antonia Cortés Pérez
                                        <br></br>
                                        <Link to={`/PerfilesPuesto1/${12}`}>
                                            <HoverText text="Becaria Dev. Web" />
                                        </Link>
                                    </span></div>
                            },
                        ],
                    },
                ],
            },

            {
                id: '21',
                label: <div className='childrens-label-title' style={{ backgroundColor: '#00FF00' }}>Victum AI</div>,
                children: [
                    {
                        id: '22', label: <div className="tree-node" style={{ borderRadius: '10%', border: '2px solid #00FF00', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                            <br></br>
                            <Link to={`/PerfilGral/${16}/${'IA1.png'}`}>
                                {/* <Link to="/PerfilIA1"> */}
                                <div>
                                    <ImageWithHoverText
                                        imgSrc={IA1}
                                        hoverText="Ver mi Perfil"
                                    // style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                    />
                                </div>
                            </Link>
                            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>  Pablo Tlaxcoapan
                                <br></br>
                                <Link to={`/PerfilesPuesto1/${13}`}>
                                    <HoverText text="Ing. Dev. IA" />
                                </Link>
                            </span></div>

                    },

                    {
                        id: '23', label: <div className="tree-node" style={{ borderRadius: '10%', border: '2px solid #00FF00', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                            <br></br>
                            <Link to={`/PerfilGral/${17}/${'IA2.png'}`}>
                                {/* <Link to="/PerfilIA2"> */}
                                <div>
                                    <ImageWithHoverText
                                        imgSrc={IA2}
                                        hoverText="Ver mi Perfil"
                                    // style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                    />
                                </div>
                            </Link>
                            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>  Josue Tlaxcoapan
                                <br></br>
                                <Link to={`/PerfilesPuesto1/${13}`}>
                                    <HoverText text="Ing. Dev. IA" />
                                </Link>
                            </span></div>
                    },

                ],
            },

            {
                id: '24',
                label: <div className='childrens-label-title' style={{ backgroundColor: '#1890ff' }}>Infraestructura, CiberSeguridad <br />y Mesa de Ayuda</div>,
                children: [
                    {
                        id: '25',
                        label: <div className="tree-node" style={{ borderRadius: '10%', border: '2px solid #1890ff', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                            <br></br>
                            <Link to={`/PerfilGral/${18}/${'infra1.png'}`}>
                                {/* <Link to="/PerfilInfra"> */}
                                <div>
                                    <ImageWithHoverText
                                        imgSrc={infra1}
                                        hoverText="Ver mi Perfil"
                                    // style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                    />
                                </div>
                            </Link>
                            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Heber Argumedo
                                <br></br>
                                <Link to={`/PerfilesPuesto1/${14}`}>
                                    <HoverText text="Ing. Infraestructura e ITS" />
                                </Link>

                            </span>
                        </div>,

                        children: [
                            {
                                id: '27', label: <div className="tree-node" style={{ border: '2px solid #1890ff', borderRadius: '10%', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                                    <br></br>
                                    <Link to={`/PerfilGral/${20}/${'curso1.png'}`}>
                                        {/* <Link to="/PerfilCapacitacion"> */}
                                        <div>
                                            <ImageWithHoverText
                                                imgSrc={curso1}
                                                hoverText="Ver mi Perfil"
                                            // style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                            />
                                        </div>
                                    </Link>
                                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>  Luis Alberto Ruiz Aguilar
                                        <br></br>
                                        <Link to={`/PerfilesPuesto1/${16}`}>
                                            <HoverText text="Ing. Capacitación" />
                                        </Link>

                                    </span></div>
                            },

                        ],
                    },
                ],
            },
            {
                id: '28',
                label: <div className='childrens-label-title' style={{ backgroundColor: '#A9A9A9' }}>ITS, Peaje y <br /> Telepeaje</div>,
                children: [
                    {
                        id: '29', label: <div className="tree-node" style={{ border: '2px solid #A9A9A9', borderRadius: '10%', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                            <br></br>
                            <Link to={`/PerfilGral/${21}/${'ITS2.png'}`}>
                                {/* <Link to="/Perfilits1"> */}
                                <div>
                                    <ImageWithHoverText
                                        imgSrc={ITS2}
                                        hoverText="Ver mi Perfil"
                                    // style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                    />
                                </div>
                            </Link>
                            <span style={{ fontSize: '12px', fontWeight: 'bold' }}> Victor Ricardo Mojica Leines
                                <br></br>
                                <Link to={`/PerfilesPuesto1/${17}`}>
                                    <HoverText text="Ing. ITS y Peaje" />
                                </Link>
                            </span>
                        </div>,
                        children: [

                            {
                                id: '30', label: <div className="tree-node" style={{ border: '2px solid #A9A9A9', borderRadius: '10%', width: '160px', height: '240px', transition: 'none !important', transform: 'none !important' }}>
                                    <br></br>
                                    <Link to={`../PerfilGral/${22}/${'ITS1.png'}`}>
                                        {/* <Link to="/Perfilits2"> */}
                                        <div>
                                            <ImageWithHoverText
                                                imgSrc={ITS1}
                                                hoverText="Ver mi Perfil"
                                            // style={{ marginTop: '-35px', border: '2px solid #ccc', borderRadius: '50%', cursor: 'pointer', width: '90%', height: '75%', objectFit: 'cover', marginLeft: '10px', transition: 'none !important', transform: 'none !important' }}
                                            />
                                        </div>
                                    </Link>
                                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>  Julio César Castillo Z.
                                        <br></br>
                                        <Link to={`/PerfilesPuesto1/${18}`}>
                                            <HoverText text="Ing. Integración" />
                                        </Link>
                                    </span></div>
                            },

                        ],
                    },
                ],
            },

        ],
    };

    return (
        <div className="org-tree-container">
            <div class="project-indicators">
                <h1>Indicadores de Avance por Proyectos</h1>
                <div class="filters">
                    <select>
                        <option value="">Filtrar por Proyecto</option>
                    </select>
                    <button>Aplicar Filtros</button>
                </div>

                <div class="project-cards">
                    <div class="project-card">
                        <h2>Nombre del Proyecto 1</h2>
                        <p>Estado: En Progreso</p>
                        <div class="progress-bar">
                            <div class="progress" style={{ width: '70%' }}></div>
                        </div>
                        <p>Avance: 70%</p>
                        <p>Fecha de Inicio: 01/01/2024</p>
                        <p>Fecha de Fin: 31/12/2024</p>
                        <p>Responsable: Juan Pérez</p>
                    </div>

                    <div class="project-card">
                        <h2>Nombre del Proyecto 2</h2>
                        <p>Estado: Completado</p>
                        <div class="progress-bar">
                            <div class="progress" style={{ width: '100%' }}></div>
                        </div>
                        <p>Avance: 100%</p>
                        <p>Fecha de Inicio: 01/02/2024</p>
                        <p>Fecha de Fin: 31/08/2024</p>
                        <p>Responsable: María López</p>
                    </div>
                </div>
            </div>
            <OrgTree
                data={myTreeData}
                horizontal={false}
                collapsable={false}
                expandAll={false}
            />
        </div>

    );
};


export default DiagramOrgTree;