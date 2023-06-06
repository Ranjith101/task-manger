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

const DeveloperPage = () => {
  const [developers] = useState<string[]>(['dev1', 'dev2', 'dev3', 'dev4']); // List of developers
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskSubmit = (taskName: string, assignee: string) => {
    const newTask: Task = { taskName, assignee, status: 'not completed' };
    setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
  };

  const handleDeveloperChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeveloper(event.target.value);
    setTasks([]); // Reset tasks when developer is changed
  };

  const handleTaskStatusChange = (index: number, completed: boolean) => {
    setTasks((prevTasks: Task[]) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].status = completed ? 'completed' : 'not completed';
      return updatedTasks;
    });
  };

  const filteredTasks = tasks.filter((task) => task.assignee === selectedDeveloper);

  return (
    <div className="container">
      <h1>Developer Page</h1>
      <div className="form-group">
        <label htmlFor="developerSelect">Select Developer:</label>
        <select
          className="form-control"
          id="developerSelect"
          value={selectedDeveloper}
          onChange={handleDeveloperChange}
        >
          <option value="">Select Developer</option>
          {developers.map((developer, index) => (
            <option key={index} value={developer}>
              {developer}
            </option>
          ))}
        </select>
      </div>
      <TaskForm
        assignees={[]} // Assignees dropdown can be removed for developers
        onSubmit={handleTaskSubmit}
      />
      <h2>Tasks</h2>
      <div className="row">
        {filteredTasks.map((task, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="card mb-4 shadow">
              <div className="card-body">
                <h5 className="card-title">{task.taskName}</h5>
                <p className="card-text">Assigned to: {task.assignee}</p>
                <p className="card-text">Status: {task.status}</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={task.status === 'completed'}
                    onChange={(e) => handleTaskStatusChange(index, e.target.checked)}
                  />
                  <label className="form-check-label">Completed</label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperPage;
