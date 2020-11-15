import React, { useContext } from "react";
import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import { CodeContext } from "../context/CodeContext";

import SideNav from "../SideNav";

const MinMax = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [code] = useContext(CodeContext);
  console.log(code[0].code);

  // const languageDemo = `N = int(input(""))
  // Array = list(map(int, input().split(' ')[:N]))
  // max = Array[0]
  // min = Array[0]
  // maxIndex = 0
  // minIndex = 0
  // for i in range(1, N):
  //     if(max < Array[i]):
  //         max = Array[i]
  //         maxIndex = i
  //     elif(min > Array[i]):
  //         min = Array[i]
  //         minIndex = i
  // print(minIndex+1, maxIndex+1)`;
  return (
    <React.Fragment>
      <div
        className={
          darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
        }
      >
        <div className="container w-95">
          <div className="row">
            <div className="col-sm-3 code-container">
              <SideNav />
            </div>
            <div className="col-sm-9 code-container">
              <div
                className={
                  darkTheme
                    ? "container shadow p-0 w-75"
                    : "container shadow-sm p-0 w-75"
                }
              >
                <CopyBlock
                  language={`python`}
                  text={code[0].code}
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
