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
                { name: 'Login', avance: 50, responsable: 'Ulises Cano' },
                { name: 'Inicio', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Noticias', avance: 90, responsable: 'Ulises Cano' },
                { name: 'Organigrama', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Gestor de Documentos', avance: 80, responsable: 'Ulises Cano' },
                { name: 'Calendario', avance: 80, responsable: 'Ulises Cano' },
                { name: 'Indicadores', avance: 90, responsable: 'Adriana Castillo' },
                { name: 'BD', avance: 90, responsable: 'Gilberto López' },
            ],
        },
        {
            name: 'Victum RE',
            id: 2,
            avance: 40,
            actividades: [
                { name: 'Módulo 1', avance: 100, responsable: 'Gilberto López' },
                { name: 'Módulo 2', avance: 100, responsable: 'Gilberto López' },
                { name: 'Módulo 2', avance: 30, responsable: 'Gilberto López' },
            ],
        },
        {
            name: 'Geo-Truck',
            id: 3,
            avance: 40,
            actividades: [
                { name: 'Módulo 1', avance: 100, responsable: 'Ulises Cano' },
                { name: 'Módulo 2', avance: 100, responsable: 'Ulises Cano' },
                { name: 'Módulo 2', avance: 40, responsable: 'Ulises Cano' },
            ],
        },
        {
            name: 'Victum SGA',
            id: 4,
            avance: 60,
            actividades: [
                { name: 'Módulo 1', avance: 60, responsable: 'Gilberto López' },
                { name: 'Módulo 2', avance: 60, responsable: 'Gilberto López' },
            ],
        },
        {
            name: 'Victum DESK',
            id: 5,
            avance: 60,
            actividades: [
                { name: 'Módulo 1', avance: 60, responsable: 'Gilberto López' },
                { name: 'Módulo 2', avance: 60, responsable: 'Gilberto López' },
            ],
        },
        {
            name: 'Victum POS CS',
            id: 6,
            avance: 60,
            actividades: [
                { name: 'Módulo 1 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Módulo 1 Funcionalidad', avance: 0, responsable: 'Adriana Castillo' },
                { name: 'Módulo 2 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Módulo 2 Funcionalidad', avance: 0, responsable: 'Adriana Castillo' },
                { name: 'Módulo 3 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Módulo 3 Funcionalidad', avance: 0, responsable: 'Adriana Castillo' },
            ],
        },
        {
            name: 'Backoffice',
            id: 7,
            avance: 60,
            actividades: [
                { name: 'Módulo 1 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Módulo 1 Funcionalidad', avance: 10, responsable: 'Adriana Castillo' },
                { name: 'Módulo 2 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Módulo 2 Funcionalidad', avance: 10, responsable: 'Adriana Castillo' },
                { name: 'Módulo 3 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo' },
                { name: 'Módulo 3 Funcionalidad', avance: 10, responsable: 'Adriana Castillo' },
                { name: 'Módulo 3 Interfaz Grafica', avance: 0, responsable: 'Adriana Castillo' },
                { name: 'Módulo 3 Funcionalidad', avance: 0, responsable: 'Adriana Castillo' },
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
        suma = (suma / item.actividades.length).toFixed(2)
        return suma
    }
    const handleFilePreview = (folder) => {
        navigate('/indicadorDetalles', { state: folder });
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
                                onClick={() => handleFilePreview(folder)}
                                onDoubleClick={() => {
                                    //handleFilePreview({ ...folder, type: 'folder_projs' })
                                    // onProjectSelect(folder)
                                }}
                            >
                                <div className="flex items-center space-x-2">
                                    <FaFolder style={{ fontSize: 18 }} className="text-yellow-400" />
                                    <div className="flex-1">
                                        <h3 className="font-normal text-sm text-gray-800 line-clamp-1">{folder?.name}</h3>
                                        <p className="text-sm text-gray-500 pb-0 line-clamp-1">{total} total</p>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-0 pb-0 mt-8" style={{ paddingLeft: 8 }}>Gestor de archivos</h2>
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
