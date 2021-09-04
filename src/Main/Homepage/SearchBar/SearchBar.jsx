import React from "react";


import classes from "./SearchBar.module.css";


const SearchBar = () => {
  return (
    <div className={classes.search}>
      <div className="search-inputs">
        <input type="text" placeholder="Search" />
        <button>Go</button>
      </div>
      <div className="my-team">
        <h2>My Team</h2>
      </div>
    </div>
  );
};

export default SearchBar;