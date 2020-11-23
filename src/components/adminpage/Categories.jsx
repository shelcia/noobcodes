import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CodeContext } from "../context/CodeContext";
import { ThemeContext } from "../context/ThemeContext";

const Categories = ({ match }) => {
  const [code] = useContext(CodeContext);
  const [darkTheme] = useContext(ThemeContext);
  const codeReq = code.filter((code) => code.category === match.params.id);
  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
        }
      >
        <div className="container w-95">
          <div className="row h-90">
            <ul className="mt-5 w-100" style={{ listStyle: "none" }}>
              {codeReq.map((code) => (
                <li
                  key={code.codeId}
                  className={
                    darkTheme
                      ? "p-3 background-dark shadow rounded-lg mt-2"
                      : "p-3 bg-light shadow-sm rounded-lg mt-2"
                  }
                >
                  <NavLink
                    to={`code/${code.codeId}`}
                    className="pl-4 sidenav-links"
                  >
                    {code.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
