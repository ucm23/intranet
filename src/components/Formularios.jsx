// src/pages/tramites/Formularios.jsx

import React from 'react';
import { Form, Button } from 'react-bootstrap';


// Formulario para Solicitudes de Equipamiento
export const FormularioEquipamiento = () => (
    <Form>
        <Form.Group controlId="nombreEquipado">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="tipoEquipamiento">
            <Form.Label>Tipo de Equipamiento</Form.Label>
            <Form.Control as="select">
                <option>Laptop</option>
                <option>Monitor</option>
                <option>Otro</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="justificacionEquipamiento">
            <Form.Label>Justificación</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingresa la justificación para el equipamiento" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Equipamiento
        </Button>
    </Form>
);

// Formulario para Permisos de Acceso a Sistemas
export const FormularioAccesoSistemas = () => (
    <Form>
        <Form.Group controlId="nombreUsuario">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="sistemaSolicitado">
            <Form.Label>Sistema Requerido</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el nombre del sistema" />
        </Form.Group>
        <Form.Group controlId="motivoAcceso">
            <Form.Label>Motivo de Acceso</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingresa el motivo del acceso solicitado" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Acceso
        </Button>
    </Form>
);

// Formulario para Solicitudes de Viajes y Viáticos
export const FormularioViajes = () => (
    <Form>
        <Form.Group controlId="nombreViajero">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="destino">
            <Form.Label>Destino</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el destino del viaje" />
        </Form.Group>
        <Form.Group controlId="fechaViaje">
            <Form.Label>Fecha de Viaje</Form.Label>
            <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="justificacionViaje">
            <Form.Label>Justificación</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingresa la justificación del viaje" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Viaje
        </Button>
    </Form>
);

// Formulario para Permisos y Licencias Médicas
export const FormularioLicencias = () => (
    <Form>
        <Form.Group controlId="nombreSolicitante">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="tipoLicencia">
            <Form.Label>Tipo de Licencia</Form.Label>
            <Form.Control as="select">
                <option>Médica</option>
                <option>Maternidad</option>
                <option>Paternidad</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="justificacionLicencia">
            <Form.Label>Justificación</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingresa la justificación para la licencia" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Licencia
        </Button>
    </Form>
);

// Formulario para Gestión de Incidencias Técnicas
export const FormularioIncidencias = () => (
    <Form>
        <Form.Group controlId="nombreIncidencia">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="descripcionIncidencia">
            <Form.Label>Descripción del Problema</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe el problema técnico" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Reportar Incidencia
        </Button>
    </Form>
);

// Formulario para Solicitudes de Soporte Técnico
export const FormularioSoporte = () => (
    <Form>
        <Form.Group controlId="nombreSoporte">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="descripcionSoporte">
            <Form.Label>Descripción del Problema</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe el problema técnico" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Soporte
        </Button>
    </Form>
);

// Formulario para Solicitud de Asesoría Técnica Interna
export const FormularioAsesoria = () => (
    <Form>
        <Form.Group controlId="nombreAsesoria">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="temaAsesoria">
            <Form.Label>Tema de Asesoría</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el tema de asesoría requerida" />
        </Form.Group>
        <Form.Group controlId="descripcionAsesoria">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción de la asesoría requerida" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Asesoría
        </Button>
    </Form>
);

// Formulario para Asignación de Proyectos Internos
export const FormularioProyectos = () => (
    <Form>
        <Form.Group controlId="nombreProyecto">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="nombreProyectoInterno">
            <Form.Label>Nombre del Proyecto</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el nombre del proyecto" />
        </Form.Group>
        <Form.Group controlId="descripcionProyecto">
            <Form.Label>Descripción del Proyecto</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del proyecto" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Proyecto
        </Button>
    </Form>
);

// Formulario para Revisión y Actualización de Infraestructura
export const FormularioInfraestructura = () => (
    <Form>
        <Form.Group controlId="nombreInfraestructura">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
        </Form.Group>
        <Form.Group controlId="descripcionInfraestructura">
            <Form.Label>Descripción de Infraestructura</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe la infraestructura a revisar" />
        </Form.Group>
        <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
            Solicitar Revisión
        </Button>
    </Form>
);
