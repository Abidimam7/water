import React from 'react';

const Sidebar = () => {
  const handleLogout = () => {
    // Logic for logout (e.g., clearing sessionStorage, localStorage, or calling an API)
    console.log('User logged out');
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <div className="sidebar-content">
      <h2 className="text-center text-dark mt-4 mb-4">Admin Dashboard</h2>
      <ul className="nav flex-column px-3">
        <li className="nav-item mb-3">
          <a href="#admin-section" className="nav-link text-dark">
            <i className="bi bi-house-door me-2"></i> Admin Section
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#career-applications" className="nav-link text-dark">
            <i className="bi bi-file-earmark-text me-2"></i> Career Applications
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#job-vacancies" className="nav-link text-dark">
            <i className="bi bi-briefcase me-2"></i> Job Vacancies
          </a>
        </li>
        {/* Logout Button */}
        <li className="nav-item mb-3">
          <button onClick={handleLogout} className="nav-link btn btn-link text-danger p-0">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
