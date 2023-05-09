import { useState } from "react";
import { restaurantsData } from "../Config/Data";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([...restaurantsData]);
  const onClickFilter = () => {
    const filterList = listOfRestaurants.filter((res) => res?.avgRating > 4);
    setListOfRestaurants([...filterList]);
  };
  const onClickAllRestaurants = () => {
    setListOfRestaurants([...restaurantsData]);
  };

  const searchRestaurants = async (searchValue) => {
    const filterList = restaurantsData.filter((res) => {
      const lowerCaseSearchValue = searchValue.toLowerCase();
      const lowerCaseName = res?.name?.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchValue);
    });
    setListOfRestaurants([...filterList]);
  };
  return (
    <>
      <Search searchRestaurants={searchRestaurants} />
      <div className="restaurants-container">
        <h2 className="list-title">Restaurants</h2>
        <>
          <button className="filter-button" onClick={onClickAllRestaurants}>
            Show All Restaurants
          </button>
          <button className="filter-button" onClick={onClickFilter}>
            Filter Top Restaurants
          </button>
        </>
        <div className="restaurants-list-container">
          {/* not using keys (not acceptable) << index as key <<<< unique key (best practices) */}
          {listOfRestaurants.map((restaurant) => {
            return <RestaurantCard key={restaurant.id} {...restaurant} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
