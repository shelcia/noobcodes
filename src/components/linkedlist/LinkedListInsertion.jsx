import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";
import { CopyBlock, dracula, github } from "react-code-blocks";

const LinkedListInsertion = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ height: "90vh" }}
      >
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className="row ">
            <div className="col-sm-3 mt-4 ">
              <SideNav />
            </div>
            <div className="col-sm-9 mt-4 ">
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

export default LinkedListInsertion;
