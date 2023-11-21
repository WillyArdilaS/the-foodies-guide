import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const data = {
  labels: ['Menos de $50,000', '$50,000 - $100,000', '$100,000 - $150,000', 'Más de $150,000'],
  datasets: [
    {
      label: 'Número de restaurantes',
      data: [12, 20, 15, 8], 
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutGraphic = () => {
  return <Pie data={data} options={options} />;
};

export default DoughnutGraphic;
