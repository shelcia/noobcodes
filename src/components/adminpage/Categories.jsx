import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { CodeContext } from "../context/CodeContext";
import { ThemeContext } from "../context/ThemeContext";

const Categories = ({ match }) => {
  const [code] = useContext(CodeContext);
  const [darkTheme] = useContext(ThemeContext);
  const history = useHistory();
  const codeReq = code.filter((code) => code.category === match.params.id);
  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
        }
      >
        <div className="container w-95">
          <div className="h-90 scroll-y">
            <div className="mt-5 d-flex justify-content-between align-items-center">
              <h2>{match.params.id}</h2>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => history.push(`addPage/${match.params.id}`)}
              >
                Add Article
              </button>
            </div>
            <hr />

            <ul
              className="w-100 mt-2 list-group list-group-flush"
              style={{ listStyle: "none" }}
            >
              {codeReq.map((code) => (
                <li
                  key={code.codeId}
                  className={
                    darkTheme
                      ? "list-group-item mt-3 bg-dark p-0 borderless shadow rounded"
                      : "list-group-item mt-3 bg-light p-0 borderless shadow-sm rounded"
                  }
                >
                  <NavLink
                    to={`code/${code.codeId}`}
                    className="nav-link pl-5 sidenav-links rounded"
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
