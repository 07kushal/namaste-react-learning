import { useState } from "react";
import { restaurantsData } from "../Config/Data";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([...restaurantsData]);
  const onClickFilter = () => {
    const filterList = listOfRestaurants.filter((res) => res?.avgRating > 4);
    setListOfRestaurants([...filterList]);
  };
  return (
    <div className="restaurants-container">
      <h2 className="list-title">Restaurants</h2>
      <button className="filter-button" onClick={onClickFilter}>
        Filter Top Restaurants
      </button>
      <div className="restaurants-list-container">
        {/* not using keys (not acceptable) << index as key <<<< unique key (best practices) */}
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Restaurants;
