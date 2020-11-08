import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import SideNav from "../mainpage/SideNav";

const MinMax = ({ darkTheme }) => {
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
  # print(max)
  # print(min)
  print(minIndex+1, maxIndex+1)`;
  return (
    <React.Fragment>
      <div
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ height: "90vh" }}
      >
        <div className="row">
          <div className="col-sm-3 mt-4">
            <SideNav />
          </div>
          <div className="col-sm-9 mt-4">
            <div className="container shadow p-0 w-75">
              <CopyBlock
                language={`python`}
                text={languageDemo}
                showLineNumbers={true}
                theme={dracula}
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

export default MinMax;
