import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: '',
  });

  const [selectedPosition, setSelectedPosition] = useState('');
  const [jobVacancies, setJobVacancies] = useState([]);

  // Fetch job vacancies from the backend when the component mounts
  useEffect(() => {
    const fetchJobVacancies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cms/api/job-vacancies/');
        setJobVacancies(response.data);
      } catch (error) {
        console.error("Error fetching job vacancies:", error);
      }
    };

    fetchJobVacancies();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);  // State to track if the form is submitted

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Ensure all form data fields are correctly added
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('email', formData.email);
        formDataToSubmit.append('phone', formData.phone);
        formDataToSubmit.append('position', selectedPosition); // Use the selectedPosition (ID)
        formDataToSubmit.append('resume', formData.resume);
        formDataToSubmit.append('message', formData.message);

        // Log the FormData for debugging
        console.log("Submitting FormData:", [...formDataToSubmit.entries()]);

        const response = await axios.post('http://localhost:8000/cms/api/career-applications/', formDataToSubmit, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log("Application submitted successfully:", response.data);
        
        // Set isSubmitted to true after successful submission
        setIsSubmitted(true);
    } catch (error) {
        console.error("Error submitting application:", error.response?.data || error.message);
        alert("Failed to submit the application. Please try again.");
    }
  };

  const handlePositionSelect = (positionId) => {
    setSelectedPosition(positionId); // Store position ID, not title
    setFormData({ ...formData, position: positionId }); // Update formData for submission
  };

  return (
    <div className="container mt-5">
      {/* New Content Section */}
      <div className="text-center mb-4">
        <h2>Join Us in Creating a Healthier Tomorrow</h2>
        <p>
          Whether it’s packaged drinking water, mineral water, or flavored sodas, Clean Water & Allied Products Pvt. Ltd. is your trusted partner for purity, taste, and innovation. Let’s stay refreshed, healthy, and sustainable together.
        </p>
      </div>
      {/* Show Thank You Message if the application was submitted */}
      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Thank You!</h4>
          <p>We have received your application. Our team will get back to you shortly.</p>
        </div>
      ) : (
        <>
          {/* Job Vacancy List with Card Design */}
          <div className="row mb-4">
            {jobVacancies.length > 0 ? (
              jobVacancies.map((vacancy) => (
                <div key={vacancy.id} className="col-md-4">
                  <div
                    className="card"
                    onClick={() => handlePositionSelect(vacancy.id)} // Pass ID instead of title
                  >
                    <div className="card-body">
                      <h5 className="card-title">{vacancy.title}</h5>
                      <p className="card-text">{vacancy.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No job vacancies available at the moment.</p>
            )}
          </div>

          {/* Form to Apply for Selected Position */}
          {selectedPosition && (
            <div>
              <h4 className="mt-4">Apply for Position {selectedPosition}</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">Upload Your Resume</label>
                  <input
                    type="file"
                    className="form-control"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Why Should We Hire You?</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your skills and experience"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Application</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Career;
