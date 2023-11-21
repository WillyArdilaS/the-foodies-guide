import React, { useState } from 'react';
import BarGraphic from '../components/statistics/BarGraphic';
import Pies from '../components/statistics/Pies';
import Map from '../components/statistics/Map';
import Header from '../components/header/Header';


const Statistics = () => {
    const [selectedGraph, setSelectedGraph] = useState('bar'); 

    const handleSelectChange = (event) => {
        setSelectedGraph(event.target.value);
    };


    const renderSelectedGraph = () => {
        switch (selectedGraph) {
            case 'bar':
                return <BarGraphic />;
            case 'doughnut':
                return <Pies />;
            case 'map':
                return <Map />;
            default:
                return null;
        }
    };

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="w-3/4 xl:w-3/5 mx-auto pt-20 xl:pt-24 pb-6 font-title text-2xl md:text-4xl lg:text-5xl text-center font-black text-black animate-fade-down animate-once 
          animate-ease-out animate-duration-[2500]">Estadísticas</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Seleccionar Tipo de Gráfico</h2>
                        <select
                            className="w-full p-2 border rounded-md"
                            onChange={handleSelectChange}
                            value={selectedGraph}
                        >
                            <option value="bar">Top de restaurantes por calificación</option>
                            <option value="doughnut">Comparación de precios</option>
                            <option value="map">Mapa</option>
                        </select>
                    </div>
                    <div className="col-span-2 bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Gráfico Seleccionado</h2>
                        <div className="w-full h-96 border rounded-md overflow-hidden">
                            {renderSelectedGraph()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;
