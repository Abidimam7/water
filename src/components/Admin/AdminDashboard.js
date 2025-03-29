import React, { useState } from 'react';
import Admin from './Admin';
import Application from './Application';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';  // Sidebar component

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar visibility

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? 'd-block' : 'd-none'}`}>
        <Sidebar />
      </div>

      <div className="main-content">
        {/* Header Section */}
        <header className="header bg-primary text-white py-3">
          <button 
            className="btn btn-outline-light toggle-btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? 'Hide' : 'Show'} Sidebar
          </button>
          <h1 className="my-4 text-center">Admin Dashboard</h1>
        </header>

        <div className="container mt-4">
          {/* Admin Section */}
          <section id="admin-section" className="mb-5">
            <Admin />
          </section>

          {/* Career Applications and Job Vacancies Section */}
          <section id="application-section">
            <Application />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
