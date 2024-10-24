import React, { useState, useEffect } from 'react';
import { Table, Button, Form, InputGroup } from 'react-bootstrap';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const GestionTiposSolicitudes = () => {
    const [tiposSolicitudes, setTiposSolicitudes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Simulación de carga de datos desde un JSON o API
        const cargarTiposSolicitudes = async () => {
            try {
                const response = await fetch('/tipos_solicitudes.json');
                const data = await response.json();
                setTiposSolicitudes(data);
            } catch (error) {
                console.error('Error al cargar los tipos de solicitudes:', error);
            }
        };

        cargarTiposSolicitudes();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredTiposSolicitudes = tiposSolicitudes.filter(tipo =>
        tipo.id.toString().includes(searchTerm) ||
        tipo.tipo.toLowerCase().includes(searchTerm)
    );

    const handleEdit = (id) => {
        console.log('Modificar tipo de solicitud con ID:', id);
        // Aquí puedes implementar la lógica para editar el tipo de solicitud
    };

    const handleDelete = (id) => {
        console.log('Eliminar tipo de solicitud con ID:', id);
        setTiposSolicitudes(tiposSolicitudes.filter(tipo => tipo.id !== id));
    };

    return (
        <div style={{ width: '100%', maxWidth: '1100px', margin: '20px auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <h3 style={{ textAlign: 'center', color: '#D2691E' }}>Gestión de Tipos de Solicitudes</h3>
            <hr style={{ borderTop: '4px solid #D2691E', marginBottom: '20px' }} />

            <InputGroup style={{ width: '100%', maxWidth: '400px', margin: '10px 0' }}>
                <InputGroup.Text>
                    <FaSearch />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Buscar por ID o tipo"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </InputGroup>

            <Table striped bordered hover style={{ marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo de Solicitud</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTiposSolicitudes.length > 0 ? (
                        filteredTiposSolicitudes.map((tipo) => (
                            <tr key={tipo.id}>
                                <td>{tipo.id}</td>
                                <td>{tipo.tipo}</td>
                                <td>{tipo.descripcion}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <Button 
                                        variant="warning" 
                                        size="sm" 
                                        className="me-2" 
                                        onClick={() => handleEdit(tipo.id)}
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button 
                                        variant="danger" 
                                        size="sm" 
                                        onClick={() => handleDelete(tipo.id)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No hay tipos de solicitudes disponibles.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default GestionTiposSolicitudes;
