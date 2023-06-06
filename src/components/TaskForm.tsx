import React, { useState } from 'react';

interface TaskFormProps {
  assignees: string[];
  onSubmit: (taskName: string, assignee: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ assignees, onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAssignee(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(taskName, assignee);
    setTaskName('');
    setAssignee('');
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            className="form-control"
            value={taskName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="assignee">Assignee:</label>
          <select
            id="assignee"
            className="form-control"
            value={assignee}
            onChange={handleSelectChange}
          >
            <option value="">Select Assignee</option>
            {assignees.map((assignee) => (
              <option key={assignee} value={assignee}>
                {assignee}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
