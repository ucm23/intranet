import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar'; 
import VerticalMenu from '../../components/VerticalMenu'; 
import SectionCarousel from '../../components/SectionCarousel'; 
import Formularios from '../../components/Formularios'; 
import GestionSolicitudes from '../../components/GestionSolicitudes'; 
import AgregarSolicitudes from '../../components/AgregarSolicitudes'; 

const Tramites = () => {
    const [selectedSection, setSelectedSection] = useState('gestion'); 

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
                    />
                </div>
                <div style={{ flex: 1, padding: '20px' }}>
                    {selectedSection === 'gestion' ? (
                        <GestionSolicitudes />
                    ) : selectedSection === 'agregarSolicitudes' ? ( 
                        <AgregarSolicitudes />
                    ) : selectedSection === 'soporteTecnico' ? (
                        <Formularios selectedSection="soporteTecnico" />
                    ) : selectedSection === 'solicitudMateriales' ? (
                        <Formularios selectedSection="solicitudMateriales" />
                    ) : selectedSection === 'consultoria' ? (
                        <Formularios selectedSection="consultoria" />
                    ) : (
                        <Formularios selectedSection={selectedSection} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tramites;
