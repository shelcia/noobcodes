import React, { createContext, useState } from "react";

export const CodeContext = createContext();

export const CodeProivder = ({ children }) => {
  const [codes, setCodes] = useState([
    {
      id: "minmax",
      code:
        "  N = int(input(''))\n  Array = list(map(int, input().split(' ')[:N]))\n  max = Array[0]\n  min = Array[0]\n  maxIndex = 0\n  minIndex = 0\n  for i in range(1, N):\n      if(max < Array[i]):\n          max = Array[i]\n          maxIndex = i\n      elif(min > Array[i]):\n          min = Array[i]\n          minIndex = i\n  print(minIndex+1, maxIndex+1)\n",
    },
  ]);
  return (
    <CodeContext.Provider value={[codes, setCodes]}>
      {children}
    </CodeContext.Provider>
  );
};
