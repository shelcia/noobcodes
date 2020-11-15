import React, { useContext } from "react";

import { CopyBlock, dracula, github } from "react-code-blocks";
import { ThemeContext } from "../context/ThemeContext";
import SideNav from "../SideNav";

const LinkedListPosDel = () => {
  const [darkTheme] = useContext(ThemeContext);

  const code = `
  class linkedListNode:
  def __init__(self, value, nextNode=None):
      self.value = value
      self.nextNode = nextNode
  
  
  class linkedList:
  def __init__(self, head=None):
      self.head = head
  
  def insetAtBeginning(self, value):
      node = linkedListNode(value)
      if(self.head is None):
          self.head = node
          return
      node.nextNode = self.head
      self.head = node
  
  def printList(self):
      if(self.head is None):
          print("Empty List")
          return
      currentNode = self.head
      while (currentNode is not None):
          print(currentNode.value, "->", end="")
          currentNode = currentNode.nextNode
      print("None")
  
  def findLenItr(self):
      if(self.head is None):
          print("Empty List")
          return 0
      count = 0
      currentNode = self.head
      while(currentNode is not None):
          count = count + 1
          currentNode = currentNode.nextNode
      return count
  
  def findLenRec(self, node):
      if (not node):  # Base case
          return 0
      else:
          return 1 + self.findLenRec(node.nextNode)
  
  def findLenRecCount(self):
      return self.findLenRec(self.head)
  
  
  if __name__ == "__main__":
  node = linkedList()
  node.insetAtBeginning("3")
  node.insetAtBeginning("5")
  node.insetAtBeginning("7")
  node.insetAtBeginning("9")
  node.printList()
  print(node.findLenItr())
  print(node.findLenRecCount())`;

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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinkedListPosDel;
