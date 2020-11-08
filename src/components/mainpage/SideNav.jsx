import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <React.Fragment>
      <div
        className="nav flex-column nav-pills border-right"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <NavLink
          exact
          className="nav-link active"
          id="v-pills-home-tab"
          data-toggle="pill"
          to="/"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Home
        </NavLink>
        <NavLink
          exact
          className="nav-link"
          id="v-pills-profile-tab"
          data-toggle="pill"
          to="/arrayprograms"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Array
        </NavLink>
        <NavLink
          exact
          className="nav-link"
          id="v-pills-messages-tab"
          data-toggle="pill"
          to="/linkedlists"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Linked Lists
        </NavLink>
        <NavLink
          exact
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          to="/basic"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Basic
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default SideNav;
