import React, { createContext, useContext, useState } from "react";
import { useProjects } from "../hooks";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const { selectedProject, setSelectedProject } = useState("INBOX");
  return (
    <SelectedProjectContext.provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
