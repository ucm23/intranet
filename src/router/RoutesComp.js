import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/inicio/Home";
import Colaborador from "../pages/colaborador/Colaborador";
import Indicador from "../pages/indicador/Indicador";
import Calendario from "../pages/calendario/Calendario";
import Organizacion from "../pages/colaborador/Organizacion";
import Perfilceo from "../pages/perfiles/Perfilceo";
import Perfilceo1 from "../pages/perfiles/Perfilceo1";
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
import PerfilIA1 from "../pages/perfiles/PerfilIA1";
import PerfilIA2 from "../pages/perfiles/PerfilIA2";
import PerfilBeca1 from "../pages/perfiles/PerfilBeca1";
import PerfilBeca2 from "../pages/perfiles/PerfilBeca2";
import PerfilBeca3 from "../pages/perfiles/PerfilBeca3";
import PerfilInfra from "../pages/perfiles/PerfilInfra";
import PerfilCapacitacion from "../pages/perfiles/PerfilCapacitacion";
import Perfilits1 from "../pages/perfiles/Perfilits1";
import Perfilits2 from "../pages/perfiles/Perfilits2";
import Inicio from "../pages/inicio/Inicio";
import Noticias from "../pages/Noticias";
import NoticiaDetalle from "../pages/NoticiaDetalle";
import Gestor from "../pages/gestor/Gestor"
import Tramites from "../pages/tramites/Tramites"

function RoutesComp() {
    return (
        <Routes>
            {/* <Route  element={<Index />} /> */}
            {/* <Route path="*" element={<Index />} /> */}
            {/* <Route path="*" element={<Home />} /> */}
            {/* <Route path="*" element={<Login />} /> */}
            <Route path="*" element={<Inicio />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Inicio" element={<Inicio/>} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticia/:id" element={<NoticiaDetalle />} />
            <Route path="/Colaborador" element={<Colaborador />} />
            <Route path="/Organizacion" element={<Organizacion/>} />
            <Route path="/Gestor" element={<Gestor />} /> 
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
            <Route path="/PerfilIA1" element={<PerfilIA1/>}/>
            <Route path="/PerfilIA2" element={<PerfilIA2/>}/>
            <Route path="/PerfilBeca1" element={<PerfilBeca1/>}/>
            <Route path="/PerfilBeca2" element={<PerfilBeca2/>}/>
            <Route path="/PerfilBeca3" element={<PerfilBeca3/>}/>
            <Route path="/PerfilInfra" element={<PerfilInfra/>}/>
            <Route path="/PerfilCapacitacion" element={<PerfilCapacitacion/>}/>
            <Route path="/Perfilits1" element={<Perfilits1/>}/>
            <Route path="/Perfilits2" element={<Perfilits2/>}/>
            <Route path="/gestor-contenidos/*" element={<Gestor/>} /> 
        </Routes>
    );
}


export default RoutesComp;

