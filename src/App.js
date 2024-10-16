
import { useEffect, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './styles/styles.css'
import { Route, Routes } from "react-router-dom";
import Index from "./pages/landing/Index";
//import Noticies from './pages/landing/Noticies';
import NewsList from './pages/noticies/NewsList';
import Inicio from './pages/inicio/Inicio';
import Home from './pages/inicio/Home';
import NoticiaDetalle from './pages/NoticiaDetalle';
import Colaborador from './pages/colaborador/Colaborador';
import Collaborator from './pages/colaborador/Collaborator';
import Organizacion from './pages/colaborador/Organizacion';
import Gestor from './pages/gestor/Gestor';
import Tramites from './pages/tramites/Tramites';
import Indicadores from './pages/Indicadores';
import Perfilceo from './pages/perfiles/Perfilceo';
import store from './redux/store';
import Context from './redux/Context';
import NavBarVertical from './components/NavBarVertical';
import Manager from './pages/gestor/Manager';
import Finder from './pages/gestor/Finder';
import NewDetails from './pages/noticies/NewDetails'
import AddNews from './pages/noticies/AddNews';

const LayoutWithNavBar = ({ menu }) => (
    <NavBarVertical menu={menu}>
        <Outlet />
    </NavBarVertical>
);

function App() {
    const initialTokenState = localStorage.getItem('userToken') === 'true';
    const [userToken, setUserToken] = useState(initialTokenState);

    const authContext = useMemo(() => {
        return {
            signIn: () => {
                setUserToken(true);
                localStorage.setItem('userToken', 'true');
            },
            signUp: () => {
                setUserToken(true);
                localStorage.setItem('userToken', 'true');
            },
            signOut: () => {
                setUserToken(false);
                localStorage.removeItem('userToken');
            },
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('userToken', userToken.toString());
    }, [userToken]);

    return (
        <Context.Provider value={authContext}>
            <Provider store={store}>
                {!userToken ?
                    <Routes>
                        <Route path="/" index element={<Index />} />
                        {/*<Route path="/noticies" element={<Noticies />} />*/}
                    </Routes> :
                    <Routes>
                        <Route path="*" element={<Inicio />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Inicio" element={<Inicio />} />


                        <Route path="/noticia/:id" element={<NoticiaDetalle />} />
                        <Route path="/collaborator" element={<Collaborator />} />
                        <Route path="/Organizacion" element={<Organizacion />} />
                        <Route path="/files" element={<Manager />} />
                        <Route path="/finder" element={<Finder />} />
                        <Route path="/gestor" element={<Gestor />} />
                        <Route path="/docs" element={<Tramites />} />
                        <Route path="/ind" element={<Indicadores />} />
                        <Route path="/Perfilceo" element={<Perfilceo />} />
                        <Route path="/gestor-contenidos/*" element={<Gestor />} />

                        <Route element={<LayoutWithNavBar menu={true} />}>
                            <Route path="/newslist" element={<NewsList />} />
                        </Route>
                        <Route path="/newDetails" element={<NewDetails page={'newslist'} />} />
                        <Route path="/addnews" element={<AddNews page={'newslist'} />} />

                        
                    </Routes>
                }
            </Provider>
        </Context.Provider>
    );
}

export default App;
