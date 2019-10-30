import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Demo } from '../features/demo'


const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/demo" component={Demo} />

        <Route path="/users" />

        <Route path="/" />

      </Switch>
    </BrowserRouter>
  )
}

export default Routers