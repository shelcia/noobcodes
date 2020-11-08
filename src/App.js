import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error404 from "./components/Error404";
import HomePage from "./components/mainpage/HomePage";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
