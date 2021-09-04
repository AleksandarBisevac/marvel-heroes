import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import MyTeam from "./UI/MyTeam/MyTeam";
import SomeHero from "./UI/SomeHero/SomeHero";
import { MarvelCommunicator } from "./services/homepage.service";
import classes from "./Homepage.module.css";

const Homepage = () => {
  const [allHeroes, setAllHeroes] = useState([]);
  const [addHero, setAddHero] = useState({});

  const getAll__Heroes = () => {
    const fetchHeroes = async () => {
      const heroesResponse = await MarvelCommunicator.fetchAll__Characters();
      console.log(heroesResponse);
      setAllHeroes(heroesResponse.data.results);
    };
    fetchHeroes();
  };

  const addHero__Handler = (hero) => {
    setAddHero(hero);
    return hero;
  };

  useEffect(getAll__Heroes, []);

  return (
    <div className={classes["homepage-wrapper"]}>
      <SearchBar />
      <main className={classes.main}>
        <section className={classes["some-hero"]}>
          {allHeroes.map((hero) => (
            <SomeHero key={hero.id} hero={hero} addHero={addHero__Handler} />
          ))}
        </section>
        <aside>
          <MyTeam addHero={addHero} />
        </aside>
      </main>
    </div>
  );
};

export default Homepage;
