import React, { useContext } from "react";

import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

const LinkedListIntro = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <React.Fragment>
      <div
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ height: "90vh" }}
      >
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className="row border">
            <div className="col-sm-3 mt-4 border border-warning">
              <SideNav />
            </div>
            <div className="col-sm-9 mt-4 border border-primary">
              <CopyBlock
                language={`python`}
                text={`python`}
                showLineNumbers={true}
                theme={darkTheme ? dracula : github}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinkedListIntro;
