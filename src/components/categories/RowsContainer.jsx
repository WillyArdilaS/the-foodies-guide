import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import axios from "axios";
import ReviewItem from "../reviews/ReviewItem";

const RowsContainer = ({ bdurl }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [actualRestaurantID, setActualRestaurantID] = useState();

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

  useEffect(() => {
    setReviews([]);
  
    if(actualRestaurantID != null) {
      const restaurantFilter = restaurants.filter(item => item.id === actualRestaurantID);
      if(restaurantFilter != null) {
        restaurantFilter[0].resenas.map((item) => {
          setReviews((element) => [...element, item]);
        })
      }
    }
  }, [actualRestaurantID, restaurants]);
  
  

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
        <TableRow key={index} restaurantInfo={restaurant} setActualRestaurantID={setActualRestaurantID} />
      ))}

      <section>
        {
          reviews.map((review, index) => {
            console.log(review);
            <ReviewItem key={index} reviewInfo={review} />
          })
        }
      </section>
    </div>
  );
};

export default RowsContainer;
