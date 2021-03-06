import React, { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Admin = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [categories] = useState([
    { category: "Array", url: "/admin/dashboard/array" },
    {
      category: "Linked Lists",
      url: "/admin/dashboard/linkedlist",
    },
    {
      category: "Binary Tree",
      url: "/admin/dashboard/binarytree",
    },
  ]);

  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("NoobCode-Token")) {
      history.push("/");
    }
  }, [history]);

  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
        }
      >
        <div className="container w-95">
          <div className="row h-90">
            <div className="card-columns w-100 mt-5">
              {categories.map((category) => (
                <div
                  className={
                    darkTheme
                      ? "background-dark card shadow borderless py-3"
                      : "bg-light card shadow-sm borderless py-3"
                  }
                  key={category.category}
                >
                  <div className="card-body">
                    <h4 className="card-title">{category.category}</h4>
                    <NavLink to={category.url}>See More..</NavLink>
                  </div>
                </div>
              ))}
            </div>
            <NavLink to="converter" target={"_blank"}>
              <button className="btn btn-primary">Converter</button>
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
