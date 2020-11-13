import React, { useContext } from "react";

import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

const LinkedListIntro = () => {
  const [darkTheme] = useContext(ThemeContext);

  const code = `
# CREATING LINKEDLIST
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
        className={darkTheme ? "bg-dark text-light" : "bg-light text-dark"}
        style={{ maxHeight: "90vh" }}
      >
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className="row" style={{ maxHeight: "90vh" }}>
            <div
              className="col-sm-3 mt-4"
              style={{ maxHeight: "86vh", overflowY: "scroll" }}
            >
              <SideNav />
            </div>
            <div
              className="col-sm-9 mt-4"
              style={{ maxHeight: "86vh", overflowY: "scroll" }}
            >
              <CopyBlock
                language={`python`}
                text={code}
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
