import React, { useContext } from "react";

import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

const LinkedListInsertion = () => {
  const [darkTheme] = useContext(ThemeContext);

  const code = `
  # INSERTION OF NODE AT END , BEGGINING AND AT GIVEN POS VALUE

  class linkedListNode:
      def __init__(self, value, nextNode=None):
          self.value = value
          self.nextNode = nextNode
  
  
  class linkedList:
  
      def __init__(self, head=None):
          self.head = head
  
      def printList(self):
          currentNode = self.head
          while currentNode is not None:
              print(currentNode.value, "->", end="")
              currentNode = currentNode.nextNode
          print("None")
  
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
  
      def insertAtBeginning(self, value):
          node = linkedListNode(value)
          if(self.head is None):
              self.head = node
              return
          node.nextNode = self.head
          self.head = node
  
      def insertAtPos(self, value, prev_value):
          node = linkedListNode(value)
          if(self.head is None):
              self.head = node
              return
  
          currentNode = self.head
          while currentNode.value is not prev_value:
              if(currentNode.nextNode is None):
                  print("Node not found")
                  break
              prevNode = currentNode
              currentNode = currentNode.nextNode
  
          prevNode.nextNode = node
          node.nextNode = currentNode
  
  
  if __name__ == '__main__':
  
      nodeCreation = linkedList()
      nodeCreation.insertAtEnd("3")
      nodeCreation.printList()
      nodeCreation.insertAtEnd("5")
      nodeCreation.printList()
      nodeCreation.insertAtEnd("9")
      nodeCreation.printList()
      nodeCreation.insertAtBeginning("1")
      nodeCreation.printList()
      nodeCreation.insertAtPos("7", "9")
      nodeCreation.printList()
      nodeCreation.insertAtPos("7", "8")
      nodeCreation.printList()`;

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
              style={{ maxHeight: "87vh", overflowY: "scroll" }}
            >
              <SideNav />
            </div>
            <div
              className="col-sm-9 mt-4"
              style={{ maxHeight: "87vh", overflowY: "scroll" }}
            >
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinkedListInsertion;
