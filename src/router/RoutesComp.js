import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/inicio/Home";
import Colaborador from "../pages/colaborador/Colaborador";
import Tramites from "../pages/tramites/Tramites"
import Indicador from "../pages/indicador/Indicador";
import Calendario from "../pages/calendario/Calendario";
import Organizacion from "../pages/colaborador/Organizacion";

import Inicio from "../pages/inicio/Inicio";
// import Noticias from "../pages/noticias";
import noticias from "../pages/noticias.jsx"
import NoticiaDetalle from "../pages/NoticiaDetalle";
import GestorContenidos from "../pages/GestorContenidos";
import PerfilPuesto from "../pages/Puestos/PerfilPuesto";
import UserProfile from "../pages/Puestos/UserProfile"
import PerfilGral from "../pages/perfiles/PerfilGral";
import PerfilesPuesto from "../pages/Puestos/PerfilesPuesto";
import PerfilesPuesto1 from "../pages/Puestos/PerfilesPuesto1";
import Noticias from "../pages/noticias.jsx";




// import GestorContenidos from "../pages/gestor/GestorContenidos";




function RoutesComp() {
    return (
        <Routes>
            {/* <Route index element={<Index />} /> */}
            {/* <Route path="*" element={<Index />} /> */}
            {/* <Route path="*" element={<Home />} /> */}
            {/* <Route path="*" element={<Login />} /> */}
            <Route path="*" element={<Inicio />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Inicio" element={<Inicio/>} />
            <Route path="/Noticias" element={<Noticias/>} />
            <Route path="/Colaborador" element={<Colaborador />} />
            <Route path="/Organizacion" element={<Organizacion/>} />
            {/* <Route path="/Gestor" element={<Gestor />} /> */}
            {/* <Route path="/gestor-contenidos/*" element={<GestorContenidos />} /> */}
            {/* subRoutes */}
            <Route path="/Indicador" element={<Indicador />} />
            <Route path="/Calendario" element={<Calendario />} />
            
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/PerfilPuesto/:id" element={<PerfilPuesto />} />
            <Route path="/PerfilesPuesto1/:id" element={<PerfilesPuesto1/>} />
            <Route path="/PerfilesPuesto" element={<PerfilesPuesto/>} />
            {/* <Route path="/PerfilGral/:id" element={<PerfilGral/>}/> */}
            <Route path="/PerfilGral/:id/:nombreImagen" element={<PerfilGral />} />

            {/* <Route path="/Noticias" element={<Noticias />} /> */}
            {/* <Route path="/noticia/:id" element={<NoticiaDetalle />} /> */}
            <Route path="/gestor/area/proyecto" element={<gestor />}/>
            <Route path="/gestor-contenidos/*" element={<GestorContenidos />} />
            {/* <Route path="/Tramites" element={<Tramites />} /> */}

        </Routes>
    );
}


export default RoutesComp;

