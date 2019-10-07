import React, { createContext, useContext } from "react";
import { useProjects } from "../hooks";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();
  return (
    <ProjectsContext.provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
