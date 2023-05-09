import { useState } from "react";

const Search = (props) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClickSearch = () => {
    if (props?.searchRestaurants) {
      props.searchRestaurants(value);
    }
  };
  return (
    <div className="search">
      <input type="text" value={value} onChange={onChange} placeholder="Search for restaurants" />
      <button className="" onClick={onClickSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
