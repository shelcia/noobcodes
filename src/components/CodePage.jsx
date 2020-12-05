import React, { useContext, useEffect, useState } from "react";
import { CodeContext } from "./context/CodeContext";
import { ThemeContext } from "./context/ThemeContext";
import { CopyBlock, dracula, github } from "react-code-blocks";
import SideNav from "./SideNav";
import LoaderComp from "./Loading";

const CodePage = ({ match }) => {
  const [code] = useContext(CodeContext);
  const [darkTheme] = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("codepage rendered");
    if (code.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [code.length]);

  const codeReq = code.filter((code) => code.codeId === match.params.id);
  console.log(codeReq);

  return isLoading ? (
    <LoaderComp />
  ) : (
    <React.Fragment>
      {codeReq.map((code) => (
        <div
          className={
            darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
          }
          key={code.codeId}
        >
          <div className="container w-95">
            <div className="row h-90">
              <div className="col-sm-3 code-container">
                <SideNav />
              </div>
              <div className="col-sm-9 code-container">
                <h2 className={darkTheme ? "text-light" : "text-dark"}>Code</h2>
                <hr />
                <CopyBlock
                  language={`python`}
                  text={code.code}
                  showLineNumbers={true}
                  theme={darkTheme ? dracula : github}
                  wrapLines={true}
                  codeBlock
                />

                {code.output && (
                  <React.Fragment>
                    <h2 className={darkTheme ? "text-light" : "text-dark"}>
                      Output
                    </h2>
                    {code.output}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default CodePage;
