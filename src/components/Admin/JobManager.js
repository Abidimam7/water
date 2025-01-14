import React, { useState } from 'react';

const JobManager = () => {
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({ title: '', description: '', requirements: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleAddJob = () => {
    if (jobDetails.title && jobDetails.description && jobDetails.requirements) {
      setJobs((prevJobs) => [...prevJobs, { ...jobDetails, id: jobs.length + 1 }]);
      setJobDetails({ title: '', description: '', requirements: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Manage Jobs</h2>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={jobDetails.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Job Description"
        value={jobDetails.description}
        onChange={handleInputChange}
      />
      <textarea
        name="requirements"
        placeholder="Requirements"
        value={jobDetails.requirements}
        onChange={handleInputChange}
      />
      <button onClick={handleAddJob}>Add Job</button>

      <div>
        {jobs.map((job) => (
          <div key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.description}</p>
            <p><strong>Requirements:</strong> {job.requirements}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobManager;
