import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'; //
import TablaContenidos from '../components/TablaContenidos'; // Importa la tabla
import Footer from '../components/Footer'; // Importa el Footer

const contenidoSecciones = {
    administracion: 'Contenido para la sección de Administración.',
    recursosHumanos: 'Contenido para la sección de Recursos Humanos.',
    areaItsTelepeaje: 'Contenido para la sección de Área ITS y Telepeaje.',
    desarrolloAplicaciones: 'Contenido para la sección de Desarrollo de Aplicaciones.',
    mesaAyuda: 'Contenido para la sección de Mesa de Ayuda.',
};

const GestorContenidos = () => {
    const location = useLocation();
    const path = location.pathname.split('/').pop(); // Obtiene la última parte de la ruta

    console.log('Valor de path:', path); // Imprime el valor de path en la consola solo lo hice para comprobar

    const descripcion = contenidoSecciones[path] || 'Sección para ver el contenido.';

    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <h1>Gestor de Contenidos</h1>
                <p>{descripcion}</p>
                <TablaContenidos /> {/* Pasa solo el componente TablaContenidos */}
            </div>
            <Footer /> {/* Añade el Footer al final del contenido */}
        </div>
    );
}

export default GestorContenidos;
