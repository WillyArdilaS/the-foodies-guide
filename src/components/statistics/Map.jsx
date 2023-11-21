import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Map = () => {
    const defaultCenter = [4.6097, -74.0817]; // Centro de Bogotá 
    // data ejemplo
    const restaurantData = [
        {
            id: 1,
            name: 'La Cocina del Sabor',
            description: 'Restaurante de cocina internacional con platos exquisitos.',
            location: [4.6097, -74.0817],
        },
        {
            id: 2,
            name: 'Sabor Auténtico',
            description: 'Especialidades locales con un toque de creatividad.',
            location: [4.6128, -74.0705],
        },
        {
            id: 3,
            name: 'Mariscos del Pacífico',
            description: 'Disfruta de los mejores mariscos frescos del océano Pacífico.',
            location: [4.6266, -74.0651],
        },
        {
            id: 4,
            name: 'Gastronomía Mediterránea',
            description: 'Platos mediterráneos con ingredientes frescos y saludables.',
            location: [4.6386, -74.0850],
        },
        {
            id: 5,
            name: 'Sabores Orientales',
            description: 'Viaje culinario a Asia con auténticos sabores orientales.',
            location: [4.5984, -74.0762],
        },
        {
            id: 6,
            name: 'Parrilla del Asador',
            description: 'Carnes a la parrilla con el mejor sabor y calidad.',
            location: [4.6227, -74.0694],
        },
        {
            id: 7,
            name: 'Postres y Delicias',
            description: 'Endulza tu paladar con los postres más deliciosos de la ciudad.',
            location: [4.6148, -74.0976],
        },
        {
            id: 8,
            name: 'Café Bohemio',
            description: 'Ambiente acogedor con café de origen y repostería artesanal.',
            location: [4.6355, -74.0854],
        },
        {
            id: 9,
            name: 'Cocina Vegetariana',
            description: 'Platos vegetarianos con ingredientes frescos y sabrosos.',
            location: [4.6020, -74.0721],
        },
        {
            id: 10,
            name: 'Sabores del Caribe',
            description: 'Especialidades caribeñas con toques tropicales.',
            location: [4.6059, -74.1022],
        },
    ];


    return (
        <MapContainer center={defaultCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {restaurantData.map((restaurant) => (
                <Marker key={restaurant.id} position={restaurant.location}>
                    <Popup>
                        <strong>{restaurant.name}</strong>
                        <p>{restaurant.description}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
