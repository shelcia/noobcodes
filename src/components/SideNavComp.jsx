import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { NavLink } from "react-router-dom";

const SideNavComp = ({ codes, title }) => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <React.Fragment>
      <a
        href={`#${title.replace(/\s+/g, "").toLowerCase()}`}
        className="nav-link sidenav-links"
        data-toggle="collapse"
      >
        {title}
      </a>
      <div
        id={`${title.replace(/\s+/g, "").toLowerCase()}`}
        className="collapse"
      >
        <ul className="list-group list-group-flush">
          {codes.map((code) => (
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
              key={code.codeId}
            >
              <NavLink
                className="nav-link pl-5 sidenav-links"
                exact
                to={`/code/${code.codeId}`}
              >
                {code.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideNavComp;
