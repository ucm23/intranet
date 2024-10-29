import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { FaFolder, FaFileImage, FaFilePowerpoint, FaFilePdf, FaFileWord, FaFileExcel, FaSpinner } from "react-icons/fa";
import {
    AiOutlineFile, AiOutlineDownload, AiOutlineDelete, AiOutlineShareAlt, AiOutlineClose, AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineLeft, AiOutlineRight
} from "react-icons/ai";
import { FaClockRotateLeft } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import Navbar from '../../componentes/Navbar';
import GraficaAvancesProyecto from './GraficaAvancesProyecto';
import { useBreakpointValue } from '@chakra-ui/react';
import Proyecto from './Proyecto';
import { useNavigate } from 'react-router-dom';

const Indicator = () => {
    const navigate = useNavigate();
    const [proyectos, setProyectos] = useState([
        {
            name: 'Intranet',
            id: 1,
            avance: 0,
            actividades: [
                { 
                    name: 'Login',
                    description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                    avance: 50, 
                    responsable: 1,
                    start_date: '25-10-2024',
                    end_date: '25-11-2024',
                    notes: [
                        'Crear un componente de Login',
                        'Añadir REDUX',
                        'Conectar con la API',
                        'Validaciones'
                    ]
                },
                { 
                    name: 'Login 1',
                    description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                    avance: 50, 
                    responsable: 1,
                    start_date: '25-10-2024',
                    end_date: '25-11-2024',
                    notes: [
                        'Crear un componente de Login',
                        'Añadir REDUX',
                        'Conectar con la API',
                        'Validaciones'
                    ]
                },
                { 
                    name: 'Login 5',
                    description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                    avance: 50, 
                    responsable: 1,
                    start_date: '25-10-2024',
                    end_date: '25-11-2024',
                    notes: [
                        'Crear un componente de Login',
                        'Añadir REDUX',
                        'Conectar con la API',
                        'Validaciones'
                    ]
                },
                { 
                    name: 'Login 8',
                    description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                    avance: 50, 
                    responsable: 1,
                    start_date: '25-10-2024',
                    end_date: '25-11-2024',
                    notes: [
                        'Crear un componente de Login',
                        'Añadir REDUX',
                        'Conectar con la API',
                        'Validaciones'
                    ]
                },
                { 
                    name: 'Login 10',
                    description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                    avance: 50, 
                    responsable: 1,
                    start_date: '25-10-2024',
                    end_date: '25-11-2024',
                    notes: [
                        'Crear un componente de Login',
                        'Añadir REDUX',
                        'Conectar con la API',
                        'Validaciones'
                    ]
                },
                { 
                    name: 'Login 10',
                    description: 'Diseñar un formulario bonito con ciertas validaciones de usuario',
                    avance: 50, 
                    responsable: 1,
                    start_date: '25-10-2024',
                    end_date: '25-11-2024',
                    notes: [
                        'Crear un componente de Login',
                        'Añadir REDUX',
                        'Conectar con la API',
                        'Validaciones'
                    ]
                },
                

            ],
        },
    ]);

    const calcularavance = (id) => {
        let suma = 0
        let item = proyectos.find(i => i?.id == id)
        item.actividades.map(i => {
            suma += i?.avance
            return suma
        })
        console.log(suma);
        suma = (suma / item.actividades.length).toFixed(0)
        return suma
    }
    const handleFilePreview = (id, total) => {
        navigate('/indicadorDetalles', { state: {id, total} });
    }
    const ProjectList = ({ isLoading, projects, onProjectSelect, project_id }) => {
        return (
            <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">Proyectos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {projects.map((folder) => {
                        let total = calcularavance(folder.id)
                        return (
                            <div
                                key={folder.id}
                                className="p-3 rounded hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                style={{ backgroundColor: '#B6B6B625' }}
                                onClick={() => handleFilePreview(folder?.id, total)}
                                onDoubleClick={() => {
                                    //handleFilePreview({ ...folder, type: 'folder_projs' })
                                    // onProjectSelect(folder)
                                }}
                            >
                                <div className="flex items-center space-x-2">
                                    <FaFolder style={{ fontSize: 18 }} className="text-yellow-400" />
                                    <div className="flex-1">
                                        <h3 className="font-normal text-sm text-gray-800 line-clamp-1">{folder?.name}</h3>
                                        <p className="text-sm text-gray-500 pb-0 line-clamp-1">Progreso: {total}%</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="mx-auto pr-4 pb-8 bg-white">
            <div className="flex" style={{ width: '100%' }}>
                <div className="mx-auto pb-8 content-scroll-auto" style={{ flex: '1' }}>
                    <div className="flex justify-between items-center mb-2 pl-6 mt-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-0 pb-0 mt-8">Gestor de archivos</h2>
                    </div>
                    <div className="p-4 pt-0 pb-0">
                        <ProjectList
                            // isLoading={isLoading} 
                            projects={proyectos}
                        // onProjectSelect={handleProjectSelect} 
                        // project_id={selectedProject?.id}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Indicator;
