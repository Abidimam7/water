import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ setActiveSection, activeSection }) => {
  return (
    <div style={{ width: '250px', height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Nav className="flex-column">
        <Nav.Link
          onClick={() => setActiveSection('photos')}
          active={activeSection === 'photos'}
        >
          Manage Photos
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('jobs')}
          active={activeSection === 'jobs'}
        >
          Manage Jobs
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('applications')}
          active={activeSection === 'applications'}
        >
          User Applications
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
