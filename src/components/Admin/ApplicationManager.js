import React, { useState } from 'react';

const ApplicationManager = () => {
  const [applications, setApplications] = useState([]);

  const handleDelete = (id) => {
    setApplications((prevApplications) => prevApplications.filter((app) => app.id !== id));
  };

  return (
    <div>
      <h2>User Applications</h2>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((app) => (
          <div key={app.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <h4>{app.name}</h4>
            <p>Email: {app.email}</p>
            <p>Message: {app.message}</p>
            <button onClick={() => handleDelete(app.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ApplicationManager;
