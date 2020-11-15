import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./components/adminpage/Admin";
import MinMax from "./components/array/MinMax";
import { ThemeProvider } from "./components/context/ThemeContext";
import Error404 from "./components/Error404";
import LinkedListDeletion from "./components/linkedlist/LinkedListDeletion";
import LinkedListInsertion from "./components/linkedlist/LinkedListInsertion";
import LinkedListIntro from "./components/linkedlist/LinkedListIntro";
import LinkedListPosDel from "./components/linkedlist/LinkedListPosDel";
import LinkedListLength from "./components/linkedlist/LinkedListLength";
import HomePage from "./components/mainpage/HomePage";
import Navbar from "./Navbar";
import "./styles/style.css";
import LinkedListSearch from "./components/linkedlist/LinkedListSearch";
import { CodeProivder } from "./components/context/CodeContext";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <CodeProivder>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/arrayprograms" exact component={MinMax} />
              <Route
                path="/linkedlistsintro"
                exact
                component={LinkedListIntro}
              />
              <Route
                path="/linkedlistsinsertion"
                exact
                component={LinkedListInsertion}
              />
              <Route
                path="/linkedlistsdeletion"
                exact
                component={LinkedListDeletion}
              />
              <Route
                path="/linkedlistspositiondeletion"
                exact
                component={LinkedListPosDel}
              />
              <Route
                path="/linkedlistslength"
                exact
                component={LinkedListLength}
              />
              <Route
                path="/linkedlistssearch"
                exact
                component={LinkedListSearch}
              />
              <Route path="/admin/rombakushithaan" exact component={Admin} />
              <Route component={Error404} />
            </Switch>
          </BrowserRouter>
        </CodeProivder>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
