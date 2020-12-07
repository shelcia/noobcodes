import React, { useContext, useMemo } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { NavLink } from "react-router-dom";
import { CodeContext } from "./context/CodeContext";

const SideNavComp = React.memo(({ category, title }) => {
  const [darkTheme] = useContext(ThemeContext);
  const [codes] = useContext(CodeContext);

  const codeReq = codes.filter((code) => code.category === category);

  console.log("rendered");

  return useMemo(() => {
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
            {codeReq.map((code) => (
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
                  &#9492; {code.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }, [codeReq, darkTheme, title]);
});

export default SideNavComp;
