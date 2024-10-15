import React, { useState, useEffect } from 'react';
import { Table, Button, Form, InputGroup } from 'react-bootstrap';
import { FaEye, FaDownload, FaCheck, FaTimes, FaSearch, FaPaperPlane } from 'react-icons/fa';

const GestionSolicitudes = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [comentario, setComentario] = useState('');

    useEffect(() => {
        fetch('/solicitudes.json')
            .then((response) => response.json())
            .then((data) => setSolicitudes(data))
            .catch((error) => console.error('Error al cargar el archivo JSON:', error));
    }, []);

    const autorizarSolicitud = (id) => {
        setSolicitudes(solicitudes.map(solicitud =>
            solicitud.id === id
                ? { ...solicitud, estado: solicitud.estado === 'Pendiente' ? 'Autorizado' : 'No Autorizado' }
                : solicitud
        ));
        setComentario('');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredSolicitudes = solicitudes.filter(solicitud =>
        solicitud.id.toString().includes(searchTerm) ||
        solicitud.nombre.toLowerCase().includes(searchTerm)
    );

    const handlePdfView = (ruta) => {
        setSelectedPdf(ruta);
    };

    const closePdfView = () => {
        setSelectedPdf(null);
        setComentario('');
    };

    const handleComentarioChange = (e) => {
        setComentario(e.target.value);
    };

    const handleComentarioSubmit = () => {
        console.log('Comentario enviado:', comentario);
        setComentario('');
    };

    const handleDownload = (ruta) => {
        const link = document.createElement('a');
        link.href = ruta;
        link.download = ruta.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ width: '100%', maxWidth: '1100px', margin: '20px auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <h3 style={{ textAlign: 'center', color: '#D2691E' }}>Gestión de Solicitudes</h3>
            <hr style={{ borderTop: '4px solid #D2691E', marginBottom: '20px' }} />

            <InputGroup style={{ width: '100%', maxWidth: '400px', margin: '10px 0' }}>
                <InputGroup.Text>
                    <FaSearch />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Buscar por ID o nombre"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </InputGroup>

            <Table striped bordered hover style={{ marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Tipo de Solicitud</th>
                        <th>Trámite</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSolicitudes.length > 0 ? (
                        filteredSolicitudes.map((solicitud) => (
                            <tr key={solicitud.id}>
                                <td>{solicitud.id}</td>
                                <td>{solicitud.nombre}</td>
                                <td>{solicitud.fecha}</td>
                                <td>{solicitud.tipo_solicitud}</td>
                                <td>{solicitud.nombre_tramite}</td>
                                <td>{solicitud.estado}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <Button 
                                        variant="info" 
                                        size="sm" 
                                        className="me-2" 
                                        onClick={() => handlePdfView(solicitud.ruta)}
                                    >
                                        <FaEye />
                                    </Button>
                                    <Button 
                                        variant="secondary" 
                                        size="sm" 
                                        className="me-2" 
                                        onClick={() => handleDownload(solicitud.ruta)}
                                    >
                                        <FaDownload />
                                    </Button>
                                    <Button
                                        variant={solicitud.estado === 'Autorizado' ? "danger" : "success"}
                                        size="sm"
                                        onClick={() => autorizarSolicitud(solicitud.id)}
                                    >
                                        {solicitud.estado === 'Autorizado' ? <FaTimes /> : <FaCheck />}
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center' }}>Cargando solicitudes...</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {selectedPdf && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4>Vista previa del Documento</h4>
                        <Button variant="link" onClick={closePdfView} style={{ fontSize: '1.5rem', color: 'black' }}>
                            <FaTimes />
                        </Button>
                    </div>
                    <iframe 
                        src={selectedPdf} 
                        width="900" 
                        height="600" 
                        style={{ border: 'none', marginBottom: '10px' }} 
                        title="Vista previa PDF"
                    />
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Comentario (opcional)"
                            value={comentario}
                            onChange={handleComentarioChange}
                            style={{ marginRight: '10px', width: '100%', maxWidth: '400px' }}
                        />
                        <Button variant="primary" onClick={handleComentarioSubmit}>
                            <FaPaperPlane /> Enviar
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GestionSolicitudes;
