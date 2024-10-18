import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const FormCard = ({ title, children }) => (
    <Card style={{ width: '100%', maxWidth: '900px', margin: '20px auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <Card.Body>
            <Card.Title style={{ textAlign: 'center', color: '#D2691E' }}>{title}</Card.Title>
            {children}
        </Card.Body>
    </Card>
);

const PDFUploader = () => (
    <Form.Group controlId="formFilePdf">
        <Form.Label>Cargar Formato en PDF</Form.Label>
        <Form.Control type="file" accept="application/pdf" />
    </Form.Group>
);

const CamposServicios = () => (
    <>
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
    </>
);

const AgregarSolicitudes = () => {
    const [tipoSolicitud, setTipoSolicitud] = useState('tramite');

    return (
        <FormCard title="Agregar Nuevas Solicitudes">
            <Form>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" required />
                </Form.Group>

                <Form.Group controlId="formNumeroID">
                    <Form.Label>Número de Identificación</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu número de identificación" required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required />
                </Form.Group>

                <Form.Group controlId="formTipoSolicitud">
                    <Form.Label>Tipo de Solicitud</Form.Label>
                    <Form.Control as="select" value={tipoSolicitud} onChange={(e) => setTipoSolicitud(e.target.value)} required>
                        <option value="tramite">Trámite</option>
                        <option value="servicio">Servicio</option>
                    </Form.Control>
                </Form.Group>

                {tipoSolicitud === 'servicio' && <CamposServicios />}

                <Form.Group controlId="formDescripcionAdicional">
                    <Form.Label>Descripción Adicional</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Agrega una descripción adicional si es necesario" />
                </Form.Group>

                <PDFUploader />

                <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
                    <Button variant="primary" type="submit">
                        Enviar Solicitud
                    </Button>
                </div>
            </Form>
        </FormCard>
    );
};

export default AgregarSolicitudes;
