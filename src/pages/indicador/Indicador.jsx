import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar';
import GraficaAvancesProyecto from './GraficaAvancesProyecto';
import { useBreakpointValue } from '@chakra-ui/react';
import Proyecto from './Proyecto';

const Indicador = () => {
  const mobile = useBreakpointValue({ base: true, md: false });
  const [scrollY, setScrollY] = useState(0);
  const [proyectos, setProyectos] = useState([
    {
      nombre: 'Intranet',
      avance: 0,
      actividades: [
        { nombre: 'Login', avance: 50 , responsable: 'Ulises Cano' },
        { nombre: 'Inicio', avance: 100 , responsable: 'Adriana Castillo' },
        { nombre: 'Noticias', avance: 90, responsable: 'Ulises Cano' },
        { nombre: 'Organigrama', avance: 100, responsable: 'Adriana Castillo' },
        { nombre: 'Gestor de Documentos', avance: 80, responsable: 'Ulises Cano' },
        { nombre: 'Calendario', avance: 80, responsable: 'Ulises Cano' },
        { nombre: 'Indicadores', avance: 90, responsable: 'Adriana Castillo' },
        { nombre: 'BD', avance: 90, responsable: 'Gilberto López' },
      ],
    },
    {
      nombre: 'Victum RE',
      avance: 40,
      actividades: [
        { nombre: 'Módulo 1', avance: 100, responsable: 'Gilberto López' },
        { nombre: 'Módulo 2', avance: 100, responsable: 'Gilberto López' },
        { nombre: 'Módulo 2', avance: 30, responsable: 'Gilberto López' },
      ],
    },
    {
      nombre: 'Geo-Truck',
      avance: 40,
      actividades: [
        { nombre: 'Módulo 1', avance: 100, responsable: 'Ulises Cano' },
        { nombre: 'Módulo 2', avance: 100, responsable: 'Ulises Cano' },
        { nombre: 'Módulo 2', avance: 40, responsable: 'Ulises Cano' },
      ],
    },
    {
      nombre: 'Victum SGA',
      avance: 60,
      actividades: [
        { nombre: 'Módulo 1', avance: 60, responsable: 'Gilberto López' },
        { nombre: 'Módulo 2', avance: 60, responsable: 'Gilberto López' },
      ],
    },
    {
      nombre: 'Victum DESK',
      avance: 60,
      actividades: [
        { nombre: 'Módulo 1', avance: 60, responsable: 'Gilberto López' },
        { nombre: 'Módulo 2', avance: 60, responsable: 'Gilberto López' },
      ],
    },
    {
      nombre: 'Victum POS CS',
      avance: 60,
      actividades: [
        { nombre: 'Módulo 1 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 1 Funcionalidad', avance: 0, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 2 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 2 Funcionalidad', avance: 0, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 3 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 3 Funcionalidad', avance: 0, responsable: 'Adriana Castillo'  },
      ],
    },
    {
      nombre: 'Backoffice',
      avance: 60,
      actividades: [
        { nombre: 'Módulo 1 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 1 Funcionalidad', avance: 10, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 2 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 2 Funcionalidad', avance: 10, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 3 Interfaz Grafica', avance: 100, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 3 Funcionalidad', avance: 10, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 3 Interfaz Grafica', avance: 0, responsable: 'Adriana Castillo'  },
        { nombre: 'Módulo 3 Funcionalidad', avance: 0, responsable: 'Adriana Castillo'  },
      ],
    },
  ]);

  const [nuevoProyecto, setNuevoProyecto] = useState({ nombre: '', actividades: [] });

  const actualizarProyecto = (proyectoActualizado) => {
    setProyectos((prevProyectos) =>
      prevProyectos.map((proyecto) =>
        proyecto.nombre === proyectoActualizado.nombre ? proyectoActualizado : proyecto
      )
    );
  };

  const agregarProyecto = (e) => {
    e.preventDefault();
    if (nuevoProyecto.nombre.trim() === '') return; // Validación simple

    // Agregar el nuevo proyecto al estado
    setProyectos([...proyectos, { ...nuevoProyecto, avance: 0 }]);

    // Resetear el estado del nuevo proyecto
    setNuevoProyecto({ nombre: '', actividades: [] });
  };

  return (
    <div style={{ height: '100vh' }}>
      <Navbar backgroundColor="#001529" />

      <div style={{ padding: '20px' }}>
        {/* Título centrado */}
        <h1 style={{ textAlign: 'center', fontSize: mobile ? '20px' : '28px', fontFamily: 'copperplate gothic bold' }}>
          Avances de Proyectos
        </h1>

        {/* Formulario para agregar nuevos proyectos */}
        <form onSubmit={agregarProyecto} style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Nuevo proyecto"
            value={nuevoProyecto.nombre}
            onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, nombre: e.target.value })}
            style={{ marginRight: '10px', padding: '8px', flex: 1, border: '1px solid #ccc', borderRadius: '4px', transition: 'box-shadow 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
          />
          <button type="submit"
            style={{
              marginLeft: '10px',
              border: '1px solid #ccc', // Borde del botón
              borderRadius: '4px', // Bordes redondeados
              backgroundColor: 'blue', // Cambia el color de fondo según sea necesario
              color: 'white', // Color del texto
              padding: '5px 10px', // Espaciado interno
              cursor: 'pointer', // Cambia el cursor al pasar por encima
              fontSize: mobile ? '10px' : '14px',
              transition: 'box-shadow 0.5s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir

          >
            <i className="fas fa-plus-circle" style={{ marginRight: '5px' }}></i> {/* Icono de agregar */}
            Agregar Proyecto
          </button>

        </form>

        {/* Contenedor de la gráfica y la lista de proyectos */}
        <div style={{ display: 'flex', marginTop: '20px' }}>
          {/* Contenedor de la lista de proyectos */}
          <div style={{ flex: 1, marginRight: '20px' }}>
            {proyectos.map((proyecto) => (
              <Proyecto
                key={proyecto.nombre}
                proyecto={proyecto}
                onActualizarProyecto={actualizarProyecto}
              />
            ))}
          </div>

          {/* Contenedor de la gráfica */}
          <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}> {/* Cambiado para centrar horizontalmente */}
            <GraficaAvancesProyecto proyectos={proyectos} style={{ width: '200%', height: '450px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicador;
