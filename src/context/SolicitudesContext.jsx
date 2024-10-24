// src/context/SolicitudesContext.jsx
import React, { createContext, useState } from 'react';

const SolicitudesContext = createContext();

export const SolicitudesProvider = ({ children }) => {
    const [solicitudes, setSolicitudes] = useState([]);

    const agregarSolicitud = (nuevaSolicitud) => {
        setSolicitudes((prevSolicitudes) => [...prevSolicitudes, nuevaSolicitud]);
    };

    return (
        <SolicitudesContext.Provider value={{ solicitudes, agregarSolicitud }}>
            {children}
        </SolicitudesContext.Provider>
    );
};

export default SolicitudesContext;
