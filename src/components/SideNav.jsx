import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CodeContext } from "./context/CodeContext";
import { ThemeContext } from "./context/ThemeContext";
import SideNavComp from "./SideNavComp";

const SideNav = () => {
  const [darkTheme] = useContext(ThemeContext);

  const [code] = useContext(CodeContext);

  const arrayCodes = code.filter((code) => code.category === "array");
  const llCodes = code.filter((code) => code.category === "linkedlist");

  return (
    <React.Fragment>
      <div
        className={
          darkTheme
            ? "nav flex-column nav-pills shadow"
            : "nav flex-column nav-pills shadow-sm"
        }
      >
        <a
          href="#home"
          className="nav-link sidenav-links"
          data-toggle="collapse"
        >
          Home
        </a>
        <div id="home" className="collapse">
          <NavLink className="nav-link pl-5 sidenav-links" strict to="/">
            Home
          </NavLink>
        </div>
        <SideNavComp title="Arrays" codes={arrayCodes} />
        <SideNavComp title="Linked Lists" codes={llCodes} />
      </div>
    </React.Fragment>
  );
};

export default SideNav;
