import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/mainpage/HomePage";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
