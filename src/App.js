import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleCharacter from "./Main/SingleCharacter/SingleCharacter";
import Homepage from "./Main/Homepage/HomePage";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/singe-hero/:id" component={SingleCharacter} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
