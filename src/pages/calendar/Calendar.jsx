import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import es from 'date-fns/locale/es';
import { Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/custom-calendar.css'
import { useEffect } from 'react';
import { createEvents, indexEvents } from '../../api/events/events';
import { indexDepartments } from '../../api/departamentos/departments';
import { indexUsers } from '../../api/users/users';
import moment from 'moment/moment';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Button, Dropdown, Checkbox, List, Skeleton } from "antd";
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
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import { FiBriefcase } from 'react-icons/fi';
import { TbUsersPlus } from "react-icons/tb";
import { VscUngroupByRefType } from "react-icons/vsc";
import { IoTimeOutline } from "react-icons/io5";
import { RiSave2Fill } from "react-icons/ri";
import { BsTextParagraph } from "react-icons/bs";
import { MdOutlineLayers } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MultiSelect } from "react-multi-select-component";
import Navbar from '../../componentes/Navbar';

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        ['link', 'video'],
    ]
};

const formats = [
    'bold', 'italic', 'underline', 'blockquote',
    'link', 'video'
];

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
    const { isOpen: isOpenEvent, onOpen: onOpenEvent, onClose: onCloseEvent } = useDisclosure()
    const [newEvent, setNewEvent] = useState({
        department_id: '',
        user_id: '',
        title: '',
        description: '',
        link: '', start: null, end: null, type: '', participants_ids: ''
    });
    const [selected, setSelected] = useState([]);
    const [users, setUsers] = useState([]);
    const [body, setBody] = useState('');
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

        if (!selected.length) {
            alert('El campo Participantes es obligatorio.');
            return;
        }
        console.log(newEvent)
        if (
            newEvent.department_id &&
            newEvent.title &&
            newEvent.start &&
            newEvent.end &&
            newEvent.type &&
            newEvent.start < newEvent.end
        ) {
            try {
                newEvent.department_id = parseInt(newEvent.department_id)
                if (newEvent.link) newEvent.url = newEvent.link;
                delete newEvent.link;

                newEvent.event_type = newEvent.type;
                delete newEvent.type;

                newEvent.description = body;

                newEvent.start_date = moment(newEvent.start).format('YYYY-MM-DDTH:MM');
                newEvent.end_date = moment(newEvent.end).format('YYYY-MM-DDTH:MM');
                delete newEvent.start;
                delete newEvent.end;
                newEvent.user_id = 1;
                newEvent.participants_ids = selected.map(item => item?.value)
                console.log("Estado de newEvent:", newEvent);
                alert(JSON.stringify(newEvent));
                const response = await createEvents({ event: newEvent });
                console.log("Respuesta del servidor:", response);

                if (response.status === true) {
                    console.log("Evento creado con éxito:", response.data);
                    getEvents()
                    onCloseEvent();
                } else {
                    console.error("Error al crear el evento:", response.error);
                }
            } catch (error) {
                console.error("Error en la petición:", error);
            }
        } else {
            console.log("🚀 ~ handleOk 2 ~ newEvent:", newEvent)
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
        <div>
            <Navbar backgroundColor="#001529" />
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
                                                description={<div dangerouslySetInnerHTML={{ __html: item?.description }} />}
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
                                <MdOutlineLayers style={{ fontSize: 15, color: '#ccc', marginRight: 4 }} />
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
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8, paddingTop: 6, gap: 6 }}>
                            <div className='div-container-inputs-form'>
                                <VscUngroupByRefType style={{ fontSize: 25, color: '#00a0df80', border: '1px solid #B6B6B650', borderRadius: 3, padding: 2, marginRight: 2 }} />
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

                            <div className='div-container-inputs-form' style={{ marginTop: 6, marginBottom: 6 }}>
                                <TbUsersPlus style={{ fontSize: 22, color: '#ccc', padding: 3, marginRight: 6 }} />
                                <MultiSelect
                                    options={users}
                                    value={selected}
                                    onChange={setSelected}
                                    //labelledBy="Select"
                                    className='input-multi-text-form'
                                    labelledBy="Select"
                                    hasSelectAll={false}
                                    overrideStrings={{
                                        "selectSomeItems": "Selecciona...",
                                        "allItemsAreSelected": "Todos los elementos seleccionados",
                                        "search": "Buscar",
                                        "clearSearch": "Limpiar búsqueda",
                                        "clearSelected": "Limpiar seleccionados",
                                        "noOptions": "No hay opciones disponibles"
                                    }}
                                />
                            </div>
                            <div className='div-container-inputs-form'>
                                <CiVideoOn style={{ fontSize: 22, color: '#ccc', padding: 3, marginRight: 6 }} />
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
                                <IoTimeOutline style={{ fontSize: 22, color: '#ccc', padding: 3, marginRight: 6 }} />
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
                            <div className='div-container-inputs-form' style={{ alignItems: 'flex-start' }}>
                                <BsTextParagraph style={{ fontSize: 22, color: '#ccc', padding: 3, marginRight: 6 }} />
                                <div style={{ width: '100%', height: 180 }}>
                                    <ReactQuill
                                        modules={modules}
                                        formats={formats}
                                        theme="snow"
                                        value={body}
                                        onChange={setBody}
                                        placeholder="Agregar contenido..."
                                        style={{ height: 135 }}
                                    />
                                </div>
                            </div>

                            <div className='div-container-inputs-form' style={{ justifyContent: 'flex-end' }}>
                                <Button type='primary'
                                    onClick={handleAddEvent}
                                >
                                    <RiSave2Fill style={{ fontSize: 20, color: 'white', marginRight: 6 }} />
                                    Guardar
                                </Button>
                            </div>



                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
};

export default Calendar;