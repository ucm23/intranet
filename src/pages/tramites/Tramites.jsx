import React, { useState } from 'react';
import { FaUmbrellaBeach, FaUserClock, FaPlusCircle } from 'react-icons/fa'; // Importar los íconos
import Navbar from '../../componentes/Navbar'; 
import VerticalMenu from '../../components/VerticalMenu'; 
import SectionCarousel from '../../components/SectionCarousel'; 
import Formularios from '../../components/Formularios'; 
import GestionSolicitudes from '../../components/GestionSolicitudes'; 
import AgregarSolicitudes from '../../components/AgregarSolicitudes'; 
import GestionTiposSolicitudes from '../../components/GestionTiposSolicitudes'; // Importar el componente de gestionar tipos de solicitudes

const Tramites = () => {
    const [selectedSection, setSelectedSection] = useState('gestion');

    // Definir secciones de trámites y servicios dinámicamente
    const tramitesSections = [
        { id: 'vacaciones', title: 'Vacaciones', icon: <FaUmbrellaBeach /> },
        { id: 'permisos', title: 'Permisos', icon: <FaUserClock /> },
        // Agregar más trámites aquí
    ];

    const serviciosSections = [
        { id: 'nuevoServicio', title: 'Nuevo Servicio', icon: <FaPlusCircle /> },
        // Agregar más servicios aquí
    ];

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
            <SectionCarousel 
                images={carouselImages} 
                sectionTitle={sectionTitle} 
                sectionDescription={sectionDescription} 
            />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                <div style={{ minWidth: '200px', maxWidth: '250px', flex: '0 0 auto' }}>
                    <VerticalMenu 
                        selectedSection={selectedSection} 
                        setSelectedSection={setSelectedSection} 
                        tramitesSections={tramitesSections}
                        serviciosSections={serviciosSections}
                    />
                </div>
                <div style={{ flex: 1, padding: '20px' }}>
                    {selectedSection === 'gestion' ? (
                        <GestionSolicitudes />
                    ) : selectedSection === 'agregarSolicitudes' ? ( 
                        <AgregarSolicitudes />
                    ) : selectedSection === 'administrarSolicitudes' ? ( 
                        <GestionTiposSolicitudes />  // Mostrar el componente cuando se selecciona "Administrar Solicitudes"
                    ) : (
                        <Formularios selectedSection={selectedSection} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tramites;
