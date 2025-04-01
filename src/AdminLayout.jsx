import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AdminLayout = ({ children }) => {
  return (
    <div className="vh-100" style={{ overflow: 'hidden', backgroundColor: '#f5f7fa' }}>
      <div className="d-flex" style={{ height: "100%" }}>
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column" style={{ backgroundColor: '#fff', width: 'calc(100% - 240px)' }}>
          <Header />
          <main className="flex-grow-1 p-4">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
