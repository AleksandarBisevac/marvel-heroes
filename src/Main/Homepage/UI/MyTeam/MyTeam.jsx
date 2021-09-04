import React from "react";

import classes from "./MyTeam.module.css";

const MyTeam = () => {

  return (
    <div className={classes["my-team"]}>
      <img src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_xlarge.jpg" alt="img_hero" />
      <p>Some Hero</p>
    </div>
  );
};


export default MyTeam;