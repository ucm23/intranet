import React, { useState } from 'react';
import Navbar from '../../componentes/Navbar';
import { useNavigate } from 'react-router-dom';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import es from 'date-fns/locale/es';
import { Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
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
import CalendarEventModal from './CalendarEventModal';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Button, Form, Input, Flex, Dropdown, Checkbox, Space, Avatar, List, Skeleton } from "antd";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { RightOutlined } from '@ant-design/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FiBriefcase } from 'react-icons/fi';
//import { Select } from '@chakra-ui/react'
import { Select } from 'antd';
import { Divider } from '@chakra-ui/react'

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

const Calendar = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const { isOpen: isOpenEvent, onOpen: onOpenEvent, onClose: onCloseEvent } = useDisclosure()
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
    const [eventsByDay, setEventsByDay] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEditDelete, setShowEditDelete] = useState(true);
    const [dateSelect, setDateSelect] = useState(new Date().toISOString().split('T')[0])

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
        }
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
                    console.log("Evento creado con éxito:", response.data);
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

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = async () => {
        if (!newEvent.department_id) {
            alert('El campo Departamento es obligatorio.');
            return;
        }
        if (!newEvent.participants_ids) {
            alert('El campo Participantes es obligatorio.');
            return;
        }

        console.log("🚀 ~ handleOk 1 ~ newEvent:", newEvent)

        if (
            newEvent.department_id &&
            newEvent.title &&
            newEvent.description &&
            newEvent.start &&
            newEvent.end &&
            newEvent.type &&
            newEvent.participants_ids &&
            newEvent.start <= newEvent.end
        ) {
            try {
                newEvent.department_id = parseInt(newEvent.department_id);

                if (newEvent.link) newEvent.url = newEvent.link;
                delete newEvent.link;

                newEvent.event_type = newEvent.type;
                delete newEvent.type;

                // Ajuste del formato de las fechas
                newEvent.start_date = moment(newEvent.start).format('YYYY-MM-DDTHH:mm');
                newEvent.end_date = moment(newEvent.end).format('YYYY-MM-DDTHH:mm');
                delete newEvent.start;
                delete newEvent.end;

                newEvent.user_id = 1;

                console.log("Estado de newEvent:", newEvent);
                alert(JSON.stringify(newEvent));

                const response = await createEvents({ event: newEvent });
                console.log("Respuesta del servidor:", response);

                if (response.status === true) {
                    console.log("Evento creado con éxito:", response.data);
                } else {
                    console.error("Error al crear el evento:", response.error);
                }
            } catch (error) {
                console.error("Error en la petición:", error);
            }
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
        console.log("🚀 ~ handleOk 2 ~ newEvent:", newEvent)
        setIsModalVisible(false);
    };

    const handleCerrar = () => {
        setIsModalVisible(false);
    };

    const items = [
        {
            label: 'Cumpleaños',
            key: '1',
        },
        {
            label: 'Reunión programada',
            key: '2',
        },
    ];

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    const options = [
        {
            label: 'Cumpleaños',
            value: 1,
        },
        {
            label: 'Reuniones',
            value: 2,
        },
        {
            label: 'Curso',
            value: 3,
        },
    ];

    const handleSelectSlot = (slotInfo) => {
        const filter = events.filter(event => {
            const eventDate = new Date(event.start).toISOString().split('T')[0];
            return eventDate < new Date(slotInfo?.start).toISOString().split('T')[0];
        });
        setEventsByDay(filter)
        setDateSelect(new Date(slotInfo?.start).toISOString().split('T')[0])
    };

    return (
        <>
            <SplitterLayout
                percentage={true}
                primaryMinSize={12}
                primaryMaxSize={12}
                secondaryInitialSize={88}
                secondaryMinSize={88}
                customClassName="my-splitter-layout"
            >
                <div>
                    <Dropdown.Button
                        type="primary"
                        loading={false}
                        menu={{
                            items,
                        }}
                        size='large'
                        onClick={onOpenEvent}
                        style={{ padding: '10px 0px 10px 8px' }}
                    >
                        Crear
                    </Dropdown.Button>
                    <Accordion>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Calendarios
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Checkbox.Group options={options} defaultValue={[1]} onChange={onChange} />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <SplitterLayout
                    percentage={true}
                    primaryMinSize={50}
                    primaryMaxSize={100}
                    secondaryMinSize={20}
                    secondaryMaxSize={50}
                    secondaryInitialSize={25}
                    customClassName="my-inner-splitter-layout"
                >
                    <BigCalendar
                        selectable
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
                        onSelectSlot={handleSelectSlot}
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
                    <div style={{ backgroundColor: 'white', padding: '10px 0px 10px 8px' }}>
                        <h2>
                            <Box as='span' flex='1' textAlign='left'>
                                {dateSelect}
                            </Box>
                        </h2>
                        <List
                            className="demo-loadmore-list"
                            loading={false}
                            itemLayout="horizontal"
                            //loadMore={loadMore}
                            dataSource={eventsByDay}
                            renderItem={(item) => {
                                console.log("🚀 ~ Calendar ~ item:", item)
                                return (
                                    <List.Item
                                        actions={[<RightOutlined />]}
                                    >
                                        <Skeleton avatar title={false} loading={item?.loading} active>
                                            <List.Item.Meta
                                                title={<a href="https://ant.design">{item?.title}</a>}
                                                description={item?.description}
                                            />
                                            {/*<div>content</div>*/}
                                        </Skeleton>
                                    </List.Item>
                                )
                            }}
                        />
                    </div>
                </SplitterLayout>
            </SplitterLayout>
            <Modal onClose={onCloseEvent} size={'6xl'} isOpen={isOpenEvent} scrollBehavior={'inside'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='modal-header-bg'>Nuevo evento</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='modal-body-create'>
                        <Card style={{ display: 'flex', flexDirection: 'row', padding: 3, gap: 6 }}>
                            <div className='select-options-form div-container-inputs-form'>
                                <FiBriefcase style={{ fontSize: 15, color: '#ccc', marginRight: 4 }} />
                                <select
                                    value={newEvent.department_id}
                                    onChange={(e) => setNewEvent({ ...newEvent, department_id: e.target.value })}
                                    className='without-focus'
                                >
                                    <option>Departamento</option>
                                    {departaments.length > 0 ?
                                        departaments.map((item) => <option key={`sel-dep-event-${item?.id}-${item?.name}`} value={item?.id}>{item?.name}</option>)
                                        : <option disabled>No hay departamentos disponibles</option>}
                                </select>
                            </div>
                            <div style={{ width: 1, height: 'auto', backgroundColor: '#B6B6B699' }} />
                            <div className='select-options-form div-container-inputs-form'>
                                <FiBriefcase style={{ fontSize: 15, color: '#ccc', marginRight: 4 }} />
                                <select
                                    value={newEvent.type}
                                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                                    className='without-focus'
                                >
                                    <option>Tipo</option>
                                    {['Reunión', 'Curso', 'Cumpleaños', 'Otro'].map((item) => <option key={`sel-type-event-${item}`} value={item}>{item}</option>)}
                                </select>
                            </div>
                        </Card>
                        <Card style={{ display: 'flex', flexDirection: 'column', marginTop: 8, padding: 6, gap: 6 }}>
                            <div className='div-container-inputs-form'>
                                <FiBriefcase style={{ fontSize: 22, color: '#ccc', border: '1px solid #B6B6B650', borderRadius: 3, padding: 3, marginRight: 6 }} />
                                <input
                                    type="text"
                                    placeholder="Agregar título"
                                    value={newEvent.title}
                                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                    //className='input-select-calendar'
                                    className='input-text-form'
                                    style={{ fontSize: 20 }}
                                />
                            </div>
                            <div className='div-container-inputs-form'>
                                <FiBriefcase style={{ fontSize: 22, color: '#ccc', border: '1px solid #B6B6B650', borderRadius: 3, padding: 3, marginRight: 6 }} />
                                <input
                                    type="text"
                                    placeholder="Liga de videoconferencia"
                                    value={newEvent.link}
                                    onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
                                    //className='input-select-calendar'
                                    className='input-text-form'
                                //style={{ fontSize: 20 }}
                                />
                            </div>
                            <div className='div-container-inputs-form'>
                                <FiBriefcase style={{ fontSize: 22, color: '#ccc', border: '1px solid #B6B6B650', borderRadius: 3, padding: 3, marginRight: 6 }} />
                                <div className='div-container-inputs-form' style={{ gap: 4 }}>
                                    <DatePicker
                                        placeholderText="Fecha de inicio"
                                        selected={newEvent.start}
                                        onChange={(start) => setNewEvent({ ...newEvent, start })}
                                        showTimeSelect
                                        dateFormat="Pp"
                                        customInput={
                                            <input className='input-date-calendar' />}
                                    />
                                    <p style={{ color: '#B6B6B650' }}>_</p>
                                    <DatePicker
                                        placeholderText="Fecha de finalización"
                                        selected={newEvent.end}
                                        onChange={(end) => setNewEvent({ ...newEvent, end })}
                                        showTimeSelect
                                        dateFormat="Pp"
                                        minDate={newEvent.start || null}
                                        customInput={
                                            <input className='input-date-calendar' />}
                                    />
                                </div>
                            </div>

                            <label className='label-input-modal'>Descripción:</label>
                            <input
                                type="text"
                                placeholder="Descripción"
                                value={newEvent.description}
                                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                                className='input-select-calendar'
                            />
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <Button type='primary'
                            onClick={() => {
                                handleAddEvent();
                                onCloseEvent();
                            }}
                        >
                            <i className="fas fa-plus-circle" style={{ marginRight: '5px' }}></i> {/* Icono de agregar */}
                            Guardar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default Calendar;