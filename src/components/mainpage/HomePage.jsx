import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

const HomePage = () => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
        }
      >
        <div className="container w-95">
          <div className="row h-90">
            <div className="col-sm-3 code-container">
              <SideNav />
            </div>
            <div className="col-sm-9 mt-4">
              <h1>Hello People !</h1>
              <hr />
              <p>
                No great stuff yet !!. It's hard to learn DS and Algos. So i
                thought i will create a website which i love to do and also
                learning DS and algo coz this is gonne be ds and algo website.
                The questions are picked from geek for geeks
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
