import React, { useState, createContext } from "react";

export const StatusContext = createContext();

export const StatusProvider = props => {

  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <StatusContext.Provider value={[selectedStatus, setSelectedStatus]}>
      {props.children}
    </StatusContext.Provider>
  );
};
