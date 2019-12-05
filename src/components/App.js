import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Header from "../shared/layout/Header";
import Footer from "../shared/layout/Footer";
import MoviesList from "../components/MoviesList/";
import Movie from "./Movie";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/page/1" />} />
        <Route exact path="/page/:id" component={MoviesList} />
        <Route exact path="/movie/:id" component={Movie} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
