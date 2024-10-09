import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Button, Form, Table } from 'react-bootstrap';
import { FaDownload, FaClipboardList, FaFileAlt, FaTasks, FaEye, FaPrint, FaCheckCircle } from 'react-icons/fa'; 
import NavBar from '../../components/NavBar';
import SectionCarousel from '../../components/SectionCarousel';
import Footer from '../../components/Footer';

const FormularioPermisos = () => (
    <>
        <h5 style={{ color: '#D2691E' }}>Solicitud de Permisos Especiales</h5>
        <hr style={{ borderTop: '2px solid #D2691E' }} />
        <Form>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>
            <Form.Group controlId="motivoPermiso">
                <Form.Label>Motivo del Permiso</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el motivo del permiso" />
            </Form.Group>
            <Form.Group controlId="fechaPermiso">
                <Form.Label>Fecha del Permiso</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="horaPermiso">
                <Form.Label>Hora de Inicio</Form.Label>
                <Form.Control type="time" />
            </Form.Group>
            <Form.Group controlId="archivo">
                <Form.Label>Seleccionar Archivo</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
                Enviar Solicitud
            </Button>
        </Form>
    </>
);

const FormularioVacaciones = () => (
    <>
        <h5 style={{ color: '#D2691E' }}>Solicitud de Vacaciones</h5>
        <hr style={{ borderTop: '2px solid #D2691E' }} />
        <Form>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>
            <Form.Group controlId="fechaInicio">
                <Form.Label>Fecha de Inicio</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="fechaFin">
                <Form.Label>Fecha de Finalización</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="horaInicio">
                <Form.Label>Hora de Inicio</Form.Label>
                <Form.Control type="time" />
            </Form.Group>
            <Form.Group controlId="motivoVacaciones">
                <Form.Label>Motivo de las Vacaciones</Form.Label>
                <Form.Control type="text" placeholder="Describe el motivo de tus vacaciones" />
            </Form.Group>
            <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
                Enviar Solicitud
            </Button>
        </Form>
    </>
);

const FormularioNuevoServicio = () => (
    <>
        <h5 style={{ color: '#D2691E' }}>Solicitud de Nuevo Servicio</h5>
        <hr style={{ borderTop: '2px solid #D2691E' }} />
        <Form>
            <Form.Group controlId="nombreServicio">
                <Form.Label>Nombre del Servicio</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el nombre del servicio" />
            </Form.Group>
            <Form.Group controlId="descripcionServicio">
                <Form.Label>Descripción del Servicio</Form.Label>
                <Form.Control type="text" placeholder="Descripción breve del servicio" />
            </Form.Group>
            <Form.Group controlId="archivoServicio">
                <Form.Label>Adjuntar Documento</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button className="mt-4 mx-auto d-block" variant="primary" style={{ width: '50%' }} type="submit">
                Solicitar Servicio
            </Button>
        </Form>
    </>
);

const FormularioGestion = () => {
    const [data, setData] = useState([
        { id: 1, nombre: 'Juan Pérez', fecha: '2024-10-01', tipo: 'Vacaciones', autorizado: false },
        { id: 2, nombre: 'María Gómez', fecha: '2024-10-02', tipo: 'Permiso', autorizado: false },
    ]);

    const toggleAutorizado = (id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, autorizado: !item.autorizado } : item
            )
        );
    };

    return (
        <>
            <h5 style={{ color: '#D2691E' }}>Gestión de Solicitudes</h5>
            <hr style={{ borderTop: '2px solid #D2691E' }} />
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.fecha}</td>
                            <td>{item.tipo}</td>
                            <td>
                                <span style={{ color: item.autorizado ? 'green' : 'red' }}>
                                    {item.autorizado ? 'Autorizado' : 'No Autorizado'}
                                </span>
                            </td>
                            <td>
                                <Button variant="primary" className="mr-2">
                                    <FaEye /> Ver
                                </Button>
                                <Button variant="success" className="mr-2">
                                    <FaPrint /> Imprimir
                                </Button>
                                <Button
                                    variant={item.autorizado ? 'success' : 'danger'}
                                    onClick={() => toggleAutorizado(item.id)}
                                >
                                    <FaCheckCircle /> {item.autorizado ? 'Desautorizar' : 'Autorizar'}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

const TramitesServicios = () => {
    const [selectedSection, setSelectedSection] = useState('tramites');

    const images = [
        '/imgNoticias/proyecto6.jpg',
        '/imgNoticias/proyecto7.jpg',
        '/imgNoticias/proyecto6.jpg',
    ];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar backgroundColor="#001529" />
            <SectionCarousel
                images={images}
                sectionTitle="Trámites, Servicios y Gestión"
                sectionDescription="Facilita la gestión de solicitudes, trámites internos y servicios."
            />

            <Container fluid className="flex-grow-1 d-flex mt-4 mb-4">
                <Row className="w-100">
                    <Col md={2} className="bg-light p-3">
                        <Nav className="flex-column" variant="pills">
                            <h5>Trámites</h5>
                            <Nav.Item>
                                <Nav.Link
                                    active={selectedSection === 'vacaciones'}
                                    onClick={() => setSelectedSection('vacaciones')}
                                    style={{ color: selectedSection === 'vacaciones' ? 'darkblue' : 'navy' }}
                                >
                                    <FaFileAlt className="mr-2" /> Solicitudes de Vacaciones
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    active={selectedSection === 'permisos'}
                                    onClick={() => setSelectedSection('permisos')}
                                    style={{ color: selectedSection === 'permisos' ? 'darkblue' : 'navy' }}
                                >
                                    <FaClipboardList className="mr-2" /> Permisos Especiales
                                </Nav.Link>
                            </Nav.Item>

                            <h5 className="mt-4">Servicios</h5>
                            <Nav.Item>
                                <Nav.Link
                                    active={selectedSection === 'nuevoServicio'}
                                    onClick={() => setSelectedSection('nuevoServicio')}
                                    style={{ color: selectedSection === 'nuevoServicio' ? 'darkblue' : 'navy' }}
                                >
                                    <FaTasks className="mr-2" /> Nuevo Servicio
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    active={selectedSection === 'gestion'}
                                    onClick={() => setSelectedSection('gestion')}
                                    style={{ color: selectedSection === 'gestion' ? 'darkblue' : 'navy' }}
                                >
                                    <FaClipboardList className="mr-2" /> Gestión de Solicitudes
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={10} className="p-4">
                        {selectedSection === 'vacaciones' && <FormularioVacaciones />}
                        {selectedSection === 'permisos' && <FormularioPermisos />}
                        {selectedSection === 'nuevoServicio' && <FormularioNuevoServicio />}
                        {selectedSection === 'gestion' && <FormularioGestion />}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default TramitesServicios;
