import React, { useState } from 'react';
import data from '../assets/tabla_contenidos.json';
import { Table, Button, Form } from 'react-bootstrap';

const TablaContenidos = () => {
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(''); // Estado para el filtro de proyecto

    // Manejar la selección del proyecto
    const handleProyectoChange = (event) => {
        setProyectoSeleccionado(event.target.value);
    };

    // Filtrar datos según el proyecto seleccionado
    const datosFiltrados = proyectoSeleccionado
        ? data.filter((item) => item.proyecto === proyectoSeleccionado)
        : data;

    return (
        <div>     
            {/* Filtro de proyecto */}
            <Form.Group controlId="filterProyecto">
                <Form.Label>Filtrar por Proyecto:</Form.Label>
                <Form.Control as="select" value={proyectoSeleccionado} onChange={handleProyectoChange}>
                    <option value="">Todos los Proyectos</option>
                    <option value="VICTUM RE">VICTUM RE</option>
                    <option value="VICTUM INTRANET">VICTUM INTRANET</option>
                    <option value="TICONSA">TICONSA</option>
                    <option value="VICTUM GEO">VICTUM GEO</option>
                </Form.Control>
            </Form.Group>

            {/* Tabla de Contenidos */}
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Departamento</th>
                        <th>Proyecto</th>
                        <th>Tipo de Manual</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datosFiltrados.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.departamento}</td>
                            <td>{item.proyecto}</td>
                            <td>{item.tipoManual}</td>
                            <td>{item.titulo}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.fecha}</td>
                            <td>
                                <Button variant="primary" className="mx-1">Ver</Button>
                                <Button variant="success" className="mx-1">Descargar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TablaContenidos;
