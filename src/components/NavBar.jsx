import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = ({ mobile, backgroundColor = '#001529' }) => {
    const location = useLocation();
    const { pathname } = location;

    const [isChecked, setIsChecked] = useState(false);
    const [showShadow, setShowShadow] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowShadow(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isChecked ? 'hidden' : 'auto';
    }, [isChecked]);

    const routes = [
        { id: 1, href: "/", content: "Inicio", icon: "fa-home" },
        { id: 2, href: "/noticias", content: "Noticias", icon: "fa-newspaper" },
<<<<<<< HEAD
        // { id: 3, href: "/colaboradores", content: "Colaboradores", icon: "fa-users" },
        { id: 3, href: "/Organizacion", content: "Colaboradores", icon: "fa-users" },
        // { id: 3, href: "/colaborador", content: "Colaboradores", icon: "fa-users" },
        // { id: 4, href: "/tramites-servicios", content: "Trámites y Servicios", icon: "fa-tachometer-alt" },
        {
            id: 5, href: "/gestor-contenidos", content: "Gestor de Contenidos", icon: "fa-cogs", subRoutes: [
                { id: 5.1, href: "/gestor-contenidos/administracion", content: "Administración" },
                { id: 5.2, href: "/gestor-contenidos/recursosHumanos", content: "Recursos Humanos" },
                { id: 5.3, href: "/gestor-contenidos/areaItsTelepeaje", content: "Área ITS y Telepeaje" },
                { id: 5.4, href: "/gestor-contenidos/desarrolloAplicaciones", content: "Desarrollo de Aplicaciones" },
                { id: 5.5, href: "/gestor-contenidos/mesaAyuda", content: "Mesa de Ayuda" },
            ]
        },
        { id: 8, href: "/tramites-servicios", content: "Trámites y Servicios", icon: "fa-tachometer-alt" },
        { id: 6, href: "/calendar", content: "Calendario de Eventos", icon: "fa-calendar-alt" },
        { id: 7, href: "/Indicador", content: "Indicadores", icon: "fa-chart-line" },

=======
        { id: 3, href: "/colaboradores", content: "Colaboradores", icon: "fa-users" },
        { id: 4, href: "/tramites", content: "Trámites y Servicios", icon: "fa-tachometer-alt" },
        { id: 5, href: "/gestor-contenidos", content: "Gestor de Contenidos", icon: "fa-cogs", subRoutes: [
            { id: 5.1, href: "/gestor-contenidos/administracion", content: "Administración" },
            { id: 5.2, href: "/gestor-contenidos/recursosHumanos", content: "Recursos Humanos" },
            { id: 5.3, href: "/gestor-contenidos/areaItsTelepeaje", content: "Área ITS y Telepeaje" },
            { id: 5.4, href: "/gestor-contenidos/desarrolloAplicaciones", content: "Desarrollo de Aplicaciones" },
            { id: 5.5, href: "/gestor-contenidos/mesaAyuda", content: "Mesa de Ayuda" },
        ]},
        { id: 6, href: "/indicadores", content: "Indicadores", icon: "fa-chart-line" },
        { id: 7, href: "/calendario", content: "Calendario de Eventos", icon: "fa-calendar-alt" }
>>>>>>> cano
    ];

    const handleCheckBoxChange = ({ target }) => setIsChecked(target.checked);

    return (
<<<<<<< HEAD
        <nav className={`navbar navbar-expand-lg ${showShadow ? 'shadow' : ''}`} style={{ backgroundColor: (showShadow || isChecked) ? 'white' : backgroundColor, overflowX: 'hidden',width: '155vw' }}>
            <a href="/" className="navbar-brand d-flex align-items-center">
                <img
                    src={(showShadow || isChecked) ? "/img/LOGO-INTRANET.png" : "/img/LOGO-INTRANET.png"}
                    className="logo"
                    alt="Logo"
                    // style={{ height: '50px' }} 
                    style={{ height: '69px' }}
                />
            </a>
            <input type="checkbox" id="check" onChange={handleCheckBoxChange} className="d-none" />
=======
        <nav className={`navbar navbar-expand-lg ${showShadow ? 'shadow' : ''}`} style={{ backgroundColor: (showShadow || isChecked) ? 'white' : backgroundColor }}>
            <a href="/" className="navbar-brand d-flex align-items-center">
                <img 
                    src={(showShadow || isChecked) ? "/img/LOGO-INTRANET.png" : "/img/LOGO-INTRANET.png"} 
                    className="logo" 
                    alt="Logo" 
                    style={{ height: '50px' }} 
                />
            </a>
            <input type="checkbox" id="check" onChange={handleCheckBoxChange} className="d-none" /> 
>>>>>>> cano
            <label htmlFor="check" className="checkbtn">
                <i className={`${isChecked ? "fa fa-times" : "fas fa-bars"} checkbtn-icons`} style={{ fontSize: '24px' }}></i>
            </label>
            <div className={`collapse navbar-collapse ${isChecked ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {routes.map(({ id, href, content, icon, subRoutes }) => (
<<<<<<< HEAD
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
                                    // padding: '10px 15px',
                                    padding: '10px ',
                                    color: isChecked ? '#001529' : 'white',
                                    transition: 'color 0.3s, background-color 0.3s',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '13px',
                                    position: 'relative'
                                }}
                            >
                                <i className={`fas ${icon}`} style={{ marginRight: '8px', color: isChecked ? '#001529' : 'white' }}></i>
=======
                        <li 
                            //className="nav-item position-relative" 
                            key={`routes-${id}-${href}`} 
                            //onMouseEnter={() => id === 5 && setShowSubMenu(true)} 
                            //onMouseLeave={() => setShowSubMenu(false)}
                        >
                            <a 
                                href={href} 
                                //className={`nav-link ${href === pathname ? "active" : ""}`} 
                                style={{
                                    padding: '10px 15px',
                                    //color: isChecked ? '#001529' : 'white', 
                                    //transition: 'color 0.3s, background-color 0.3s',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '16px',
                                    position: 'relative'
                                }}
                            >
                                <i className={`fas ${icon}`} style={{ marginRight: '8px', color: 'white' }}></i>
>>>>>>> cano
                                {content}
                                {subRoutes && <i className="fas fa-caret-down ml-2"></i>}
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
<<<<<<< HEAD
            <style>{`
                .navbar {
                    padding: 0 15px;
                    display: flex;
                     flex-wrap: nowrap;
                     width: 100%;
                      height: 85px;
                 }
                 .nav-link {
                     color: white;
                 }

                 .nav-link::after {
                     content: '';
                     position: absolute;
                     bottom: 10px;
                     left: 0;
                     width: 0;
                     height: 2px;
                     background-color: red;
                     transition: width 0.3s ease;
                 }

                 .nav-link.active::after {
                    width: 95%; /* Esto hace que el subrayado aparezca en el elemento activo */
                 }

                 .nav-link:hover {
                     color: orange;
                     background-color: transparent;
                 }
                 .nav-link.active {
                     color: orange;
                     background-color: transparent;
                 }
                 .nav-link:hover .indicator {
                     position: absolute;
                     bottom: 10px;
                     left: 0;
                    width: 95%;
                     height: 2px;
                     background-color: orange;
                 }
                 .shadow {
                     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                 }
                 .checkbtn {
                     display: none;
                 }
                 .submenu {
                     position: absolute;
                     top: 100%;
                     left: 0;
                     background-color: #001529;
                    width: 130%;
                     list-style: none;
                     padding: 0;
                     margin: 0;
                     border: 1px solid #ddd;
                     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                     z-index: 101; /* Asegura que el submenú esté encima de otros elementos */
                 }
                 .submenu-item {
                     padding: 5px 20px;
                 }
                 .submenu-link {
                     color: white;
                     fontSize: '5px'
                     text-decoration: none;
                     display: block;
                 }
                 .submenu-link:hover {
                     background-color: #1890ff;
                     width: 100%;
                 }
                 @media (max-width: 991px) {
                     .navbar-collapse {
                         background-color: white;
                         position: absolute;
                         top: 100%;
                         left: 0;
                         right: 0;
                     }
                     .checkbtn {
                         display: block;
                     }
                     .nav-link {
                         color: #001529;
                     }
                     .nav-link.active {
                         color: #001529;
                         background-color: transparent;
                     }
                     .fa {
                         color: #001529;
                     }
                 }

               
             `}</style>
        </nav>
    );
}
=======
       
        </nav>
    );
}

>>>>>>> cano
export default NavBar;
