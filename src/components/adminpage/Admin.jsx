import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Admin = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [categories] = useState([
    { category: "Array", url: "/admin/rombakushithaan/dashboard/array" },
    {
      category: "Linked Lists",
      url: "/admin/rombakushithaan/dashboard/linkedlist",
    },
  ]);
  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
        }
      >
        <div className="container w-95">
          <div className="row h-90">
            <div className="card-columns mt-5">
              {categories.map((category) => (
                <div
                  className={
                    darkTheme
                      ? "background-dark card shadow borderless"
                      : "bg-light card shadow-sm borderless"
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
