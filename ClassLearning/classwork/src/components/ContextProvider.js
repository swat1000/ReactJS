import React from "react";
import DataContext from "./DataContext";

// This will act as our centralized component where we will keep everything and every infor related to our webpage
// children: is prop which will become that component on which this component (Context Provider) wraps

export default function ContextProvider({children}) {
  return (
    <DataContext.Provider>
        {children}
    </DataContext.Provider>
  )
}

