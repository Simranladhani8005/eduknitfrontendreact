import React from "react";
import AdminLayout from "./AdminLayout";

const Admin = () => {
  return (
    <AdminLayout>
      <h1 className="text-primary">Welcome to the Admin Dashboard</h1>
      <p className="text-muted">Select an option from the sidebar to get started.</p>
    </AdminLayout>
  );
};

export default Admin;
