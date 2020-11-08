import React, { useState } from "react";
import SideNav from "./SideNav";

const HomePage = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <React.Fragment>
      <div
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ height: "100vh" }}
      >
        <nav
          className={
            darkTheme
              ? "navbar navbar-expand-sm bg-dark navbar-dark shadow"
              : "navbar navbar-expand-sm bg-light navbar-light shadow"
          }
        >
          <a className="navbar-brand" href="/">
            Noob Codes
          </a>
          <form>
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
        <div className="row mt-4">
          <div className="col-sm-3">
            <SideNav />
          </div>
          <div className="col-sm-9">
            <h1>Hello People !</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
