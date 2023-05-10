import { useState, useEffect } from "react";
import { restaurantsData } from "../Config/Data";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([...restaurantsData]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchListOfRestaurants();
  }, []);

  const fetchListOfRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.926495&lng=75.715856&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const resCardData = data?.data?.cards?.[1]?.data?.data?.cards;
      setListOfRestaurants(resCardData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickFilter = () => {
    const filterList =
      listOfRestaurants?.filter?.((res) => {
        return res?.data?.avgRating > 2;
      }) || [];
    setListOfRestaurants([...filterList]);
  };

  const onClickAllRestaurants = () => {
    setIsLoading(true);
    fetchListOfRestaurants();
  };

  const searchRestaurants = async (searchValue) => {
    const filterList = restaurantsData.filter((res) => {
      const lowerCaseSearchValue = searchValue.toLowerCase();
      const lowerCaseName = res?.name?.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchValue);
    });
    setListOfRestaurants([...filterList]);
  };

  console.log("isLoading", isLoading);
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

        {/* not using keys (not acceptable) << index as key <<<< unique key (best practices) */}
        {isLoading ? (
          <Shimmer />
        ) : (
          <div className="restaurants-list-container">
            {listOfRestaurants?.map?.((restaurant) => {
              console.log("restaurant", restaurant);
              const restaurantProps = restaurant?.data || {};
              return <RestaurantCard key={restaurantProps.id} {...restaurantProps} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Restaurants;
