import React, { useContext } from "react";
import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

const MinMax = () => {
  const [darkTheme] = useContext(ThemeContext);

  const languageDemo = `N = int(input(""))
  Array = list(map(int, input().split(' ')[:N]))
  max = Array[0]
  min = Array[0]
  maxIndex = 0
  minIndex = 0
  for i in range(1, N):
      if(max < Array[i]):
          max = Array[i]
          maxIndex = i
      elif(min > Array[i]):
          min = Array[i]
          minIndex = i
  print(minIndex+1, maxIndex+1)`;
  return (
    <React.Fragment>
      <div
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ height: "90vh" }}
      >
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className="row">
            <div className="col-sm-3 mt-4">
              <SideNav />
            </div>
            <div className="col-sm-9 mt-4">
              <div
                className={
                  darkTheme
                    ? "container shadow p-0 w-75"
                    : "container shadow-sm p-0 w-75"
                }
              >
                <CopyBlock
                  language={`python`}
                  text={languageDemo}
                  showLineNumbers={true}
                  theme={darkTheme ? dracula : github}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MinMax;
