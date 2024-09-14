import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Index from "../pages/index/Index1";
import '../styles/styles.css';
import Home from "../pages/inicio/Home";
import Noticias from "../pages/noticias/Noticias";
import Colaborador from "../pages/colaborador/Colaborador";
import Tramites from "../pages/tramites/Tramites"
import Gestor from "../pages/gestor/Gestor";
import Indicador from "../pages/indicador/Indicador";
import Calendario from "../pages/calendario/Calendario";
import Organizacion from "../pages/colaborador/Organizacion";
import Perfilceo from "../pages/perfiles/Perfilceo";
import Perfilceo1 from "../pages/perfiles/Perfilceo1";
import { Link } from 'react-router-dom';
import Perfildev1 from "../pages/perfiles/Perfildev1";
import Perfildev2 from "../pages/perfiles/Perfildev2";
import Perfildev3 from "../pages/perfiles/Perfildev3";
import Perfilmesa1 from "../pages/perfiles/Perfilmesa1";
import Perfilconta1 from "../pages/perfiles/Perfilconta1";
import Perfiljuridico from "../pages/perfiles/Perfiljuridico";
import Perfilhumano from "../pages/perfiles/Perfilhumano";
import Perfilcalidad from "../pages/perfiles/Perfilcalidad";
import Perfilconta from "../pages/perfiles/Perfilconta";
import Perfilsap1 from "../pages/perfiles/Perfilsap1";
import Perfilsap2 from "../pages/perfiles/Perfilsap2";
import NoticiaDetalle from '../pages/noticias/NoticiaDetalle';
// import GestorContenidos from "../pages/gestor/GestorContenidos";




function RoutesComp() {
    return (
        <Routes>
            {/* <Route index element={<Index />} /> */}
            {/* <Route path="*" element={<Index />} /> */}
            <Route path="*" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Noticias" element={<Noticias />} />
            <Route path="/noticia/:id" element={<NoticiaDetalle />} />
            <Route path="/Colaborador" element={<Colaborador />} />
            <Route path="/Organizacion" element={<Organizacion/>} />
            {/* <Route path="/Gestor" element={<Gestor />} /> */}
            {/* <Route path="/gestor-contenidos/*" element={<GestorContenidos />} /> */}
            {/* subRoutes */}
            <Route path="/gestor/area/proyecto" element={<gestor />}/>
            <Route path="/Tramites" element={<Tramites />} />
            <Route path="/Indicador" element={<Indicador />} />
            <Route path="/Calendario" element={<Calendario />} />
            <Route path="/Perfilceo" element={<Perfilceo/>} />
            <Route path="/Perfilceo1" element={<Perfilceo1/>} />
            <Route path="/Perfiljuridico" element={<Perfiljuridico/>} />
            <Route path="/perfildev1" element={<Perfildev1/>} />
            <Route path="/Perfildev2" element={<Perfildev2/>} />
            <Route path="/Perfildev3" element={<Perfildev3/>} />
            <Route path="/Perfilmesa1" element={<Perfilmesa1/>} />
            <Route path="/Perfilconta1" element={<Perfilconta1/>} />
            <Route path="/Perfilhumano" element={<Perfilhumano/>} />
            <Route path="/Perfilcalidad" element={<Perfilcalidad/>} />
            <Route path="/Perfilconta" element={<Perfilconta/>} />
            <Route path="/Perfilsap1" element={<Perfilsap1/>}/>
            <Route path="/Perfilsap2" element={<Perfilsap2/>}/>

            
        </Routes>
    );
}


export default RoutesComp;

