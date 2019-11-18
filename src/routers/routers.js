import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { Demo } from '../features/demo';
import { LuckyNumber } from '../features/lucky-numbers';

const Routers = () => {
  return (
    <Switch>
      <Route path="/demo" component={Demo} />

      <Route path="/lucky-number" component={LuckyNumber} />

      <Route path="/" component={LuckyNumber} />

    </Switch>
  )
}

export default Routers