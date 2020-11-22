import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CodeContext } from "./context/CodeContext";
import { ThemeContext } from "./context/ThemeContext";

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
        <a href="#home" className="nav-link" data-toggle="collapse">
          Home
        </a>

        <div id="home" className="collapse">
          <NavLink className="nav-link pl-5" strict to="/">
            Home
          </NavLink>
        </div>

        <a href="#array" className="nav-link" data-toggle="collapse">
          Arrays
        </a>

        <div id="array" className="collapse">
          <ul className="list-group list-group-flush">
            {arrayCodes.map((code) => (
              <li
                className={
                  darkTheme
                    ? "list-group-item bg-dark p-0"
                    : "list-group-item bg-light p-0"
                }
              >
                <NavLink
                  className="nav-link pl-5"
                  exact
                  to={`/code/${code.codeId}`}
                >
                  {code.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <a href="#linkedlist" className="nav-link" data-toggle="collapse">
          Linked List
        </a>

        <div id="linkedlist" className="collapse">
          <ul className="list-group list-group-flush">
            {llCodes.map((code) => (
              <li
                className={
                  darkTheme
                    ? "list-group-item bg-dark p-0"
                    : "list-group-item bg-light p-0"
                }
              >
                <NavLink
                  className="nav-link pl-5"
                  exact
                  to={`/code/${code.codeId}`}
                >
                  {code.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div
        className={
          darkTheme
            ? "nav flex-column nav-pills shadow"
            : "nav flex-column nav-pills shadow-sm"
        }
      >
        <a href="#home" className="nav-link" data-toggle="collapse">
          Home
        </a>
        <div id="home" className="collapse">
          <NavLink className="nav-link pl-5" strict to="/">
            Home
          </NavLink>
        </div>
        <a href="#array" className="nav-link" data-toggle="collapse">
          Arrays
        </a>
        <div id="array" className="collapse">
          <ul className="list-group list-group-flush">
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
            >
              <NavLink className="nav-link pl-5" exact to="/arrayprograms">
                Min Max
              </NavLink>
            </li>
          </ul>
        </div>
        <a href="#linkedlist" className="nav-link" data-toggle="collapse">
          Linked Lists
        </a>
        <div id="linkedlist" className="collapse">
          <ul className="list-group list-group-flush">
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
            >
              <NavLink className="nav-link pl-5" exact to="/linkedlistsintro">
                Linked Lists Intro
              </NavLink>
            </li>
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
            >
              <NavLink
                className="nav-link pl-5"
                exact
                to="/linkedlistsinsertion"
              >
                Inserting Linked List
              </NavLink>
            </li>
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
            >
              <NavLink
                className="nav-link pl-5"
                exact
                to="/linkedlistsdeletion"
              >
                Deleting Linked List
              </NavLink>
            </li>
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
            >
              <NavLink
                className="nav-link pl-5"
                exact
                to="/linkedlistspositiondeletion"
              >
                Deleting Linked List (given position)
              </NavLink>
            </li>
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
            >
              <NavLink className="nav-link pl-5" exact to="/linkedlistslength">
                Linked List Length (Iterative and Recursive)
              </NavLink>
            </li>
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item bg-light p-0"
              }
            >
              <NavLink className="nav-link pl-5" exact to="/linkedlistssearch">
                Linked List Search (Iterative and Recursive)
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="nav-link" exact to="/basic">
          Basic
        </NavLink>
      </div> */}
    </React.Fragment>
  );
};

export default SideNav;
