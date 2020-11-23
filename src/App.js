import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./components/adminpage/Admin";
import { ThemeProvider } from "./components/context/ThemeContext";
import Error404 from "./components/Error404";
import HomePage from "./components/mainpage/HomePage";
import Navbar from "./Navbar";
import "./styles/style.css";
import { CodeProivder } from "./components/context/CodeContext";
import Login from "./components/adminpage/Login";
import Signup from "./components/adminpage/Signup";
import CodePage from "./components/CodePage";
import Categories from "./components/adminpage/Categories";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <CodeProivder>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/code/:id" exact component={CodePage} />
              <Route
                path="/admin/rombakushithaan/dashboard"
                exact
                component={Admin}
              />
              <Route
                path="/admin/rombakushithaan/dashboard/:id"
                exact
                component={Categories}
              />
              <Route
                path="/admin/rombakushithaan/login"
                exact
                component={Login}
              />
              <Route
                path="/admin/rombakushithaan/signup"
                exact
                component={Signup}
              />
              <Route component={Error404} />
            </Switch>
          </BrowserRouter>
        </CodeProivder>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
