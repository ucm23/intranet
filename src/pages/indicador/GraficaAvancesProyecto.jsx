import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const GraficaAvancesProyecto = ({ proyectos }) => {
    const colores = [
        'rgba(255, 0, 0, 0.6)', // Rojo
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(0, 255, 0, 0.6)', // Verde
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 255, 0, 0.6)', // Amarillo
        'rgba(128, 0, 128, 0.6)', // Púrpura
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 165, 0, 0.6)', // Naranja
        
    ];

    // Datos para la gráfica de proyectos
    const dataProyectos = {
        labels: proyectos.map(proyecto => proyecto.nombre),
        datasets: [
            {
                label: 'Avance (%)',
                data: proyectos.map(proyecto => proyecto.avance),
                backgroundColor: colores.slice(0, proyectos.length),
                borderColor: colores.slice(0, proyectos.length).map(color => color.replace('0.6', '1')),
                borderWidth: 1,
            },
        ],
    };

    // Opciones para la gráfica de proyectos
    const optionsProyectos = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    // Preparar datos para la gráfica de efectividad 
    const responsables = {};
    proyectos.forEach(proyecto => {
        for (const [responsable, efectividad] of Object.entries(proyecto.efectividades || {})) {
            if (!responsables[responsable]) {
                responsables[responsable] = Array(proyectos.length).fill(0); // Inicializar con 0 por cada proyecto
            }
            // Asignar la efectividad correspondiente a cada proyecto
            const index = proyectos.indexOf(proyecto);
            responsables[responsable][index] = efectividad;
        }
    });

    const dataEfectividad = {
        labels: proyectos.map(proyecto => proyecto.nombre),
        datasets: Object.entries(responsables).map(([responsable, efectividades], index) => ({
            label: responsable,
            data: efectividades,
            backgroundColor: colores[index % colores.length],
            borderColor: colores[index % colores.length].replace('0.6', '1'),
            borderWidth: 1,
        })),
    };

    // Opciones para la gráfica de efectividad
    const optionsEfectividad = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Proyectos',
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Efectividad (%)',
                },
            },
        },
    };

    const chartStyles = {
        width: '400px',
        height: '400px',
        marginBottom: '50px',
    };

    return (
        <div>
            <h3>Avances por proyecto</h3>
            {/* Gráfica de avances de proyectos */}
            <div style={chartStyles}>
                <Doughnut data={dataProyectos} options={optionsProyectos} />
            </div>

            {/* Título para la gráfica de efectividad */}
            <h3>Efectividad por responsable por proyecto</h3>

            {/* Gráfica de efectividad de los colaboradores */}
            <div style={chartStyles}>
                <Bar data={dataEfectividad} options={optionsEfectividad} />
            </div>
        </div>
    );
};

export default GraficaAvancesProyecto;
