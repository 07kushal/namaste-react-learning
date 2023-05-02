const filledStar = require("../../public/images/filled_star.png");
const emptyStar = require("../../public/images/empty_star.png");

const Rating = ({ rating }) => {
  const stars = [];
  const starWidth = 16; // width of each star icon in pixels
  // for (let i = 0; i < 5; i++) {
  //   if (i < rating) {
  //     stars.push(<img style={{ marginRight: 5 }} src={filledStar} alt="Filled star" width={starWidth} height={starWidth} />);
  //   } else {
  //     stars.push(<img style={{ marginRight: 5 }} src={emptyStar} alt="Empty star" width={starWidth} height={starWidth} />);
  //   }
  // }
  // style={{ marginTop: 10, border: 1, borderColor: "red", borderWidth: 1, borderStyle: "solid" }}

  return (
    <div className="rating-container">
      <img className="star-icon" src={filledStar} alt="Filled star" width={starWidth} height={starWidth} />
      <span className="rating-text">{rating}</span>
    </div>
  );
};

export default Rating;
