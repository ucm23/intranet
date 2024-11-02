import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { FaFolder, FaFileImage, FaFilePowerpoint, FaFilePdf, FaFileWord, FaFileExcel, FaSpinner } from "react-icons/fa";
import {
    AiOutlineFile, AiOutlineDownload, AiOutlineDelete, AiOutlineShareAlt, AiOutlineClose, AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineLeft, AiOutlineRight
} from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { CiCircleCheck } from "react-icons/ci";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import Navbar from '../../componentes/Navbar';
import GraficaAvancesProyecto from './GraficaAvancesProyecto';
import { useBreakpointValue } from '@chakra-ui/react';
import Proyecto from './Proyecto';
import { useLocation } from 'react-router-dom';
import { Spin } from 'antd';
import { Flex, Progress } from 'antd';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Badge, Space, Switch } from 'antd';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Button, Modal } from 'antd';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import '../../styles/estilo.css';
import { MdCheckCircle } from 'react-icons/md';
import { detalleProjects } from '../../api/proyectos/projects';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const colores = [
    'rgba(255, 0, 0, 0.6)', // Rojo
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(0, 255, 0, 0.6)', // Verde
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 255, 0, 0.6)', // Amarillo
    'rgba(128, 0, 128, 0.6)', // Púrpura
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 165, 0, 0.6)', // Naranja

];

const chartStyles = {
    width: '70%',
    height: '400px',
};

const proyectos = [
    {
        name: 'Intranet',
        id: 1,
        actividades: [
            {
                name: 'Login',
                description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                avance: 0,
                responsable: 1,
                start_date: '25-10-2024',
                end_date: '25-11-2024',
                tasks: [
                    { name: 'Crear un componente de Login', complete: true },
                    { name: 'Añadir REDUX', complete: false },
                ]
            },
            {
                name: 'NOTICIAS',
                description: 'Diseñar una lista de NOTICIAS bonito con ciertas especificaciones',
                avance: 100,
                responsable: 1,
                start_date: '25-10-2024',
                end_date: '25-11-2024',
                tasks: [
                    { name: 'Crear un componente de Login', complete: true },
                    { name: 'Añadir REDUX', complete: true },
                    { name: 'Conectar con la API', complete: true },
                ]
            },
            {
                name: 'GESTOR DE DOCUMENTOS',
                description: 'Diseñar un GESTOR DE DOCUMENTOS igual que Google Drive',
                avance: 50,
                responsable: 1,
                start_date: '25-10-2024',
                end_date: '25-11-2024',
                tasks: [
                    { name: 'Crear un componente de Login', complete: false },
                    { name: 'Añadir REDUX', complete: false },
                    { name: 'Conectar con la API', complete: true },
                    { name: 'Validaciones', complete: false },
                ]
            },
        ],
    },

    {
        name: 'VICTUM RE',
        id: 2,
        actividades: [
            {
                name: 'Login',
                description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                avance: 0,
                responsable: 1,
                start_date: '25-10-2024',
                end_date: '25-11-2024',
                tasks: [
                    { name: 'Crear un componente de Login', complete: true },
                    { name: 'Añadir REDUX', complete: false },
                ]
            },
            {
                name: 'MODULO 1',
                description: 'Diseñar una lista de NOTICIAS bonito con ciertas especificaciones',
                avance: 100,
                responsable: 1,
                start_date: '25-10-2024',
                end_date: '25-11-2024',
                tasks: [
                    { name: 'Crear un componente de Login', complete: true },
                    { name: 'Añadir REDUX', complete: true },
                    { name: 'Conectar con la API', complete: true },
                ]
            },
            {
                name: 'MODULO 2',
                description: 'Diseñar un GESTOR DE DOCUMENTOS igual que Google Drive',
                avance: 50,
                responsable: 1,
                start_date: '25-10-2024',
                end_date: '25-11-2024',
                tasks: [
                    { name: 'Crear un componente de Login', complete: false },
                    { name: 'Añadir REDUX', complete: false },
                    { name: 'Conectar con la API', complete: true },
                    { name: 'Validaciones', complete: false },
                ]
            },
        ],
    },
];

