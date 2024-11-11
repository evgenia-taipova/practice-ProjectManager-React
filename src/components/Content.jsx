import NewProjectForm from "./NewProjectForm";

import ProjectDetail from "./ProjectDetail";
import NoProjectSelected from "./NoProjectSelected";

export default function Content({
  isAddingProject,
  isViewingProject,
  selectedProject,
  onAddProjectClick,
  onSaveProject,
  onCancel,
  onDeleteProject,
  onAddTask,
  onClearTask,
}) {
  return (
    <div className="mt-24 text-center w-2/3">
      {isViewingProject && selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onDeleteProject={onDeleteProject}
          onAddTask={onAddTask}
          onClearTask={onClearTask}
        ></ProjectDetail>
      )}
      {isAddingProject && (
        <NewProjectForm onSaveProject={onSaveProject} onCancel={onCancel} />
      )}
      {!isAddingProject && !isViewingProject && <NoProjectSelected onAddProjectClick={onAddProjectClick}/>}
    </div>
  );
}
