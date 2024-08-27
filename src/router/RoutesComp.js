import { Route, Routes } from "react-router-dom";
import Index from "../pages/index/Index";
import '../styles/styles.css';
import Home from "../pages/inicio/Home";
import Noticias from "../pages/noticias/Noticias";
import Colaborador from "../pages/colaborador/Colaborador";
import Tramites from "../pages/tramites/Tramites"
import Gestor from "../pages/gestor/Gestor";
import Indicador from "../pages/indicador/Indicador";
import Calendario from "../pages/calendario/Calendario";


function RoutesComp() {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path="*" element={<Index />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Noticias" element={<Noticias />} />
            <Route path="/Colaborador" element={<Colaborador />} />
            <Route path="/Tramites" element={<Tramites />} />
            <Route path="/Gestor" element={<Gestor />} />
            <Route path="/Indicador" element={<Indicador />} />
            <Route path="/Calendario" element={<Calendario />} />

        </Routes>
    );
}


export default RoutesComp;

