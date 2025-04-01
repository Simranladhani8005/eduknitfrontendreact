import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom" style={{ backgroundColor: '#007bff', color: '#fff' }}>
      <h5>Admin Dashboard</h5>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
