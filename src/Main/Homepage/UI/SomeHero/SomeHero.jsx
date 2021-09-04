import React, { Fragment } from "react";


import classes from "./SomeHero.module.css"

const SomeHero = () => {
  return (
    <Fragment>
        <article className={classes.hero}>
        <h3>Some Hero</h3>
        <div className={classes["hero-img"]}>
          <img src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_xlarge.jpg" alt="img_hero" />
        </div>
        <div className="hero-btn">
          <button className="btn-info">Info</button>
          <button className="btn-add">Add</button>
        </div>
        </article >
        <article className={classes.hero}>
        <h3>Some Hero</h3>
        <div className={classes["hero-img"]}>
          <img src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_xlarge.jpg" alt="img_hero" />
        </div>
        <div className="hero-btn">
          <button className="btn-info">Info</button>
          <button className="btn-add">Add</button>
        </div>
      </article>
      <article className={classes.hero}>
        <h3>Some Hero</h3>
        <div className={classes["hero-img"]}>
          <img src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_xlarge.jpg" alt="img_hero" />
        </div>
        <div className="hero-btn">
          <button className="btn-info">Info</button>
          <button className="btn-add">Add</button>
        </div>
      </article>
    </Fragment>
    

  );
};

export default SomeHero;