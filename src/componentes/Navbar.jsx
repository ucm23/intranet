import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import logo from '../img/logo-white.png';


const Navbar = ({ children, mobile }) => {
    
    const location = useLocation();
    const {
        pathname
    } = location;

    const [isChecked, setIsChecked] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => window.scrollY > 0 ? setShowShadow(true) : setShowShadow(false)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

 
    const SubMenuGestor = {
        name: "Gestor de Contenidos",
        options: ["Administración", "Desarrollo de Aplicaciones", "ITS - Peaje y Telepeaje", "CiberSeguridad", "Mesa de Ayuda","Soporte en Sitio"],
        actions: ["Administración", "Desarrollo de Aplicaciones", "ITS - Peaje y Telepeaje", "CiberSeguridad", "Mesa de Ayuda","Soporte en Sitio"]
    }
    const SubMenuTram = {
        name: "Trámites y Servicios",
        options: ["Formularios de Solicitud", "Formato de vacaciones", "Formato de permisos", "Supervisión"],
        actions: ["Formularios de Solicitud", "Formato de vacaciones", "Formato de permisos", "Supervisión"]
    }

    const SubMenuIndic = {
        name: "Indicadores",
        options: ["Administración", "Desarrollo de Aplicaciones", "ITS - Peaje y Telepeaje", "CiberSeguridad", "Mesa de Ayuda","Soporte en Sitio"],
        actions: ["Administración", "Desarrollo de Aplicaciones", "ITS - Peaje y Telepeaje", "CiberSeguridad", "Mesa de Ayuda","Soporte en Sitio"]
    }

    const routes = [
        // { id: 1, href: "/*", content: "Inicio" },
        { id: 1, href: "/Home", content: "Inicio" },
        { id: 2, href: "/Noticias", content: "Noticias" },
        { id: 3, href: "/colaborador", content: "Colaborador" },
        { id: 5, href: "/#", hasSubMenu: SubMenuTram },
        { id: 7, href: "/#", hasSubMenu: SubMenuGestor },
        { id: 8, href: "/#", hasSubMenu: SubMenuIndic },
        // { id: 7, href: "https://development.victum-re.online", content: "Proveedores", onlyLink: true },
        { id: 6, href: "/Calendario", content: "Calendario de Eventos" },
               
    ]

    const handleCheckBoxChange = ({ target }) => setIsChecked(target.checked);

    if (isChecked) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return (
        <>
            <nav className={`${showShadow ? 'shadow nav-small' : 'nav'}`} style={{ backgroundColor: (showShadow || isChecked) ? 'white' : 'transparent' }}>
                {/* <a href="/" className={`enlace d-flex justify-content-center align-items-center ${(mobile && showShadow) && "center-logo"}`}> */} */}
                    {/* <img src={(showShadow || isChecked) ? "/logo-removebg.png" : "/logo-white.png"} className={showShadow ? 'logo-small' : 'logo'} /> */}
                    {/* <h1 className="m-0"></h1> */}
                {/* </a> */}
                <input type="checkbox" id="check" onChange={handleCheckBoxChange} />
                <label htmlFor="check" className="checkbtn" >
                    <i className={`${isChecked ? "fa fa-times" : "fas fa-bars"} checkbtn-icons`}></i>
                </label>

                <ul style={{ paddingLeft: 0 }}>
                    {routes.map(({ id, href, content, hasSubMenu, onlyLink }) => (
                        <li key={`routes-${id}-${href}`}>
                            {hasSubMenu ? (
                                <Dropdown>
                                    <Dropdown.Toggle variant="ligth" id={`${(!showShadow && !mobile) ? "dropdown-basic-2" : "dropdown-basic"}`} size="sm" >
                                        <>{hasSubMenu.name}</>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {hasSubMenu.options.map((item, i) =>
                                            <Dropdown.Item key={item} href={`/${hasSubMenu.actions[i]}`} className={`/${hasSubMenu.actions[i]}` === pathname ? "active" : ""}>{item}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>

                            ) : onlyLink ?
                                <a href="https://development.victum-re.online" target="_blank" className={`${(!showShadow && !mobile) && "white"}`}>{content}</a>
                                : <a href={href} className={`${href === pathname && "active"} ${(!showShadow && !mobile) && "white"}`}>{content}</a>

                            }
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Navbar