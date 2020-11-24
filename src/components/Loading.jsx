import React, { useContext } from "react";
import Loader from "react-loader-spinner";
import { ThemeContext } from "./context/ThemeContext";
import SideNav from "./SideNav";

const LoaderComp = () => {
  const [darkTheme] = useContext(ThemeContext);
  return (
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
          <div className="col-sm-9 code-container d-flex align-itmes-center justify-content-center">
            <Loader type="ThreeDots" color="#00BFFF" height={300} width={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderComp;
