import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home/HomeContainer";
import Search from "./pages/Search/SearchContainer";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRouter;
