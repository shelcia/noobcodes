import React from "react";
import "./styles/style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import { CodeProivder } from "./components/context/CodeContext";
import Login from "./components/adminpage/Login";
import Signup from "./components/adminpage/Signup";
import Admin from "./components/adminpage/Admin";
import Categories from "./components/adminpage/Categories";
import EditPage from "./components/adminpage/EditPage";
import Converter from "./components/adminpage/Converter";

import HomePage from "./components/mainpage/HomePage";
import Navbar from "./Navbar";
import CodePage from "./components/CodePage";
import Error404 from "./components/Error404";
import AddPage from "./components/adminpage/AddPage";

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
              <Route path="/admin/dashboard" exact component={Admin} />
              <Route
                path="/admin/dashboard/code/:id"
                exact
                component={EditPage}
              />
              <Route path="/admin/dashboard/:id" exact component={Categories} />
              <Route path="/admin/login" exact component={Login} />
              <Route path="/admin/signup" exact component={Signup} />
              <Route path="/admin/converter" exact component={Converter} />
              <Route
                path="/admin/dashboard/addpage/:id"
                exact
                component={AddPage}
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
