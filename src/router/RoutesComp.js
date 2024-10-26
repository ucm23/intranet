import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/inicio/Home";
import Tramites from "../pages/tramites/Tramites"
import Indicador from "../pages/indicador/Indicador";
import Calendario from "../pages/calendario/Calendario";
import Organizacion from "../pages/colaborador/Organizacion";

import Inicio from "../pages/inicio/Inicio";
import PerfilPuesto from "../pages/Puestos/PerfilPuesto";
import UserProfile from "../pages/Puestos/UserProfile"
import PerfilGral from "../pages/perfiles/PerfilGral";
import PerfilesPuesto from "../pages/Puestos/PerfilesPuesto";
import PerfilesPuesto1 from "../pages/Puestos/PerfilesPuesto1";
import Calendar from "../pages/calendar/Calendar";



function RoutesComp() {
    return (
        <Routes>
            {/* <Route index element={<Index />} /> */}
            {/* <Route path="*" element={<Index />} /> */}
            {/* <Route path="*" element={<Home />} /> */}
            {/* <Route path="*" element={<Login />} /> */}
            <Route path="*" element={<Inicio />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Organizacion" element={<Organizacion />} />
            <Route path="/Indicador" element={<Indicador />} />
            {/* <Route path="/Indicador/:proyectos" element={<Indicador/>} /> */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/PerfilPuesto/:id" element={<PerfilPuesto />} />
            <Route path="/PerfilesPuesto1/:id" element={<PerfilesPuesto1 />} />
            <Route path="/PerfilesPuesto" element={<PerfilesPuesto />} />
            <Route path="/PerfilGral/:id/:nombreImagen" element={<PerfilGral />} />
            <Route path="/gestor/area/proyecto" element={<gestor />} />
           

        </Routes>
    );
}


export default RoutesComp;

