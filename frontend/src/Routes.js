import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home/HomeContainer";
import Search from "./pages/Search/SearchContainer";
import Detail from "./pages/Detail/DetailContainer";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/detail" component={Detail} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRouter;
