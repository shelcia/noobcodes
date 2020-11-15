import React, { useContext } from "react";

import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";
import LinkedIntro from "../../assets/output/linkedList/linkedIntro.png";

const LinkedListIntro = () => {
  const [darkTheme] = useContext(ThemeContext);

  const code = `# CREATING LINKEDLIST
# 1.VALUE
# 2.NEXT NODE


class linkedListNode:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class linkedList:
    # FUNCTION TO PRINT THE LINKEDLIST
    def printList(self, node1):
        currentNode = node1
        while True:
            print(currentNode.value, "->", end="")
            if(currentNode.nextNode is None):
                print("None")
                break
            currentNode = currentNode.nextNode


# DRIVER FUNCTION

if __name__ == '__main__':

    node1 = linkedListNode("2")
    node2 = linkedListNode("11")
    node3 = linkedListNode("1999")

    node1.nextNode = node2
    node2.nextNode = node3
    node3.nextNode = None

    printList = linkedList()  # CREATE INSTANCE
    printList.printList(node1)  # CALL THE FUNCTION
  `;

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
            <div className="col-sm-9 code-container">
              <h2 className={darkTheme ? "text-light" : "text-dark"}>Code</h2>
              <hr />
              <CopyBlock
                language={`python`}
                text={code}
                showLineNumbers={true}
                theme={darkTheme ? dracula : github}
                wrapLines={true}
                codeBlock
              />
              <h2 className={darkTheme ? "text-light mt-4" : "text-dark mt-4"}>
                Output
              </h2>
              <hr />
              <div className="text-center mb-4">
                <img src={LinkedIntro} alt="" className="output-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinkedListIntro;