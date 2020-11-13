import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

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
      >
        <a href="#home" className="nav-link" data-toggle="collapse">
          Home
        </a>
        <div id="home" className="collapse">
          <NavLink className="nav-link" strict to="/">
            Home
          </NavLink>
        </div>
        <a href="#array" className="nav-link" data-toggle="collapse">
          Arrays
        </a>
        <div id="array" className="collapse">
          <NavLink className="nav-link" exact to="/arrayprograms">
            Array
          </NavLink>
        </div>
        <a href="#linkedlist" className="nav-link" data-toggle="collapse">
          Linked Lists
        </a>
        <div id="linkedlist" className="collapse">
          <ul className="list-group">
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item  p-0"
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
                  : "list-group-item  p-0"
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
                  : "list-group-item  p-0"
              }
            >
              <NavLink className="nav-link pl-5" exact to="/linkedlistsdelkey">
                Deleting Linked List (Deleting a given key)
              </NavLink>
            </li>
            <li
              className={
                darkTheme
                  ? "list-group-item bg-dark p-0"
                  : "list-group-item  p-0"
              }
            >
              <NavLink className="nav-link pl-5" exact to="/linkedlistsdelpos">
                Deleting Linked List (Deleting a key at given position)
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="nav-link" exact to="/basic">
          Basic
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default SideNav;
