import React, { Fragment, useEffect, useState } from "react";
import TeamCard from "./TeamCard/TeamCard";

const MyTeam = ({ addHero }) => {
  const [heroTeam, setHeroTeam] = useState([]);

  const addToTeam = () => {
    if (addHero.name) {
      setHeroTeam([...heroTeam, addHero]);
    }
  };

  useEffect(addToTeam, [addHero]);

  return (
    <Fragment>
      {heroTeam
        .filter(
          (hero, index, array) =>
            array.findIndex((t) => t.id === hero.id) === index
        )
        .map((hero) => (
          <TeamCard key={hero.id} hero={hero} />
        ))}
    </Fragment>
  );
};

export default MyTeam;
