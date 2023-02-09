import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useCheckLogin from "../checkLogin";
import Dashboard from "../Dashboard";
import Login from "../Login";

const Routes = () => {
   const [loginValue, loginfunction] =  useCheckLogin();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {loginValue ? (
              <Redirect to="/" />
            ) : (
              <Login loginfunction={loginfunction} />
            )}
          </Route>
          <Route exact path="/dashboard">
            {loginValue ? (
              <Dashboard loginfunction={loginfunction} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="*">
            <h1>****</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
