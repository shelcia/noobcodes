import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MinMax from "./components/array/MinMax";
import { ThemeProvider } from "./components/context/ThemeContext";
import Error404 from "./components/Error404";
import HomePage from "./components/mainpage/HomePage";
import Navbar from "./Navbar";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/arrayprograms" exact component={MinMax} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
