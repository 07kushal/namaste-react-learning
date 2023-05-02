import { restaurantsData } from "../Config/Data";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  console.log("restaurants", restaurantsData);
  return (
    <div className="restaurants-container">
      <h2 className="list-title">Restaurants</h2>
      <div className="restaurants-list-container">
        {restaurantsData.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Restaurants;
