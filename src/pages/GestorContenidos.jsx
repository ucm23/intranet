import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Ajusta la ruta si es necesario
import TablaContenidos from '../components/TablaContenidos'; // Importa la tabla
import Footer from '../components/Footer'; // Importa el Footer

const contenidoSecciones = {
    administracion: 'Contenido para la sección de Administración.',
    desarrollo: 'Contenido para la sección de Desarrollo de Aplicaciones.',
    its: 'Contenido para la sección de ITS - Peaje y Telepeaje.',
    ciberseguridad: 'Contenido para la sección de CiberSeguridad.',
    mesaAyuda: 'Contenido para la sección de Mesa de Ayuda.',
    soporteSitio: 'Contenido para la sección de Soporte en Sitio.',
};

const GestorContenidos = () => {
    const location = useLocation();
    const path = location.pathname.split('/').pop(); // Obtiene la última parte de la ruta

    const descripcion = contenidoSecciones[path] || 'sección para ver el contenido.';

    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <h1>Gestor de Contenidos</h1>
                <p>{descripcion}</p>
                <TablaContenidos /> {/* Muestra la tabla de contenidos */}
            </div>
            <Footer /> {/* Añade el Footer al final del contenido */}
        </div>
    );
}

export default GestorContenidos;
