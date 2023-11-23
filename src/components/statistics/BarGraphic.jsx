import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraphic = ({bdurl}) => {
    const [restaurantesBogota, setRestaurantesBogota] = useState([]);

    useEffect(() => {
        setRestaurantesBogota([]);
      
        axios.get(`http://localhost:3000/restaurantes/categoria/${bdurl}`)
        .then((res) => {
            const restaurantesData = res.data
            .filter(item => item.rating !== "No disponible")
            .map(item => ({ nombre: item.nombre, calificacion: item.rating }));
      
            // Seleccionar solo los primeros 10 restaurantes
            const primeros10Restaurantes = restaurantesData.slice(0, 10);
      
            setRestaurantesBogota(element => [...element, ...primeros10Restaurantes]);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [bdurl]);      

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
                text: 'TOP 10 restaurantes mejores calificados',
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
