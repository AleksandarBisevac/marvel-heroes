import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import MyTeam from "./UI/MyTeam/MyTeam";
import SomeHero from "./UI/SomeHero/SomeHero";

import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes["homepage-wrapper"]}>
      <SearchBar />
      <main className={classes.main}>
        <section className={classes["some-hero"]}>
          <SomeHero />
        </section>
        <aside>
          <MyTeam />
        </aside>
      </main>
    </div>
  );
};

export default Homepage;
