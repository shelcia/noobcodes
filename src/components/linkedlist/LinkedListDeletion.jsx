import React, { useContext } from "react";

import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

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

    def delAtPos(self, value):

        currentNode = self.head
        while currentNode.value is not value:
            if(currentNode is None):
                print("There is not value existing !!")
            prevNode = currentNode
            currentNode = currentNode.nextNode

        prevNode.nextNode = currentNode.nextNode


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
    node.delAtPos("7")
    node.printList()
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

export default LinkedListDeletion;
