import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/pages/HomePage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to={{ pathname: "/" }} />
      </Switch>
    </>
  );
};

export default Routes;
