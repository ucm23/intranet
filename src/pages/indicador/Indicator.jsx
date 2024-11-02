import React, { useState, useEffect } from 'react';
import { FaFolder } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { indexProjects } from '../../api/proyectos/projects';


const Indicator = () => {
    const navigate = useNavigate();
    const [proyectos, setProyectos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
// ++aqui hago lo de la bd los proyectos
    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await indexProjects();
                if (response.status) {
                    setProyectos(response.data);
                } else {
                    setError("No se pudieron cargar los proyectos.");
                }
            } catch (err) {
                setError("Ocurrió un error al cargar los proyectos.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);
// ++ hasta aqui llega lo de la bd los proyectos
    const calcularavance = (id) => {
        let suma = 0;
        let item = proyectos.find(i => i?.id === id);
        if (item && Array.isArray(item.actividades)) {
            suma = item.actividades.reduce((acc, actividad) => acc + actividad.avance, 0);
            return (suma / item.actividades.length).toFixed(0);
        }
        return 0; // Retorna 0 si no hay actividades estaba marcando error pq en esta api no hay actividades
    };

    const handleFilePreview = (id, total) => {
        navigate('/indicadorDetalles', { state: { id, total } });
        console.log("proyecto:", id);
    };

    const ProjectList = ({ projects }) => {
        return (
            <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">Proyectos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {projects.map((folder) => {
                        let total = calcularavance(folder.id);
                        return (
                            <div
                                key={folder.id}
                                className="p-3 rounded hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                style={{ backgroundColor: '#B6B6B625' }}
                                onClick={() => handleFilePreview(folder?.id, total)}
                            >
                                <div className="flex items-center space-x-2">
                                    <FaFolder style={{ fontSize: 18 }} className="text-yellow-400" />
                                    <div className="flex-1">
                                        <h3 className="font-normal text-sm text-gray-800 line-clamp-1">{folder?.name}</h3>
                                        <p className="text-sm text-gray-500 pb-0 line-clamp-1">Progreso: {total}%</p>
                                    </div>
                                </div>
                            </div>
                        );
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
                        {isLoading ? (
                            <div className="flex justify-center items-center">
                                <p>Cargando proyectos...</p>
                            </div>
                        ) : error ? (
                            <div className="text-red-500 text-center">{error}</div>
                        ) : (
                            <ProjectList projects={proyectos} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Indicator;
