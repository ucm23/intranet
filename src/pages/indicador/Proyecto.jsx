import React, { useState } from 'react';

const Proyecto = ({ proyecto, onActualizarProyecto }) => {
    const [nuevaActividad, setNuevaActividad] = useState({ nombre: '', avance: 0 });
    const [nuevoNombre, setNuevoNombre] = useState(proyecto.nombre); // Estado para el nuevo nombre del proyecto

    const actualizarActividad = (index, nuevaActividad) => {
        const nuevasActividades = [...proyecto.actividades];
        nuevasActividades[index] = nuevaActividad;

        // Calcular el avance total como promedio del avance de actividades
        const avanceTotal =
            nuevasActividades.reduce((acc, actividad) => acc + actividad.avance, 0) /
            nuevasActividades.length;

        // Actualizar el proyecto con las nuevas actividades y el avance total recalculado
        onActualizarProyecto({ ...proyecto, actividades: nuevasActividades, avance: avanceTotal, nombre: nuevoNombre }); // Actualizar nombre
    };

    const agregarActividad = (e) => {
        e.preventDefault();

        // Ver que el nombre de la nueva actividad no esté vacío
        if (nuevaActividad.nombre.trim() === '') return;

        const nuevasActividades = [...proyecto.actividades, nuevaActividad];

        // Calcular el avance total como promedio del avance de actividades
        const avanceTotal =
            nuevasActividades.reduce((acc, actividad) => acc + actividad.avance, 0) /
            nuevasActividades.length;

        // Actualizar el proyecto con la nueva actividad y el calcular avance total 
        onActualizarProyecto({ ...proyecto, actividades: nuevasActividades, avance: avanceTotal, nombre: nuevoNombre }); // Actualizar nombre

        // Resetear el estado del formulario que quede vacio 
        setNuevaActividad({ nombre: '', avance: 0 });
    };

    return (
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h2 style={{ fontSize: '24px', margin: 0, color: 'blue' }}>
                <input
                    type="text"
                    value={nuevoNombre}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                    style={{ border: 'none', fontSize: '24px', color: 'blue', outline: 'none' }}
                />
                {Math.round(proyecto.avance)}% {/* Muestra el avance total aquí */}
            </h2>


            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                {proyecto.actividades.map((actividad, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                        <span style={{ flex: 1 }}>{actividad.nombre}:</span>
                        <input
                            type="number"
                            value={actividad.avance}
                            onChange={(e) =>
                                actualizarActividad(index, {
                                    ...actividad,
                                    avance: Math.min(Math.max(parseInt(e.target.value, 10), 0), 100), // Limitando el valor entre 0 y 100
                                })
                            }
                            max="100"
                            min="0"
                            style={{ width: '60px', marginLeft: '10px' }}
                        />
                        <span style={{ marginLeft: '5px' }}>% completado</span>
                    </li>
                ))}
            </ul>

            {/* Formulario para agregar nuevas actividades */}
            <form onSubmit={agregarActividad} style={{ display: 'flex', marginTop: '10px' }}>
                <input
                    type="text"
                    placeholder="Nueva actividad"
                    value={nuevaActividad.nombre}
                    onChange={(e) => setNuevaActividad({ ...nuevaActividad, nombre: e.target.value })}
                    style={{
                        // flex: 1,
                        marginRight: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        transition: 'box-shadow 0.3s ease',
                        padding: '2px', // Reducir padding
                        fontSize: '12px', // Reducir tamaño de la fuente
                        width: '230px', // Definir un ancho más pequeño
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)')}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
                <input
                    type="number"
                    placeholder="Avance"
                    value={nuevaActividad.avance}
                    onChange={(e) => setNuevaActividad({ ...nuevaActividad, avance: Math.min(Math.max(parseInt(e.target.value, 10), 0), 100) })}
                    max="100"
                    min="0"
                    //   style={{ width: '60px', marginRight: '5px' }}
                    style={{
                        // flex: 1,
                        marginRight: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        transition: 'box-shadow 0.3s ease',
                        padding: '2px', // Reducir padding
                        fontSize: '12px', // Reducir tamaño de la fuente
                        width: '30px', // Definir un ancho más pequeño
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)')}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
                <button type="submit" style={{
                    marginLeft: '10px',
                    border: '1px solid #ccc', // Borde del botón
                    borderRadius: '4px', // Bordes redondeados
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Cambia el color de fondo según sea necesario
                    color: 'white', // Color del texto
                    padding: '5px 10px', // Espaciado interno
                    cursor: 'pointer', // Cambia el cursor al pasar por encima
                    fontSize: '14px',
                    transition: 'box-shadow 0.5s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir

                >
                    <i className="fas fa-plus-circle" style={{ marginRight: '5px' }}></i> {/* Icono de agregar */}Agregar</button>
            </form>
        </div>
    );
};

export default Proyecto;