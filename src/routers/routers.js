import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { Demo } from '../features/demo';
import { Game } from '../features/game';

const Routers = () => {
  return (
    <Switch>
      <Route path="/demo" component={Demo} />

      <Route path="/lucky-number" component={Game} />

      <Route path="/" component={Game} />

    </Switch>
  )
}

export default Routers