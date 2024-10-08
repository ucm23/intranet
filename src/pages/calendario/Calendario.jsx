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
    const [newEvent, setNewEvent] = useState({ title: '', start: null, end: null });
    const [events, setEvents] = useState([
        {
            title: 'Reunión de equipo',
            start: new Date(2023, 7, 29, 10, 0),
            end: new Date(2023, 7, 29, 12, 0),
        },
        {
            title: 'Lanzamiento del producto',
            start: new Date(2023, 7, 30, 14, 0),
            end: new Date(2023, 7, 30, 15, 0),
        },
        {
            title: 'Conferencia',
            start: new Date(2023, 8, 1, 9, 0),
            end: new Date(2023, 8, 1, 10, 0),
        },
        {
            title: 'Evento de Prueba',
            start: new Date(),
            end: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hora después
        },
    ]);
    const [selectedEvent, setSelectedEvent] = useState(null);

   

    const handleAddEvent = () => {
        console.log('Intentando agregar evento:', newEvent);
        if (newEvent.title && newEvent.start && newEvent.end && newEvent.start < newEvent.end) {
            setEvents([...events, newEvent]);
            setNewEvent({ title: '', start: null, end: null });
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };


    const handleEditEvent = (event) => {
        setSelectedEvent(event);
        setNewEvent({ title: event.title, start: event.start, end: event.end });
    };

    const handleUpdateEvent = () => {
        if (newEvent.title && newEvent.start && newEvent.end && newEvent.start < newEvent.end) {
            const updatedEvents = events.map(evt => 
                evt.start === selectedEvent.start ? { ...evt, title: newEvent.title, start: newEvent.start, end: newEvent.end } : evt
            );
            setEvents(updatedEvents);
            setSelectedEvent(null);
            setNewEvent({ title: '', start: null, end: null });
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    const handleDeleteEvent = () => {
        const updatedEvents = events.filter(evt => evt.start !== selectedEvent.start);
        setEvents(updatedEvents);
        setSelectedEvent(null);
        setNewEvent({ title: '', start: null, end: null });
    };

    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <Navbar backgroundColor="#001529" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                overflow: 'hidden',
            }}>
                <h1 style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: mobile ? '16px' : '20px',
                    fontFamily: 'copperplate gothic bold',
                    marginTop: '-90px'
                }}>
                    Calendario de Eventos
                </h1>
                <p></p>
                {/* Marco para el formulario */}
                <div style={{
                    border: '1px solid #ccc', // Borde del marco
                    borderRadius: '8px', // Bordes redondeados
                    padding: '20px', // Espaciado interno
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Sombra
                    marginBottom: '20px',
                    width: mobile ? '85vw' : '80vw', // Ancho del marco
                    height:mobile ? '10vw' : '5vw', // Ancho del marco
                }}>
                    <div style={{
                        marginBottom: '20px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <h2 style={{
                            color: 'black',
                            fontSize: mobile ? '10px' : '14px',
                            fontWeight: 'bold', // Negrita
                            fontFamily: 'Arial, sans-serif', // Cambia la fuente si es necesario
                            marginRight: '10px', // Espacio entre el título y los inputs
                            color: '#001529', // Cambia este color según tu preferencia
                        }}>
                            {/* <i className="fas fa-plus-circle" style={{ marginRight: '5px' }}></i> Icono de agregar */}
                            Nuevo Evento
                           {/* + Nuevo Evento */}
                        </h2>

                        <input
                            type="text"
                            placeholder="Título del evento"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            style={{ 
                                marginRight: '10px', 
                                padding: '5px', 
                                width: '200px',
                                border: '1px solid #ccc', // Marco del input
                                borderRadius: '4px', // Bordes redondeados
                                transition: 'box-shadow 0.3s ease' // Transición suave
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'} // Sombra al pasar el mouse
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'} // Quitar sombra al salir
                       
                        />

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
                                    borderRadius: '4px' // Bordes redondeados
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
                                    borderRadius: '4px' ,// Bordes redondeados
                                    transition: 'box-shadow 0.3s ease' // Transición suave
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

                <div style={{
                    width: mobile ? '85vw' : '80vw',
                    height: mobile ? '50vh' : '60vh', // Ajustar aquí la altura del calendario
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
                            fontSize: '12px'
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
                        onSelectEvent={handleEditEvent}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calendario;
