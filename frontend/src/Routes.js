import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home/HomeContainer";
import Search from "./pages/Search/SearchContainer";
// import Detail from "./pages/Detail/DetailContainer";
import Loading from "./pages/Loading/Loading"

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    {/* <Route path="/search" component={Search} /> */}
    <Route path="/search/:location?" component={Search} />
    {/* <Route path="/detail" component={Detail}/> */}
    {/* <Route path="/detail/:store_name?" component={Detail} /> */}
    <Route path="/lodaing" component={Loading}/>
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRouter;
