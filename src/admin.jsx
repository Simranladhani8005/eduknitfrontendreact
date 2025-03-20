import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="d-flex vh-100" style={{ overflow: 'hidden', backgroundColor: '#f5f7fa' }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-4 d-flex flex-column justify-content-between" style={{ width: "240px", height: "100vh" }}>
        <div>
          <h4 className="mb-4">Admin Panel</h4>
          <p>Welcome, <strong>{user?.name}</strong>!</p>
          <div className="mt-4">
            <button className="btn btn-outline-light w-100 mb-3" onClick={() => navigate('/manage-users')}>Manage Users</button>
            <button className="btn btn-outline-light w-100" onClick={() => navigate('/manage-courses')}>Manage Courses</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: "240px", padding: '40px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary">Welcome to the Admin Dashboard</h1>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <p className="text-center" style={{ fontSize: '1.25rem', color: '#555' }}>Select an option from the sidebar to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;