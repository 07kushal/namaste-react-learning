import { imageBaseURL } from "../Config/Data";
import Rating from "./Rating";

const RestaurantCard = ({ name, address, avgRating, cuisines, costForTwoString, cloudinaryImageId }) => {
  console.log("cloudinaryImageId", cloudinaryImageId);
  return (
    <div className="food-card">
      <div className="food-card-img">
        {!!cloudinaryImageId ? <img src={imageBaseURL + cloudinaryImageId} alt={"item.name"} /> : <div className="empty-image"></div>}
      </div>
      <div className="food-card-details">
        <h3>{name}</h3>
        <p>{address}</p>
        <div className="card-cuisines">{cuisines?.join(", ")}</div>
        <div className="food-card-rating">
          <Rating rating={avgRating} />
        </div>
        <div className="food-card-footer">
          <div className="food-card-price">{costForTwoString}</div>
          <button className="food-card-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
