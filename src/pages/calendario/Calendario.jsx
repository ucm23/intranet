import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar';
import { useNavigate } from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import es from 'date-fns/locale/es';
import { useBreakpointValue } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/custom-calendar.css'
import { useEffect } from 'react';
import { indexEvents } from '../../api/events/events';
import { indexDepartments } from '../../api/departamentos/departments';
import { indexUsers } from '../../api/users/users';

const locales = {
    es: es,
};

const localizer = dateFnsLocalizer({
    format: (date, formatString) => format(date, formatString, { locale: es }),
    parse: (dateString, formatString) => parse(dateString, formatString, new Date(), { locale: es }),
    startOfWeek: () => startOfWeek(new Date(), { locale: es }),
    getDay: (date) => getDay(date),
    locales,
});

const Calendario = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();
    const [newEvent, setNewEvent] = useState({ title: '', description: '', link: '', type: '', area: '', start: null, end: null });
    const [eventos, setEventos] = useState([]);
    const [events, setEvents] = useState([
        {
            "id": 4,
            "department_id": 1,
            "user_id": 1,
            "title": "Curso ISO",
            "description": "Curso Certificacion ISO",
            "url": "string",
            "start_date": "2024-10-19T09:00:00.000Z",
            "end_date": "2024-10-19T14:00:00.000Z",
            "active": true,
            "event_type": "Curso",
            "created_at": "2024-10-14T21:05:55.447Z",
            "updated_at": "2024-10-14T21:05:55.447Z"
        },
        {
            title: 'Evento de Prueba',
            description: 'este es un evento de prueba',
            link: 'opcional',
            type: 'reunion',
            area: 'desarrollo',
            start: new Date(),
            end: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hora después
        },
        {
            title: 'Evento 1',
            start: new Date(2024, 9, 10, 10, 0), // 10 de octubre de 2024
            end: new Date(2024, 9, 10, 12, 0), // 10 de octubre de 2024
            description: 'Descripción del evento 1',
            type: 'Reunión',
            link: 'https://example.com/evento1',
            color: '#FFDDC1' // Color opcional
        }
    ]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = async () => {
        const response = await indexEvents({})
        if (response.status) {
            console.log(response.data)
            setEventos(response.data)
        }
    };

    useEffect(() => {
        getDepartments()
    }, [])

    const getDepartments = async () => {
        const response = await indexDepartments({})
        if (response.status) {
            console.log(response.data)
            setEventos(response.data)
        }
    };

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await indexUsers({})
        if (response.status) {
            console.log(response.data)
            setEventos(response.data)
        }
    };


    const handleAddEvent = () => {
        console.log('Intentando agregar evento:', newEvent);
        // if (newEvent.title && newEvent.start && newEvent.end && newEvent.start < newEvent.end) {
        if (newEvent.title && newEvent.description && newEvent.link && newEvent.type && newEvent.area && newEvent.start && newEvent.end && newEvent.start < newEvent.end) {
            setEvents([...events, newEvent]);
            setNewEvent({ title: '', description: '', link: '', type: '', area: '', start: null, end: null });
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };


    const handleEditEvent = (event) => {
        setSelectedEvent(event);
        setNewEvent({ title: event.title, description: event.description, link: event.link, type: event.type, area: event.area, start: event.start, end: event.end })
        // setNewEvent({ title: event.title,start: event.start, end: event.end });
    };

    const handleUpdateEvent = () => {
        if (newEvent.title && newEvent.start && newEvent.end && newEvent.start < newEvent.end) {
            const updatedEvents = events.map(evt =>
                evt.start === selectedEvent.start ? { ...evt, title: newEvent.title, start: newEvent.start, end: newEvent.end } : evt
            );
            setEvents(updatedEvents);
            setSelectedEvent(null);
            // setNewEvent({ title: '', start: null, end: null });
            setNewEvent({ title: '', description: '', link: '', type: '', area: '', start: null, end: null });
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    const handleDeleteEvent = () => {
        const updatedEvents = events.filter(evt => evt.start !== selectedEvent.start);
        setEvents(updatedEvents);
        setSelectedEvent(null);
        // setNewEvent({ title: '', start: null, end: null });
        setNewEvent({ title: '', description: '', link: '', type: '', area: '', start: null, end: null });
    };

    return (

        <div style={{ height: '100vh', overflow: 'hidden', padding: '20px' }}>
            <Navbar backgroundColor="#001529" />
            {/* Título del calendario */}
            <div style={{
                marginBottom: '20px', // Espacio entre el título y el contenido
                textAlign: 'center',
            }}>
                <h1 style={{
                    color: 'black',
                    fontSize: mobile ? '16px' : '20px',
                    fontFamily: 'copperplate gothic bold',
                    marginTop: '20px'
                }}>
                    Calendario de Eventos
                </h1>
            </div>

            <div style={{
                display: 'flex', // Usa flex para colocar el formulario y el calendario uno al lado del otro
                alignItems: 'flex-start', // Alinea los elementos al principio del contenedor
                justifyContent: 'space-between',
                height: 'calc(100% - 60px)', // Ocupa el resto del espacio (ajusta el valor según el tamaño del título y el padding)
            }}>

                {/* Marco para el formulario */}
                <div style={{
                    border: '1px solid #ccc', // Borde del marco
                    borderRadius: '8px', // Bordes redondeados
                    padding: '20px', // Espaciado interno
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Sombra
                    marginBottom: '20px',
                    width: mobile ? '30vw' : '30vw', // Ancho del marco
                    marginLeft: 'auto', // Alinea a la derecha
                    marginRight: 'auto', // Alinea a la izquierda
                    position: 'relative', // Posiciona el contenedor relativamente
                    zIndex: 4 // Asegúrate de que esté por debajo del título
                }}>
                    <div style={{
                        marginBottom: '1px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        // justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '5px', // Espacio de 20px entre los inputs en la misma línea
                        position: 'relative', // Hace que el contenedor principal sea relativo para colocar el ícono dentro de él
                    }}>
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            style={{
                                color: 'blue', // Cambia el color según tu preferencia
                                fontSize: mobile ? '20px' : '24px', // Tamaño del ícono
                                marginRight: '10px', // Espacio entre el ícono y el texto
                                cursor: 'pointer', // Cambia el cursor al pasar sobre el ícono
                            }}
                        />
                        <span style={{
                            fontSize: mobile ? '16px' : '20px', // Tamaño del texto
                            color: 'black', // Color del texto
                            fontFamily: 'copperplate gothic bold', // Fuente del texto
                            display: 'flex', // Usar flex para centrar el texto
                            alignItems: 'center', // Centrar verticalmente
                            justifyContent: 'center', // Centrar horizontalmente
                            // marginLeft: 'auto', // Empujar el texto a la derecha
                        }}>
                            Nuevo Evento
                        </span>
                        {/* Sección del formulario */}

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Departamento:</label>
                            <select
                                value={newEvent.department}
                                onChange={(e) => setNewEvent({ ...newEvent, department: e.target.value })}
                                style={{
                                    padding: '5px',
                                    width: '180px',
                                    border: '1px solid #ccc', // Marco del select
                                    borderRadius: '4px', // Bordes redondeados
                                    transition: 'box-shadow 0.3s ease', // Transición suave
                                    fontSize: '12px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                            >
                                <option value="">Selecciona un departamento</option>
                                {eventos.length > 0 ? (
                                    eventos.map((department) => (
                                        <option key={department.id} value={department.id}>
                                            {department.name}
                                        </option>
                                    ))
                                ) : (
                                    <option value="" disabled>No hay departamentos disponibles</option> // Mensaje si no hay departamentos
                                )}
                            </select>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Participantes:</label>
                            <select
                                value={newEvent.user}
                                onChange={(e) => setNewEvent({ ...newEvent, users: e.target.value })}
                                style={{
                                    padding: '5px',
                                    width: '180px',
                                    border: '1px solid #ccc', // Marco del select
                                    borderRadius: '4px', // Bordes redondeados
                                    transition: 'box-shadow 0.3s ease', // Transición suave
                                    fontSize: '12px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                            >
                                <option value="">Integrantes</option>
                                {eventos.length > 0 ? (
                                    eventos.map((users) => (
                                        <option key={users.id} value={users.id}>
                                            {users.name}
                                        </option>
                                    ))
                                ) : (
                                    <option value="" disabled>No hay participantes disponibles</option> // Mensaje si no hay departamentos
                                )}
                            </select>
                        </div>





                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Titulo:</label>
                            <input
                                type="text"
                                placeholder="Título del evento"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                style={{
                                    // marginRight: '35px',
                                    marginLeft: '10px', // Desplaza este input 20px a la derecha
                                    padding: '5px',
                                    width: '300px',
                                    // maxWidth: '100%', // Los inputs ocuparán el 100% del contenedor si es necesario
                                    border: '1px solid #ccc', // Marco del input
                                    borderRadius: '4px', // Bordes redondeados
                                    transition: 'box-shadow 0.3s ease', // Transición suave
                                    fontSize: '12px',
                                    marginTop: '10px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                            />
                        </div>


                        <label style={{ marginBottom: '5px', fontWeight: 'bold', fontSize: mobile ? '12px' : '12px' }}>
                            Nombre del evento:
                        </label>
                        <input
                            type="text"
                            placeholder="Título del evento"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            style={{
                                // marginRight: '35px',
                                marginLeft: '10px', // Desplaza este input 20px a la derecha
                                padding: '5px',
                                width: '380px',
                                // maxWidth: '100%', // Los inputs ocuparán el 100% del contenedor si es necesario
                                border: '1px solid #ccc', // Marco del input
                                borderRadius: '4px', // Bordes redondeados
                                transition: 'box-shadow 0.3s ease', // Transición suave
                                fontSize: '12px',
                                marginTop: '10px'

                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir

                        />
                        <input
                            type="text"
                            placeholder="Descripción"
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            style={{
                                marginRight: '10px',
                                padding: '5px',
                                width: '380px',
                                border: '1px solid #ccc', // Marco del input
                                borderRadius: '4px', // Bordes redondeados
                                transition: 'box-shadow 0.3s ease', // Transición suave
                                fontSize: '12px'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir

                        />
                        <input
                            type="text"
                            placeholder="Enlace de la reunión (opcional)"
                            value={newEvent.link}
                            onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
                            style={{
                                marginRight: '10px',
                                padding: '5px',
                                width: '380px',
                                border: '1px solid #ccc', // Marco del input
                                borderRadius: '4px', // Bordes redondeados
                                transition: 'box-shadow 0.3s ease', // Transición suave
                                fontSize: '12px'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir

                        />
                        <select
                            value={newEvent.type}
                            onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                            style={{
                                padding: '5px',
                                width: '180px',
                                border: '1px solid #ccc', // Marco del select
                                borderRadius: '4px', // Bordes redondeados
                                transition: 'box-shadow 0.3s ease', // Transición suave
                                marginLeft: '10px',
                                fontSize: '12px'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                        >
                            <option value="">Tipo de evento</option>
                            <option value="reunion">Reunión</option>
                            <option value="Curso">Curso</option>
                            <option value="Cumpleaños">Cumpleaños</option>
                            <option value="otro">Otro</option>
                        </select>

                       


                        <DatePicker
                            placeholderText="Fecha de inicio"
                            selected={newEvent.start}
                            onChange={(start) => setNewEvent({ ...newEvent, start })}
                            showTimeSelect
                            dateFormat="Pp"
                            customInput={
                                <input style={{
                                    marginRight: '10px',
                                    border: '1px solid #ccc', // Marco del input
                                    borderRadius: '4px', // Bordes redondeados
                                    fontSize: '13px'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                />}
                        />

                        <DatePicker
                            placeholderText="Fecha de finalización"
                            selected={newEvent.end}
                            onChange={(end) => setNewEvent({ ...newEvent, end })}
                            showTimeSelect
                            dateFormat="Pp"
                            customInput={
                                <input style={{
                                    marginRight: '10px',
                                    border: '1px solid #ccc', // Marco del input
                                    borderRadius: '4px',// Bordes redondeados
                                    transition: 'box-shadow 0.3s ease', // Transición suave
                                    fontSize: '13px'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir

                                />}
                        />
                        {selectedEvent ? (
                            <>
                                <button onClick={handleUpdateEvent} style={{ marginLeft: '10px' }}>
                                    Actualizar Evento
                                </button>
                                <button onClick={handleDeleteEvent} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
                                    Eliminar Evento
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleAddEvent}
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
                                Agregar Evento
                            </button>
                        )}
                    </div>
                </div>
                {/* aqui termina el formulario de nuevo evento */}

                <div style={{
                    width: mobile ? '61vw' : '66vw',
                    height: mobile ? '62vh' : '72vh', // Ajustar aquí la altura del calendario
                    overflow: 'hidden',
                }}>

                    {/* Calendario */}
                    <Calendar
                        localizer={localizer}
                        events={eventos}
                        startAccessor="start"
                        endAccessor="end"
                        style={{
                            width: '100%',
                            height: '100%',
                            fontSize: '11px'
                        }}
                        defaultView="month"
                        views={['month', 'week', 'day']}
                        messages={{
                            today: 'Hoy',
                            previous: 'Anterior',
                            next: 'Siguiente',
                            month: 'Mes',
                            week: 'Semana',
                            day: 'Día',
                            agenda: 'Agenda',
                            date: 'Fecha',
                            time: 'Hora',
                            event: 'Evento',
                            noEventsInRange: 'No hay eventos en este rango.',
                        }}
                        className="custom-calendar"  // Agregamos clase personalizada
                        onSelectEvent={handleEditEvent}
                    />
                </div>
            </div>
        // </div>
    );
};

export default Calendario;
