import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to create a new project)
    console.log('Submitting project:', projectName);
    setProjectName(''); // Reset the input field after submission
    navigate('/manager'); // Navigate to the manager page
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            className="form-control"
            value={projectName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
