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
              <h1>Hello Folks !</h1>
              <hr />
              <p>No great stuff yet !!. (not anytime sooner)</p>
              <p>
                The website has got selective interview questions picked from
                various sources.
              </p>
              <ul>
                <li>GEEK FOR GEEKS</li>
                <li>INTERVIEW BIT</li>
                <li>LEET CODE</li>
              </ul>
              <p>All solutions are available in python 3.</p>
              <p>
                P.S no aim to create an interview-based website, learning Data
                structures and algorithms is too boring and I got to pass
                interviews, but making it with the website is cool, so here we
                go presenting you shit interview web.
              </p>
              <p>Developed by Shelcia</p>
              <p>
                You can contribute if you want{"    "}
                <a href="https://github.com/shelcia/noobcodes">Github Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
