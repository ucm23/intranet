import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

const FormCard = ({ title, children }) => (
    <Card style={{ width: '100%', maxWidth: '900px', margin: '20px auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <Card.Body>
            <Card.Title style={{ textAlign: 'center', color: '#D2691E' }}>{title}</Card.Title>
            {children}
        </Card.Body>
    </Card>
);

const VacacionesForm = () => (
    <Form>
        <Form.Group controlId="formNombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="formFechaInicio">
            <Form.Label>Fecha de inicio</Form.Label>
            <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formFechaFin">
            <Form.Label>Fecha de fin</Form.Label>
            <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
            <FaPaperPlane /> Enviar
        </Button>
    </Form>
);

const PermisosForm = () => (
    <Form>
        <Form.Group controlId="formNombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="formFechaPermiso">
            <Form.Label>Fecha del permiso</Form.Label>
            <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formMotivo">
            <Form.Label>Motivo del permiso</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe el motivo" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
            <FaPaperPlane /> Enviar
        </Button>
    </Form>
);

const ServiciosForm = () => (
    <Form>
        <Form.Group controlId="formNombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="formDescripcionServicio">
            <Form.Label>Descripción del Servicio</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe el servicio solicitado" />
        </Form.Group>
        <Form.Group controlId="formUrgencia">
            <Form.Label>Urgencia</Form.Label>
            <Form.Control as="select">
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
            </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
            <FaPaperPlane /> Enviar
        </Button>
    </Form>
);

const Formularios = ({ selectedSection }) => {
    return (
        <div>
            {selectedSection === 'vacaciones' && (
                <FormCard title="Solicitud de Vacaciones">
                    <VacacionesForm />
                </FormCard>
            )}
            {selectedSection === 'permisos' && (
                <FormCard title="Solicitud de Permisos">
                    <PermisosForm />
                </FormCard>
            )}
            {selectedSection === 'servicios' && (
                <FormCard title="Solicitud de Servicios">
                    <ServiciosForm />
                </FormCard>
            )}
        </div>
    );
};

export default Formularios;
