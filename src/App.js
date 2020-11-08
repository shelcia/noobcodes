import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MinMax from "./components/array/MinMax";
import Error404 from "./components/Error404";
import HomePage from "./components/mainpage/HomePage";
import "./styles/style.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <React.Fragment>
      <BrowserRouter>
        <nav
          className={
            darkTheme
              ? "navbar navbar-expand-sm bg-dark text-light navbar-dark shadow"
              : "navbar navbar-expand-sm bg-light navbar-light shadow-sm"
          }
          style={{ height: "10vh" }}
        >
          <a className="navbar-brand" href="/">
            Noob Codes
          </a>
          <form className="ml-auto mr-4">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                onChange={() => setDarkTheme(!darkTheme)}
                id="switch1"
              />
              <label className="custom-control-label" htmlFor="switch1">
                Dark Theme
              </label>
            </div>
          </form>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <HomePage darkTheme={darkTheme} />}
          />
          <Route
            path="/arrayprograms"
            exact
            component={() => <MinMax darkTheme={darkTheme} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
