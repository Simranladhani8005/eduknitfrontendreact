import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-dark text-white p-4 d-flex flex-column justify-content-between" style={{ width: "240px" }}>
      <div>
        <h4 className="mb-4">Admin Panel</h4>
        <p>Welcome, <strong>{user?.name}</strong>!</p>
        <div className="mt-4">
          <button className="btn btn-outline-light w-100 mb-3" onClick={() => navigate('/admin/manage-users')}>Manage Users</button>
          <button className="btn btn-outline-light w-100" onClick={() => navigate('/admin/courses')}>Manage Courses</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
