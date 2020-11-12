import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const SideNav = () => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        className={
          darkTheme
            ? "nav flex-column nav-pills shadow"
            : "nav flex-column nav-pills shadow-sm"
        }
        id="v-pills-tab"
        // role="tablist"
        aria-orientation="vertical"
      >
        <NavLink className="nav-link" strict to="/">
          Home
        </NavLink>
        <NavLink exact className="nav-link" to="/arrayprograms">
          Array
        </NavLink>
        <NavLink exact className="nav-link" to="/linkedlists">
          Linked Lists
        </NavLink>
        <NavLink exact className="nav-link" to="/basic">
          Basic
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default SideNav;
