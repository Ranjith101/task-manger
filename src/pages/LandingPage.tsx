import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Welcome to Task Manager</h1>
      <div className="row">
        <div className="col">
          <Link to="/admin" className="btn btn-primary btn-lg">
            Admin
          </Link>
        </div>
        <div className="col">
          <Link to="/manager" className="btn btn-primary btn-lg">
            Manager
          </Link>
        </div>
        <div className="col">
          <Link to="/developer" className="btn btn-primary btn-lg">
            Developer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
