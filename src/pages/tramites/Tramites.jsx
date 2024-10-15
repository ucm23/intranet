import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar';
import VerticalMenu from '../../components/VerticalMenu'; // Importa el menú vertical
import SectionCarousel from '../../components/SectionCarousel'; // Importa el carrusel
import Formularios from '../../components/Formularios'; // Importa los formularios
import GestionSolicitudes from '../../components/GestionSolicitudes'; // Importa el componente de gestión de solicitudes

const Tramites = () => {
    const [selectedSection, setSelectedSection] = useState('vacaciones'); // Estado para la sección seleccionada

    // Define las imágenes, título y descripción para el carrusel
    const carouselImages = [
        '/imgNoticias/proyecto3.jpg',
        '/imgNoticias/proyecto2.jpg',
        '/imgNoticias/proyecto1.jpg',
    ];

    const sectionTitle = "Bienvenido a la Sección de Trámites y Servicios";
    const sectionDescription = "Aquí puedes gestionar tus solicitudes de vacaciones, permisos y más.";

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar backgroundColor="#001529" />
            {/* Sección del carrusel */}
            <SectionCarousel 
                images={carouselImages} 
                sectionTitle={sectionTitle} 
                sectionDescription={sectionDescription} 
            />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                {/* El menú vertical */}
                <div style={{ minWidth: '200px', maxWidth: '250px', flex: '0 0 auto' }}>
                    <VerticalMenu 
                        selectedSection={selectedSection} 
                        setSelectedSection={setSelectedSection} 
                    />
                </div>
                {/* Contenido principal */}
                <div style={{ flex: 1, padding: '20px' }}>
                    {/* Renderizado condicional de contenido según la sección seleccionada */}
                    {selectedSection === 'gestion' ? (
                        <GestionSolicitudes />
                    ) : (
                        <Formularios selectedSection={selectedSection} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tramites;
