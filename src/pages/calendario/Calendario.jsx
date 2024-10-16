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
import { createEvents, indexEvents } from '../../api/events/events';
import { indexDepartments } from '../../api/departamentos/departments';
import { indexUsers } from '../../api/users/users';
import moment from 'moment/moment';

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
    const [newEvent, setNewEvent] = useState({
        department_id: '',
        user_id: '',
        title: '',
        description: '',
        link: '', start: null, end: null, type: '', participants_ids: ''
    });
    const [users, setUsers] = useState([]);
    const [departaments, setDepartaments] = useState([]);
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEditDelete, setShowEditDelete] = useState(true);

    useEffect(() => {
        getDepartments()
        getUsers()
        getEvents()
    }, [])

    const getEvents = async () => {
        const response = await indexEvents({})
        if (response.status) {
            console.log(response.data)
            setEvents(response.data)
        }
    };

    const getDepartments = async () => {
        const response = await indexDepartments({})
        if (response.status) {
            setDepartaments(response.data)
        }
    };

    const getUsers = async () => {
        const response = await indexUsers({})
        if (response.status) {
            console.log("Usuarios cargados:", response.data);
            setUsers(response.data); // Establece el estado de usuarios
        } else {
            console.error("Error al cargar usuarios:", response.error);
        }
        // if (response.status) {
        //     setUsers(response.data)
        // }
    };
    const formatDateTime = (date) => {
        const options = { hour: '2-digit', minute: '2-digit' }; // Formato de horas y minutos
        return new Date(date).toLocaleTimeString([], options);
    };

    const handleAddEvent = async () => {

        if (!newEvent.department_id) {
            alert('El campo Departamento es obligatorio.');
            return;
        }
        if (!newEvent.participants_ids) {
            alert('El campo Participantes es obligatorio.');
            return;
        }

        if (
            newEvent.department_id &&
            newEvent.user_id &&
            newEvent.title &&
            newEvent.description &&
            newEvent.start &&
            newEvent.end &&
            newEvent.type &&
            newEvent.participants_ids &&
            newEvent.start < newEvent.end
        ) {
            try {
                newEvent.department_id = parseInt(newEvent.department_id)
                if (newEvent.link) newEvent.url = newEvent.link;
                delete newEvent.link;
                newEvent.event_type = newEvent.type;
                delete newEvent.type;
                
                newEvent.start_date = moment(newEvent.start).format('YYYY-MM-DDTH:MM');
                newEvent.end_date = moment(newEvent.end).format('YYYY-MM-DDTH:MM');
                delete newEvent.start;
                delete newEvent.end;
                console.log("Estado de newEvent:", newEvent);
                alert(JSON.stringify(newEvent));
                const response = await createEvents({ event: newEvent });
                console.log("Respuesta del servidor:", response);


                if (response.status === true) {
                    console.log("Evento creado con éxito:",response.data);
                } else {
                    console.error("Error al crear el evento:", response.error);
                }
            } catch (error) {
                console.error("Error en la petición:", error);
            }
        }
        else {
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
            // alert('Por favor, complete todos los campos correctamente.');
        }
    };

    const handleDeleteEvent = () => {
        const updatedEvents = events.filter(evt => evt.start !== selectedEvent.start);
        setEvents(updatedEvents);
        setSelectedEvent(null);
        // setNewEvent({ title: '', start: null, end: null });
        setNewEvent({ title: '', description: '', link: '', type: '', area: '', start: null, end: null });
    };

    const handleCancel = () => {
        // Restablecer el estado al cancelar
        setSelectedEvent(null); // Limpiar el evento seleccionado
        setNewEvent({ title: '', description: '', link: '', type: '', area: '', start: null, end: null }); // Limpiar formulario
        setShowEditDelete(true); // Mostrar nuevamente los botones de editar y eliminar si corresponde
    };

    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <Navbar backgroundColor="#001529" />
            <div style={{ height: '100vh', overflow: 'hidden', padding: '10px' }}>
                {/* Título del calendario */}
                <div style={{ marginBottom: '20px', textAlign: 'center', }}>
                    <h1 style={{
                        color: 'black',
                        fontSize: mobile ? '16px' : '20px',
                        fontFamily: 'copperplate gothic bold',
                        marginTop: '20px'
                    }}>
                        Calendario de Eventos
                    </h1>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', height: 'calc(100% - 60px)', }}>

                    {/* Marco para el formulario */}
                    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px', width: mobile ? '30vw' : '30vw', marginLeft: 'auto', marginRight: 'auto', position: 'relative', zIndex: 4 }}>
                        <div style={{ marginBottom: '1px', textAlign: 'center', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '5px', position: 'relative' }}>
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

                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Departamento:</label>
                                <select
                                    value={newEvent.department_id}
                                    onChange={(e) => setNewEvent({ ...newEvent, department_id: e.target.value })}
                                    style={{
                                        padding: '5px',
                                        width: '185px',
                                        border: '1px solid #ccc', // Marco del select
                                        borderRadius: '4px', // Bordes redondeados
                                        transition: 'box-shadow 0.3s ease', // Transición suave
                                        fontSize: '12px',
                                        marginLeft: '5px'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                >
                                    <option value="">Selecciona un departamento</option>
                                    {departaments.length > 0 ? (
                                        departaments.map((department) => (
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
                                <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Colaboradores:</label>
                                <select
                                    value={newEvent.users}
                                    // onChange={(e) => setNewEvent({ ...newEvent, users: e.target.value })}
                                    onChange={(e) => {
                                        const selectedUserId = parseInt(e.target.value);
                                        // Actualizar tanto user_id como participants_ids con el mismo valor
                                        setNewEvent({
                                            ...newEvent,
                                            user_id: selectedUserId,
                                            participants_ids: [selectedUserId]
                                        });
                                    }}
                                    style={{
                                        padding: '5px',
                                        width: '180px',
                                        border: '1px solid #ccc', // Marco del select
                                        borderRadius: '4px', // Bordes redondeados
                                        transition: 'box-shadow 0.3s ease', // Transición suave
                                        fontSize: '12px',
                                        marginLeft: '5px' // Mueve el select hacia la derecha

                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                    aria-label="Seleccionar Integrante"
                                >
                                    <option value="">Integrantes</option>
                                    {users.length > 0 ? (
                                        users.map((user) => (
                                            <option key={user.id} value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
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
                                        width: '280px',
                                        // maxWidth: '100%', // Los inputs ocuparán el 100% del contenedor si es necesario
                                        border: '1px solid #ccc', // Marco del input
                                        borderRadius: '4px', // Bordes redondeados
                                        transition: 'box-shadow 0.3s ease', // Transición suave
                                        fontSize: '12px',
                                        marginTop: '10px',
                                        marginLeft: '40px' // Mueve el select hacia la derecha
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Descripción:</label>
                                <input
                                    type="text"
                                    placeholder="Descripción"
                                    value={newEvent.description}
                                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                                    style={{
                                        marginRight: '10px',
                                        padding: '5px',
                                        width: '280px',
                                        border: '1px solid #ccc', // Marco del input
                                        borderRadius: '4px', // Bordes redondeados
                                        transition: 'box-shadow 0.3s ease', // Transición suave
                                        fontSize: '12px'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Link(opcion):</label>
                                <input
                                    type="text"
                                    placeholder="Enlace de la reunión "
                                    value={newEvent.link}
                                    onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
                                    style={{
                                        marginRight: '30px',
                                        padding: '5px',
                                        width: '280px',
                                        border: '1px solid #ccc', // Marco del input
                                        borderRadius: '4px', // Bordes redondeados
                                        transition: 'box-shadow 0.3s ease', // Transición suave
                                        fontSize: '12px',
                                        marginLeft: '-5px' // Mueve el select hacia la derecha
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Fecha Inicio:</label>
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
                                            fontSize: '13px',
                                            marginLeft: '5px' // Mueve el select hacia la derecha
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                        />}
                                />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Fecha de Fin:</label>
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
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <label htmlFor="myInput" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: mobile ? '14px' : '14px' }}> Tipo Evento:</label>
                                <select
                                    value={newEvent.type}
                                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                                    style={{
                                        padding: '5px',
                                        width: '180px',
                                        border: '1px solid #ccc', // Marco del select
                                        borderRadius: '4px', // Bordes redondeados
                                        transition: 'box-shadow 0.3s ease', // Transición suave
                                        // marginLeft: '20px',
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
                            </div>

                            {selectedEvent ? (
                                <>
                                    <button onClick={handleUpdateEvent}
                                        style={{
                                            marginLeft: '10px', border: '1px solid #ccc', // Borde del botón
                                            borderRadius: '4px',
                                            padding: '5px 10px',
                                            cursor: 'pointer',
                                            fontSize: mobile ? '10px' : '14px',
                                            transition: 'box-shadow 0.5s ease',
                                            backgroundColor: '#007A33',
                                            color: 'white'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.9)'} // Sombra al pasar el mouse
                                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                    >
                                        Actualizar Evento
                                    </button>
                                    <button onClick={handleDeleteEvent}
                                        style={{
                                            marginLeft: '10px', border: '1px solid #ccc', // Borde del botón
                                            borderRadius: '4px',
                                            padding: '5px 10px',
                                            cursor: 'pointer',
                                            fontSize: mobile ? '10px' : '14px',
                                            transition: 'box-shadow 0.5s ease',
                                            backgroundColor: 'red',
                                            color: 'white'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.9)'} // Sombra al pasar el mouse
                                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                    >
                                        Eliminar Evento
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        style={{
                                            marginLeft: '10px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            padding: '5px 10px',
                                            cursor: 'pointer',
                                            fontSize: mobile ? '10px' : '14px',
                                            transition: 'box-shadow 0.5s ease',
                                            backgroundColor: 'orange', // Color verde claro para el botón de cancelar
                                            color: 'white'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.9)'}
                                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                                    >
                                        Cancelar
                                    </button>
                                </>
                            ) : (
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button
                                        onClick={handleAddEvent}
                                        style={{
                                            // marginLeft: '10px',
                                            border: '1px solid #ccc', // Borde del botón
                                            borderRadius: '4px', // Bordes redondeados
                                            backgroundColor: '#1890ff', // Cambia el color de fondo según sea necesario
                                            color: 'white', // Color del texto
                                            padding: '5px 10px', // Espaciado interno
                                            cursor: 'pointer', // Cambia el cursor al pasar por encima
                                            fontSize: mobile ? '10px' : '14px',
                                            transition: 'box-shadow 0.5s ease',
                                            marginLeft: '200px'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.9)'} // Sombra al pasar el mouse
                                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                                    >
                                        <i className="fas fa-plus-circle" style={{ marginRight: '5px' }}></i> {/* Icono de agregar */}
                                        Agregar Evento
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* aqui termina el formulario de nuevo evento */}

                    <div style={{
                        width: mobile ? '61vw' : '66vw',
                        height: mobile ? '62vh' : '72vh', // Ajustar aquí la altura del calendario
                        overflow: 'hidden',
                    }}>
                        <Calendar
                            localizer={localizer}
                            events={events}
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
            </div>
        </div>
    );
};

export default Calendario;