import React, { useContext, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
// import { CodeContext } from "./context/CodeContext";
import { ThemeContext } from "./context/ThemeContext";
import SideNavComp from "./SideNavComp";
// import Loading from "./Loading";

const SideNav = React.memo(() => {
  const [darkTheme] = useContext(ThemeContext);
  // const [code] = useContext(CodeContext);

  useEffect(() => {
    console.log("sidenav rendered");
  }, []);

  // const arrayCodes = code.filter((code) => code.category === "array");
  // const llCodes = code.filter((code) => code.category === "linkedlist");
  // const binarytrees = code.filter((code) => code.category === "binarytree");

  return useMemo(() => {
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
          {/* {isLoading ? (
            <Loading />
          ) : ( */}
          <React.Fragment>
            <SideNavComp title="Arrays" category="array" />
            <SideNavComp title="Linked Lists" category="linkedlist" />
            <SideNavComp title="Binary Trees" category="binarytree" />
          </React.Fragment>
          {/* )} */}
        </div>
      </React.Fragment>
    );
  }, [darkTheme]);
});

export default SideNav;
