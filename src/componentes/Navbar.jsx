import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import logo from '../img/logo-white.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = ({ children, mobile, backgroundColor = '#001529' }) => {

    const location = useLocation();
    const {
        pathname
    } = location;


    const [isChecked, setIsChecked] = useState(false);
    const [showShadow, setShowShadow] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => window.scrollY > 0 ? setShowShadow(true) : setShowShadow(false)
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  
    const routes = [
        // { id: 1, href: "/*", content: "Inicio" },
        { id: 1, href: "/Home", content: "Inicio", icon: "fa-home" },
        { id: 2, href: "/Noticias1", content: "Noticias", icon: "fa-newspaper" },
        // { id: 3, href: "/Noticias", content: "Noticias", icon: "fa-newspaper" },
        { id: 4, href: "/Organizacion", content: "Organizacion", icon: "fa-users" },
        { id: 5, href: "/colaborador", content: "Colaborador", icon: "fa-users" },
        {
            id: 6, href: "/gestor-contenidos", content: "Gestor de Contenidos", icon: "fa-cogs",
            // subRoutes: [
            //     { id: 6.1, href: "/gestor-contenidos/administracion", content: "Administración" },
            //     { id: 6.2, href: "/gestor-contenidos/desarrollo", content: "Desarrollo de Aplicaciones" },
            //     { id: 6.3, href: "/gestor-contenidos/its", content: "ITS - Peaje y Telepeaje" },
            //     { id: 6.4, href: "/gestor-contenidos/ciberseguridad", content: "CiberSeguridad" },
            //     { id: 6.5, href: "/gestor-contenidos/mesa-ayuda", content: "Mesa de Ayuda" },
            //     { id: 6.6, href: "/gestor-contenidos/soporte-sitio", content: "Soporte en Sitio" },
            // ]
        },
        { id: 7, href: "/tramites-servicios", content: "Trámites y Servicios", icon: "fa-tachometer-alt" },
        { id: 8, href: "/indicadores", content: "Indicadores", icon: "fa-chart-line" },
        { id: 9, href: "/calendario", content: "Calendario de Eventos", icon: "fa-calendar-alt" },

    ]

    const handleCheckBoxChange = ({ target }) => setIsChecked(target.checked);

    if (isChecked) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';


    return (

        <nav className={`navbar navbar-expand-lg ${showShadow ? 'shadow' : ''}`} style={{ backgroundColor: (showShadow || isChecked) ? 'white' : backgroundColor }}>
            <a href="/" className="navbar-brand d-flex align-items-center">
                <img
                    // src={(showShadow || isChecked) ? "../img/logo-white.png" : "../img/LOGO-INTRANET.png"}
                    src={logo}
                    className="logo"
                    alt="Logo"
                    style={{ height: '70px' }}
                />
            </a>
            {/* <input type="checkbox" id="check" onChange={handleCheckBoxChange} className="d-none" /> */}
            <input type="checkbox" id="check" onChange={handleCheckBoxChange} />
            <label htmlFor="check" className="checkbtn">
                <i className={`${isChecked ? "fa fa-times" : "fas fa-bars"} checkbtn-icons`} style={{ fontSize: '10px' }}></i>
            </label>
            <div className={`collapse navbar-collapse ${isChecked ? 'show' : ''}`} id="navbarNav">
                {/* <ul className="navbar-nav ml-auto"> */}
                <ul style={{ paddingLeft: 0 }}>
                    {/* {routes.map(({ id, href, content, icon, subRoutes }) => ( */}
                    {routes.map(({ id, href, content, icon, hasSubMenu, onlyLink, subRoutes }) => (
                        <li
                            className="nav-item position-relative"
                            key={`routes-${id}-${href}`}
                            onMouseEnter={() => id === 5 && setShowSubMenu(true)}
                            onMouseLeave={() => setShowSubMenu(false)}
                        >
                            <a
                                href={href}
                                className={`nav-link ${href === pathname ? "active" : ""}`}
                                style={{
                                    padding: '10px 15px',
                                    color: isChecked ? '#001529' : 'white',
                                    transition: 'color 0.3s, background-color 0.3s',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    // alignItems: 'center',
                                    fontSize: '11px',
                                    position: 'relative',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <i className={`fas ${icon}`} style={{ marginRight: '8px', color: isChecked ? '#001529' : 'white' }}></i>
                                {content}
                                <span className="indicator"></span>
                            </a>

                            
                            {subRoutes && showSubMenu && (
                                <ul className="submenu">
                                    {subRoutes.map(({ id, href, content }) => (
                                        <li key={`subroutes-${id}`}>
                                            <a href={href} className="submenu-link">{content}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <style>{`
               
            `}</style>
        </nav>
    );
}


export default Navbar
