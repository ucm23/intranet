import React, { useState, useEffect } from 'react';

const Proyecto = ({ proyecto, onActualizarProyecto }) => {
    const [nuevaActividad, setNuevaActividad] = useState({ nombre: '', avance: 0, responsable: '' });
    const [nuevoNombre, setNuevoNombre] = useState(proyecto.nombre);

    useEffect(() => {
        calcularAvance();
    }, [proyecto.actividades]);

    const calcularEfectividad = () => {
        const efectividades = {};

        proyecto.actividades.forEach(({ responsable, avance }) => {
            if (!efectividades[responsable]) {
                efectividades[responsable] = { totalAvance: 0, numActividades: 0 };
            }
            efectividades[responsable].totalAvance += avance;
            efectividades[responsable].numActividades += 1;
        });

        for (const responsable in efectividades) {
            efectividades[responsable] = (efectividades[responsable].totalAvance / efectividades[responsable].numActividades) || 0;
        }

        return efectividades;
    };

    const calcularAvance = () => {
        const avanceTotal =
            proyecto.actividades.reduce((acc, actividad) => acc + actividad.avance, 0) / 
            proyecto.actividades.length;

        const efectividades = calcularEfectividad();

        onActualizarProyecto({ ...proyecto, avance: avanceTotal, efectividades, nombre: nuevoNombre });
    };

    const actualizarActividad = (index, nuevaActividad) => {
        const nuevasActividades = [...proyecto.actividades];
        nuevasActividades[index] = nuevaActividad;

        const avanceTotal = nuevasActividades.reduce((acc, actividad) => acc + actividad.avance, 0) / nuevasActividades.length;
        const efectividades = calcularEfectividad();

        onActualizarProyecto({ ...proyecto, actividades: nuevasActividades, avance: avanceTotal, efectividades, nombre: nuevoNombre });
    };

    const agregarActividad = (e) => {
        e.preventDefault();

        if (nuevaActividad.nombre.trim() === '' || nuevaActividad.responsable.trim() === '') return;

        const nuevasActividades = [...proyecto.actividades, nuevaActividad];
        const avanceTotal = nuevasActividades.reduce((acc, actividad) => acc + actividad.avance, 0) / nuevasActividades.length;

        const efectividades = calcularEfectividad();

        onActualizarProyecto({ ...proyecto, actividades: nuevasActividades, avance: avanceTotal, efectividades, nombre: nuevoNombre });

        setNuevaActividad({ nombre: '', avance: 0, responsable: '' });
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
                {Math.round(proyecto.avance)}%
            </h2>

            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                {proyecto.actividades.map((actividad, index) => (
                    <li key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ flex: 1 }}>{actividad.nombre}:</span>
                            <input
                                type="number"
                                value={actividad.avance}
                                onChange={(e) =>
                                    actualizarActividad(index, {
                                        ...actividad,
                                        avance: Math.min(Math.max(parseInt(e.target.value, 10), 0), 100), // Esto es para el porcentaje q va de 0 a 100
                                    })
                                }
                                max="100"
                                min="0"
                                style={{ width: '60px', marginLeft: '10px' }}
                            />
                            <span style={{ marginLeft: '5px' }}>% completado</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
                            <span style={{ flex: 1 }}>Responsable: </span>
                            <input
                                type="text"
                                value={actividad.responsable}
                                onChange={(e) =>
                                    actualizarActividad(index, {
                                        ...actividad,
                                        responsable: e.target.value
                                    })
                                }
                                style={{ width: '200px', marginLeft: '10px' }}
                                placeholder="Responsable"
                            />
                        </div>
                    </li>
                ))}
            </ul>

            <form onSubmit={agregarActividad} style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                <input
                    type="text"
                    placeholder="Nueva actividad"
                    value={nuevaActividad.nombre}
                    onChange={(e) => setNuevaActividad({ ...nuevaActividad, nombre: e.target.value })}
                    style={{ marginRight: '5px', border: '1px solid #ccc', borderRadius: '4px', padding: '2px', fontSize: '12px', width: '230px' }}
                />
                <input
                    type="number"
                    placeholder="Avance"
                    value={nuevaActividad.avance}
                    onChange={(e) => setNuevaActividad({ ...nuevaActividad, avance: Math.min(Math.max(parseInt(e.target.value, 10), 0), 100) }) }
                    max="100"
                    min="0"
                    style={{ marginRight: '5px', border: '1px solid #ccc', borderRadius: '4px', padding: '2px', fontSize: '12px', width: '60px' }}
                />
                <input
                    type="text"
                    placeholder="Responsable"
                    value={nuevaActividad.responsable}
                    onChange={(e) => setNuevaActividad({ ...nuevaActividad, responsable: e.target.value })}
                    style={{ marginTop: '5px', marginRight: '5px', border: '1px solid #ccc', borderRadius: '4px', padding: '2px', fontSize: '12px', width: '230px' }}
                />
                <button
                    type="submit"
                    style={{ marginTop: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'rgba(54, 162, 235, 0.6)', color: 'white', padding: '5px 10px', cursor: 'pointer', fontSize: '14px' }}
                >
                    <i className="fas fa-plus-circle" style={{ marginRight: '5px' }}></i> Agregar
                </button>
            </form>
        </div>
    );
};

export default Proyecto;
