import React, { Fragment } from "react";

import classes from "./SomeHero.module.css";

const SomeHero = ({ hero, addHero }) => {
  const onClick__addBtn = () => {
    addHero({
      name: hero.name,
      id: hero.id,
      image: hero.thumbnail.path + "." + hero.thumbnail.extension,
    });
  };

  return (
    <Fragment>
      <article className={classes.hero}>
        <h3>{hero.name}</h3>
        <div className={classes["hero-img"]}>
          <img
            src={hero.thumbnail.path + "." + hero.thumbnail.extension}
            alt="img_hero"
          />
        </div>
        <div className={classes["hero-btn"]}>
          <button className="btn-info">Info</button>
          <button
            className="btn-add"
            onClick={() => {
              onClick__addBtn();
            }}
          >
            Add
          </button>
        </div>
      </article>
    </Fragment>
  );
};

export default SomeHero;
