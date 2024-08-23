import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../componentes/Navbar';
import Home from '../pages/inicio/Home';
import Noticias from '../pages/noticias/Noticias';
import Colaborador from '../pages/colaborador/Colaborador';
import Tramites from '../pages/tramites/Tramites';
import Gestor from '../pages/gestor/Gestor';
import Indicador from '../pages/indicador/Indicador';
import Calendario from '../pages/calendario/Calendario';

const RoutesComp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/Colaborador" element={<Colaborador />} />
        <Route path="/Indicador" element={<Indicador />} />
        <Route path="/Tramites" element={<Tramites />} />
        <Route path="/gestor" element={<Gestor />} />
        <Route path="/Calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
};

export default RoutesComp;

