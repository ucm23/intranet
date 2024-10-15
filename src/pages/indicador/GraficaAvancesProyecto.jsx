// src/components/GraficaAvancesProyecto.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficaAvancesProyecto = ({ proyectos }) => {
  const colores = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
  ];

  const data = {
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

  const options = {
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

  const chartStyles = {
    width: '400px',
    height: '400px',
  };

  return (
    <div style={chartStyles}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default GraficaAvancesProyecto;
