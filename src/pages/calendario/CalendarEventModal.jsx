import React from 'react';
import { Modal, Form, Input, Select, DatePicker } from 'antd';
import moment from 'moment/moment';

const { Option } = Select;

const CalendarEventModal = ({ visible, onClose, newEvent, setNewEvent, departaments, users, handleOk}) => {
    return (
        <Modal
            title="Nuevo Evento"
            visible={visible}
            onOk={handleOk}
            // onOk={handleAddEvent}
            onCancel={onClose}
            centered
            width={600}
        >
            <Form layout="vertical">
                <Form.Item label="Departamento">
                    <Select
                        value={newEvent.department_id}
                        onChange={(value) => setNewEvent({ ...newEvent, department_id: value })}
                        placeholder="Selecciona un departamento"
                    >
                        <Option value="">Selecciona un departamento</Option>
                        {departaments.length > 0 ? (
                            departaments.map((department) => (
                                <Option key={department.id} value={department.id}>
                                    {department.name}
                                </Option>
                            ))
                        ) : (
                            <Option value="" disabled>No hay departamentos disponibles</Option>
                        )}
                    </Select>
                </Form.Item>

                <Form.Item label="Colaboradores">
                    <Select
                        value={newEvent.user_id}
                        onChange={(value) => {
                            const selectedUserId = parseInt(value);
                            setNewEvent({
                                ...newEvent,
                                user_id: selectedUserId,
                                participants_ids: [selectedUserId],
                            });
                        }}
                        placeholder="Integrantes"
                    >
                        <Option value="">Integrantes</Option>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <Option key={user.id} value={user.id}>
                                    {`${user.first_name} ${user.last_name}`}
                                </Option>
                            ))
                        ) : (
                            <Option value="" disabled>No hay participantes disponibles</Option>
                        )}
                    </Select>
                </Form.Item>

                <Form.Item label="Título">
                    <Input
                        placeholder="Título del evento"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Descripción">
                    <Input
                        placeholder="Descripción"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Link (opcional)">
                    <Input
                        placeholder="Enlace de la reunión"
                        value={newEvent.link}
                        onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Fecha Inicio">
                    <DatePicker
                        showTime
                        placeholderText="Fecha de inicio"
                        selected={newEvent.start ? moment(newEvent.start).toDate() : null}
                        onChange={(start) => setNewEvent({ ...newEvent, start: start ? moment(start).toDate() : null })}
                        showTimeSelect
                        timeFormat="HH:mm" // Configuración del formato de la hora
                        timeIntervals={15}  // Intervalos de 15 minutos para la selección de la hora
                        dateFormat="dd/MM/yyyy h:mm aa"  // Formato para mostrar la fecha y la hora
                        customInput={
                            <input style={{
                                marginRight: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '13px',
                                marginLeft: '5px'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                            />
                        }
                    />
                </Form.Item>

                <Form.Item label="Fecha de Fin">
                    <DatePicker
                        showTime
                        placeholderText="Fecha de finalización"
                        selected={newEvent.end ? moment(newEvent.end).toDate() : null}
                        onChange={(end) => setNewEvent({ ...newEvent, end: end ? moment(end).toDate() : null })}
                        showTimeSelect
                        timeFormat="HH:mm" // Configuración del formato de la hora
                        timeIntervals={15}  // Intervalos de 15 minutos para la selección de la hora
                        dateFormat="dd/MM/yyyy h:mm aa"  // Formato para mostrar la fecha y la hora
                        customInput={
                            <input style={{
                                marginRight: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                transition: 'box-shadow 0.3s ease',
                                fontSize: '13px'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                            />
                        }
                    />
                </Form.Item>

                <Form.Item label="Tipo Evento">
                    <Select
                        value={newEvent.type}
                        onChange={(value) => setNewEvent({ ...newEvent, type: value })}
                        placeholder="Tipo de evento"
                    >
                        <Option value="reunion">Reunión</Option>
                        <Option value="curso">Curso</Option>
                        <Option value="cumpleaños">Cumpleaños</Option>
                        <Option value="otro">Otro</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CalendarEventModal;