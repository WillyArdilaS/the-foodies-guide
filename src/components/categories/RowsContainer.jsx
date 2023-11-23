import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import axios from "axios";

const RowsContainer = ({ bdurl }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants([]);

    axios.get(`http://localhost:3000/restaurantes/categoria/${bdurl}`)
      .then((res) => {
        res.data.map((item) => {
          setRestaurants((element) => [...element, item]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bdurl]);

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    if (a.rating === "No disponible" && b.rating !== "No disponible") {
      return 1; // "No disponible" al final
    } else if (a.rating !== "No disponible" && b.rating === "No disponible") {
      return -1; // "No disponible" al final
    } else {
      return 0; // Ordenar según el orden original
    }
  });

  return (
    <div className="w-full py-4">
      {sortedRestaurants.map((restaurant, index) => (
        <TableRow key={index} restaurantInfo={restaurant} />
      ))}
    </div>
  );
};

export default RowsContainer;
