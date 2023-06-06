import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';

interface Project {
  projectName: string;
  tasks: Task[];
}

interface Task {
  taskName: string;
  assignee: string;
  status: string;
}

const ManagerPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleTaskSubmit = (taskName: string, assignee: string) => {
    const newTask: Task = { taskName, assignee, status: 'not completed' };
    setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
  };

  const handleProjectCreate = (projectName: string) => {
    const newProject: Project = { projectName, tasks: tasks };
    setProjects((prevProjects: Project[]) => [...prevProjects, newProject]);
    setTasks([]);
  };

  return (
    <div className="container">
      <h1>Manager Page</h1>
      <TaskForm
        assignees={['dev1', 'dev2', 'dev3', 'dev4']} // Replace with your list of developers
        onSubmit={handleTaskSubmit}
      />
      {/* <button className="btn btn-primary mb-4" onClick={() => handleProjectCreate('Project 1')}>
        Create Project
      </button> */}
      <h2>Tasks</h2>
      <div className="row">
        {tasks.map((task, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="card mb-4 shadow">
              <div className="card-body">
                <h5 className="card-title">{task.taskName}</h5>
                <p className="card-text">Assigned to: {task.assignee}</p>
                <p className="card-text">Status: {task.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Project History</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.projectName}</h3>
            <div className="row">
              {project.tasks.map((task, taskIndex) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={taskIndex}>
                  <div className="card mb-4 shadow">
                    <div className="card-body">
                      <h5 className="card-title">{task.taskName}</h5>
                      <p className="card-text">Assigned to: {task.assignee}</p>
                      <p className="card-text">Status: {task.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerPage;