const IndicadorDetalles = () => {
    const location = useLocation();
    const { id, total } = location.state;
    //return <div>{JSON.stringify(id)}</div>;
    const mobile = useBreakpointValue({ base: true, md: false });
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [modal1Open, setModal1Open] = useState(false);

    useEffect(() => {
        searchArray()
    }, [])

    //esto lo sustituimos para llamar a la api con el id, haber si funciona
    // const searchArray = async () => {
    //     setIsLoading(true);
    //     try {
    //         const response = await detalleProjects(id); 
    //         if (response.status) {
    //             setItem(response.data);
    //         } else {
    //             console.error("No se pudo obtener el proyecto");
    //         }
    //     } catch (error) {
    //         console.error("🚀 ~ searchArray ~ error:", error);
    //     } finally {
    //         setIsLoading(false); 
    //     }
    // };

    // if (isLoading) {
    //     return <div>Cargando...</div>;
    // }
    //**************************************************************** */
    const searchArray = () => {
        try {
            // Reemplazar por una llamada a API's
            let finder = proyectos.find(item => item?.id == id)
            setItem(finder)
        } catch (error) {
            console.error("🚀 ~ searchArray ~ error:", error)
        } finally {
            setIsLoading(true)
        }
    }


    const getState = (advance) => {
        if (advance === 0) return { name: 'Sin iniciar', color: '#B6B6B6' }
        if (advance == 100) return { name: 'TERMINADO', color: '#008000' }
        else return { name: 'EN CURSO', color: '#ffa500' }
    }

    const getAdvance = (tasks) => {
        let count = 0
        tasks.map(i => {
            if (i?.complete) count++;
            return count
        })
        return count
    }

    const dataProyectos = {
        labels: proyectos.map(proyecto => proyecto.name),
        datasets: [
            {
                label: 'Avance (%)',
                data: proyectos[0]?.actividades.map(proyecto => proyecto.avance),
                backgroundColor: colores.slice(0, proyectos[0]?.actividades.length),
                borderColor: colores.slice(0, proyectos[0]?.actividades.length).map(color => color.replace('0.6', '1')),
                borderWidth: 1,
            },
        ],
    };

    // Opciones para la gráfica de proyectos
    const optionsProyectos = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    // Preparar datos para la gráfica de efectividad 
    const responsables = {};
    proyectos.forEach(proyecto => {
        for (const [responsable, efectividad] of Object.entries(proyecto.efectividades || {})) {
            if (!responsables[responsable]) {
                responsables[responsable] = Array(proyectos.length).fill(0); // Inicializar con 0 por cada proyecto
            }
            // Asignar la efectividad correspondiente a cada proyecto
            const index = proyectos.indexOf(proyecto);
            responsables[responsable][index] = efectividad;
        }
    });

    const dataEfectividad = {
        labels: proyectos.map(proyecto => proyecto.name),
        datasets: Object.entries(responsables).map(([responsable, efectividades], index) => ({
            label: responsable,
            data: efectividades,
            backgroundColor: colores[index % colores.length],
            borderColor: colores[index % colores.length].replace('0.6', '1'),
            borderWidth: 1,
        })),
    };

    // Opciones para la gráfica de efectividad
    const optionsEfectividad = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Proyectos',
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Efectividad (%)',
                },
            },
        },
    };

    const [itemSelected, setItemSelected] = useState(null)

    const viewDetails = ({ item }) => {
        setItemSelected(item)
        setModal1Open(true)
    }

    if (!isLoading) {
        return (
            <div className='flex items-center justify-center flex-row align-middle'>
                <Spin />
            </div>
        )
    } else return (
        <div style={{ height: '100vh' }}>
            <div className="px-4 sm:px-0 pt-2">
                <h3 className="text-base/7 font-semibold text-gray-900">{item?.name}</h3>
                <p className="mt-0 max-w-2xl text-sm/6 text-gray-500" style={{ width: 180 }}>
                    <Progress percent={total} size="small" />
                </p>
            </div>
            <Tabs isLazy>
                <TabList>
                    <Tab>Resumen</Tab>
                    <Tab>Actividades</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel style={{ backgroundColor: '#B6B6B650' }}>
                        <div className='flex flex-col gap-2'>
                            <div className="sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">Dashboard del proyecto</h3>
                                <p className="mt-0 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-5">
                                <Card bordered={false}>
                                    <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }} prefix={<ArrowUpOutlined />} suffix="%" />
                                </Card>
                                <Card bordered={false}>
                                    <Statistic title="Idle" value={9.3} precision={2} valueStyle={{ color: '#cf1322' }} prefix={<ArrowDownOutlined />} suffix="%" />
                                </Card>
                                <Card bordered={false}>
                                    <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }} prefix={<ArrowUpOutlined />} suffix="%" />
                                </Card>
                                <Card bordered={false}>
                                    <Statistic title="Idle" value={9.3} precision={2} valueStyle={{ color: '#cf1322' }} prefix={<ArrowDownOutlined />} suffix="%" />
                                </Card>
                                <Card bordered={false}>
                                    <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }} prefix={<ArrowUpOutlined />} suffix="%" />
                                </Card>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <Card bordered={false} style={{ width: '70%' }}>
                                    <h3 className="text-base/7 font-semibold text-gray-900">Avances por proyecto</h3>
                                    <div style={{ width: '100%' }}>
                                        <Doughnut data={dataProyectos} options={optionsProyectos} />
                                    </div>
                                </Card>
                                <Card bordered={false} style={{ width: '30%' }}>
                                    <h3 className="text-base/7 font-semibold text-gray-900">Efectividad por responsable por proyecto</h3>
                                    <div style={{ width: '100%' }}>
                                        <Bar data={dataEfectividad} options={optionsEfectividad} />
                                    </div>
                                    <h3 className="text-base/7 font-semibold text-gray-900 pt-4">Tareas activas por responsable por proyecto</h3>
                                    <div style={{ width: '100%' }}>
                                        <Doughnut data={dataProyectos} options={optionsProyectos} />
                                    </div>
                                </Card>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {item?.actividades.map((item) => {
                                let { name, color } = getState(item?.avance)
                                return (
                                    <div class="group relative rounded-lg shadow-lg bg-white" onClick={() => viewDetails({ item })}>
                                        <div className="p-4 flex justify-between">
                                            <div className='flex flex-col'>
                                                <div className='flex flex-row justify-between pb-3'>
                                                    <div style={{ backgroundColor: color + '90' }} className={`inline-flex items-center rounded-xl px-2 py-1 text-xs font-medium`}>
                                                        <div className='pb-0' style={{ fontWeight: 'bold', color: 'white' }}>{name}</div>
                                                    </div>
                                                    <AiOutlineRight />
                                                </div>
                                                <h2 class="text-xl font-semibold text-gray-800">{item?.name}</h2>
                                                <p class="mt-2 text-gray-600">{item?.description}</p>
                                                <div className='flex flex-row flex-wrap items-center rounded p-1 justify-between' style={{ border: '0.5px solid #B6B6B650', maxWidth: 60, color: '#B6B6B680' }}>
                                                    <BsListTask /> {getAdvance(item?.tasks)}/{item?.tasks.length}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <Modal
                title={itemSelected?.name}
                centered
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
                {!itemSelected ? <p>Cargando...</p> :
                    <div>
                        <CheckboxGroup colorScheme='green' defaultValue={[0]}>
                            <div className='flex flex-col'>
                                {itemSelected?.tasks.map((item_) => <Checkbox value={item_?.name}>{item_?.name}</Checkbox>)}
                            </div>
                        </CheckboxGroup>
                    </div>
                }

            </Modal>
        </div>
    );
};

export default IndicadorDetalles;
