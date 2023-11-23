import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from "react";
import axios from "axios";
import 'leaflet/dist/leaflet.css';


const Map = ({bdurl}) => {
    const defaultCenter = [4.6097, -74.0817]; // Centro de Bogotá 

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        setRestaurantData([]);
      
        axios.get(`http://localhost:3000/restaurantes/categoria/${bdurl}`)
        .then((res) => {
            const data = res.data.map(item => ({id: item.id, name: item.nombre, img: item.foto, location:[item.latitud, item.longitud] }));
      
            setRestaurantData(element => [...element, ...data]);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [bdurl]);   

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
                        <img src={restaurant.img} alt="Foto del restaurante" className="object-cover rounded-md w-5/6 mx-auto my-4"/>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
