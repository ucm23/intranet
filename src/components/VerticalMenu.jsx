import React, { useState } from 'react';
import { FaRegCalendarAlt, FaRegEdit, FaTools, FaUmbrellaBeach, FaUserClock, FaPlusCircle, FaTasks } from 'react-icons/fa';

const VerticalMenu = ({ selectedSection, setSelectedSection }) => {
    const [openTramites, setOpenTramites] = useState(false);
    const [openServicios, setOpenServicios] = useState(false);
    const [openGestion, setOpenGestion] = useState(false);

    return (
        <div style={styles.menuContainer}>
            {/* Sección de Trámites */}
            <h4 style={styles.sectionTitle} onClick={() => setOpenTramites(!openTramites)}>
                <FaRegCalendarAlt style={styles.icon}/> Trámites
            </h4>
            {openTramites && (
                <ul style={styles.menuList}>
                    <li 
                        style={selectedSection === 'vacaciones' ? styles.activeItem : styles.menuItem}
                        onClick={() => setSelectedSection('vacaciones')}
                    >
                        <FaUmbrellaBeach style={styles.icon}/> Vacaciones
                    </li>
                    <li 
                        style={selectedSection === 'permisos' ? styles.activeItem : styles.menuItem}
                        onClick={() => setSelectedSection('permisos')}
                    >
                        <FaUserClock style={styles.icon}/> Permisos
                    </li>
                </ul>
            )}

            {/* Sección de Servicios */}
            <h4 style={styles.sectionTitle} onClick={() => setOpenServicios(!openServicios)}>
                <FaRegEdit style={styles.icon}/> Servicios
            </h4>
            {openServicios && (
                <ul style={styles.menuList}>
                    <li 
                        style={selectedSection === 'nuevoServicio' ? styles.activeItem : styles.menuItem}
                        onClick={() => setSelectedSection('nuevoServicio')}
                    >
                        <FaPlusCircle style={styles.icon}/> Nuevo Servicio
                    </li>
                </ul>
            )}

            {/* Sección de Gestión */}
            <h4 style={styles.sectionTitle} onClick={() => setOpenGestion(!openGestion)}>
                <FaTools style={styles.icon}/> Gestión de Solicitudes
            </h4>
            {openGestion && (
                <ul style={styles.menuList}>
                    <li 
                        style={selectedSection === 'gestion' ? styles.activeItem : styles.menuItem}
                        onClick={() => setSelectedSection('gestion')}
                    >
                        <FaTasks style={styles.icon}/> Gestión de Solicitudes
                    </li>
                </ul>
            )}
        </div>
    );
};

const styles = {
    menuContainer: {
        padding: '20px',
        backgroundColor: '#f0f2f5',
        height: '100%',
        borderRight: '1px solid #ddd',
    },
    sectionTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    menuList: {
        listStyleType: 'none',
        padding: 0,
        marginBottom: '20px',
    },
    menuItem: {
        padding: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.2s',
    },
    activeItem: {
        padding: '10px',
        backgroundColor: '#1890ff',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '8px',
    },
};

export default VerticalMenu;
