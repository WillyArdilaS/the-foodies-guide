import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const BarGraphic = () => {

    // data de ejemplo
    const restaurantesBogota = [
        { nombre: 'La Cocina del Chef', calificacion: 4.5 },
        { nombre: 'Sabor Capitalino', calificacion: 3.2 },
        { nombre: 'Gastronomía Bogotana', calificacion: 4.0 },
        { nombre: 'El Rincón Sabroso', calificacion: 2.8 },
        { nombre: 'Sabores de la Ciudad', calificacion: 5.0 },
        { nombre: 'Platos Criollos', calificacion: 3.7 },
        { nombre: 'Aromas de Bogotá', calificacion: 4.1 },
        { nombre: 'Delicias en el Centro', calificacion: 2.5 },
        { nombre: 'Gusto Capital', calificacion: 4.8 },
        { nombre: 'El Sazón Bogotano', calificacion: 3.9 }
    ];

    const restaurantesOrdenados = [...restaurantesBogota].sort((a, b) => b.calificacion - a.calificacion);

    const labels = restaurantesOrdenados.map((restaurante) => restaurante.nombre);
    const calificaciones = restaurantesOrdenados.map((restaurante) => restaurante.calificacion);

    
    const customPastelColors = [
        'rgba(255, 182, 193, 0.8)',
        'rgba(255, 215, 64, 0.8)',
        'rgba(255, 228, 181, 0.8)',
        'rgba(173, 216, 230, 0.8)',
        'rgba(176, 224, 230, 0.8)',
        'rgba(221, 160, 221, 0.8)',
        'rgba(220, 220, 220, 0.8)',
        'rgba(255, 228, 196, 0.8)',
        'rgba(152, 251, 152, 0.8)',
        'rgba(240, 230, 140, 0.8)'
    ];

    const data = {
        labels: labels,
        datasets: [{
            data: calificaciones,
            backgroundColor: customPastelColors,
            borderColor: customPastelColors,
            borderWidth: 1,
            label: 'Calificación',
        }]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'TOP 10 mejores restaurantes calificados',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarGraphic;
