import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Application.css'; // Custom styles

const Application = () => {
  const [careerApplications, setCareerApplications] = useState([]);
  const [jobVacancies, setJobVacancies] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', requirements: '' });

  // Fetch data on page load
  useEffect(() => {
    axios
      .get('http://localhost:8000/cms/api/job-vacancies/')
      .then((response) => setJobVacancies(response.data))
      .catch((error) => console.error('Error fetching job vacancies:', error));

    axios
      .get('http://localhost:8000/cms/api/career-applications/')
      .then((response) => setCareerApplications(response.data))
      .catch((error) => console.error('Error fetching career applications:', error));
  }, []);

  // Add new job vacancy
  const addJobVacancy = () => {
    if (newJob.title && newJob.description) {
      axios
        .post('http://localhost:8000/cms/api/job-vacancies/', newJob)
        .then((response) => {
          setJobVacancies([...jobVacancies, response.data]);
          setNewJob({ title: '', description: '', requirements: '' });
        })
        .catch((error) => console.error('Error adding job vacancy:', error));
    }
  };

  // Remove job vacancy
  const removeJobVacancy = (id) => {
    axios
      .delete(`http://localhost:8000/cms/api/job-vacancies/${id}/`)
      .then(() => setJobVacancies(jobVacancies.filter((job) => job.id !== id)))
      .catch((error) => console.error('Error removing job vacancy:', error));
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="application-container">

      {/* Main Content */}
      <div className="main-content">
        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        {/* Career Applications Section */}
        <section id="career-applications" className="mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-secondary">Manage Career Applications</h2>
              <div>
                {careerApplications.length === 0 ? (
                  <p className="text-muted">No applications received yet.</p>
                ) : (
                  <ul className="list-group">
                    {careerApplications.map((app, index) => (
                      <li key={index} className="list-group-item">
                        <div>
                          <strong>Name:</strong> {app.name}
                        </div>
                        <div>
                          <strong>Email:</strong> {app.email}
                        </div>
                        <div>
                          <strong>Phone:</strong> {app.phone}
                        </div>
                        <div>
                          <strong>Position:</strong>{' '}
                          {app.position ? app.position.title : 'No position specified'}
                        </div>
                        <div>
                          <strong>Resume:</strong>{' '}
                          {app.resume ? (
                            <a href={`${app.resume}`} target="_blank" rel="noopener noreferrer">
                              View Resume
                            </a>
                          ) : (
                            <span>No resume uploaded</span>
                          )}
                        </div>
                        <div>
                          <strong>Message:</strong> {app.message}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Job Vacancies Section */}
        <section id="job-vacancies" className="mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-secondary">Manage Job Vacancies</h2>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Job Title"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Job Description"
                  rows="3"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                ></textarea>
                <textarea
                  className="form-control mb-2"
                  placeholder="Job Requirements"
                  rows="3"
                  value={newJob.requirements}
                  onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                ></textarea>
                <button className="btn btn-success" onClick={addJobVacancy}>
                  Add Job
                </button>
              </div>
              <div>
                {jobVacancies.length === 0 ? (
                  <p className="text-muted">No job vacancies posted yet.</p>
                ) : (
                  <ul className="list-group">
                    {jobVacancies.map((job) => (
                      <li
                        key={job.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <strong>{job.title}</strong>
                          <p>{job.description}</p>
                        </div>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeJobVacancy(job.id)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Application;
