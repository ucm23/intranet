import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importación de páginas
import Index from './pages/Index';
import Noticias from './pages/Noticias';
import Colaboradores from './pages/Colaboradores';
import TramitesServicios from './pages/TramitesServicios';
import GestorContenidos from './pages/GestorContenidos';
import Indicadores from './pages/Indicadores';
import Calendario from './pages/Calendario';
import NoticiaDetalle from './pages/NoticiaDetalle'; 

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticia/:id" element={<NoticiaDetalle />} /> {/* Nueva ruta para detalles de noticia */}
            <Route path="/colaboradores" element={<Colaboradores />} />
            <Route path="/tramites-servicios" element={<TramitesServicios />} />
            <Route path="/gestor-contenidos" element={<GestorContenidos />} />
            <Route path="/indicadores" element={<Indicadores />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="*" element={<Index />} />
        </Routes>
    );
};

export default App;
