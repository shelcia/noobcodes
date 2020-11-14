import React, { useContext } from "react";

import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";
import LinkedDel from "../../assets/output/linkedList/linkedDel.png";

const LinkedListDeletion = () => {
  const [darkTheme] = useContext(ThemeContext);

  const code = `# DELETING LINKEDLIST AT END BEGINNING, MIDDLE AND AT GIVEN POSITION VALUE

class linkedListNode:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class linkedList:
    def __init__(self, head=None):
        self.head = head

    def insertAtEnd(self, value):
        node = linkedListNode(value)
        if(self.head is None):
            self.head = node
            return

        currentNode = self.head
        while True:
            if(currentNode.nextNode is None):
                currentNode.nextNode = node
                break
            currentNode = currentNode.nextNode

    def printList(self):
        currentNode = self.head
        while currentNode is not None:
            print(currentNode.value, "->", end="")
            currentNode = currentNode.nextNode
        print("None")

    def delAtBeginning(self):
        if(self.head is None):
            print("LinkedList is Empty")

        currentNode = self.head
        self.head = currentNode.nextNode
        currentNode = None

    def delAtEnd(self):
        if(self.head is None):
            print("Linked List is Empty")

        currentNode = self.head
        while True:
            if(currentNode.nextNode is None):
                break
            prevNode = currentNode
            currentNode = currentNode.nextNode
        prevNode.nextNode = None
        currentNode = None

    def delForValue(self, value):

        currentNode = self.head
        while currentNode.value is not value:
            if(currentNode is None):
                print("There is not value existing !!")
            prevNode = currentNode
            currentNode = currentNode.nextNode

        prevNode.nextNode = currentNode.nextNode
        currentNode = None


if __name__ == "__main__":

    node = linkedList()
    node.insertAtEnd("3")
    node.printList()
    node.insertAtEnd("5")
    node.printList()
    node.insertAtEnd("7")
    node.printList()
    node.insertAtEnd("9")
    node.printList()
    node.insertAtEnd("11")
    node.printList()
    node.delAtBeginning()
    node.printList()
    node.delAtEnd()
    node.printList()
    node.delForValue("7")
    node.printList()`;

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
                <img src={LinkedDel} alt="" className="output-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinkedListDeletion;
