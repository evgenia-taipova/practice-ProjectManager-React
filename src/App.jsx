import { useState } from "react";
import Content from "./components/Content";
import SideBar from "./components/SideBar";

function App() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [isViewingProject, setIsViewingProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProjectClick() {
    setIsAddingProject(true);
    setIsViewingProject(false);
  }

  function handleSaveProject(newProject) {
    const projectWithId = {
      ...newProject,
      id: Date.now(), 
      tasks: [],
    };
    setProjects([...projects, projectWithId]);
    setIsAddingProject(false);
  }

  function handleCancel() {
    setIsAddingProject(false);
  }

  function handleViewProject(project) {
    setSelectedProject(project);
    setIsViewingProject(true);
    setIsAddingProject(false);
  }

  function handleDeleteProject(projectToDelete) {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectToDelete.id 
    );
    setProjects(updatedProjects);
    setSelectedProject(null);
    setIsViewingProject(false);
  }

  function handleAddTask(newTask) {
    const updatedProjects = projects.map((project) =>
      project.id === selectedProject.id
        ? { ...project, tasks: [...project.tasks, newTask] }
        : project
    );
    setProjects(updatedProjects);
    setSelectedProject(updatedProjects.find(project => project.id === selectedProject.id));
  }

  function handleDeleteTask(taskId) {
    const updatedProjects = projects.map((project) =>
      project.id === selectedProject.id
        ? { ...project, tasks: project.tasks.filter((task) => task.id !== taskId) }
        : project
    );
    setProjects(updatedProjects);
    setSelectedProject(updatedProjects.find((project) => project.id === selectedProject.id));
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projects}
        onAddProjectClick={handleAddProjectClick}
        onProjectClick={handleViewProject}
      />
      <Content
        isAddingProject={isAddingProject}
        isViewingProject={isViewingProject}
        selectedProject={selectedProject}
        onAddProjectClick={handleAddProjectClick}
        onSaveProject={handleSaveProject}
        onCancel={handleCancel}
        onDeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onClearTask={handleDeleteTask}
      />
    </main>
  );
}

export default App;
