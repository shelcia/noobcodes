import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./components/context/ThemeContext";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  return (
    <nav
      className={
        darkTheme
          ? "navbar navbar-expand-sm bg-dark text-light navbar-dark shadow"
          : "navbar navbar-expand-sm bg-light navbar-light shadow-sm"
      }
      style={{ height: "10vh" }}
    >
      <NavLink className="navbar-brand" to="/">
        Noob Codes
      </NavLink>
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
  );
};

export default Navbar;
