import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurants-list-container">
      {[...Array(10).keys()].map((_, index) => {
        return <div key={index} className="shimmer-effect"></div>;
      })}
    </div>
  );
};
export default Shimmer;
