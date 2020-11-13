import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Error404Pic from "../assets/Error404.png";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ height: "90vh" }}
      >
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className="row">
            <div className="col-sm-6">
              <img src={Error404Pic} className="img-fluid" alt="" />
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-center">
              <div
                className={
                  darkTheme
                    ? "card p-5 bg-dark shadow border border-0"
                    : "card p-5 bg-light shadow-sm border border-0"
                }
              >
                <h1>Error 404 !!!</h1>
                <p>Seems like you are lost :p</p>
                <NavLink to="/" className="text-primary">
                  Go Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error404;
