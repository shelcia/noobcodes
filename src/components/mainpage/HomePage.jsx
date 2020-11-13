import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

const HomePage = () => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ height: "90vh" }}
      >
        <div className="container-fluid">
          <div className="row border">
            <div className="col-sm-3 mt-4">
              <SideNav />
            </div>
            <div className="col-sm-8 mt-4 border-primary">
              <h1>Hello People !</h1>
              <hr />
              <p>
                No great stuff yet !!. It's hard to learn DS and Algos. So i
                thought i will create a website which i love to do and also
                learning DS and algo coz this is gonne be ds and algo website
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
