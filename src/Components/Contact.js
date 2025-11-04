import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Show toast and reset form
    setShowToast(true);
    resetForm();

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Toast Notification */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div className={`toast ${showToast ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header" style={{ backgroundColor: 'rgb(139, 31, 31)', color: 'white' }}>
            <strong className="me-auto">Success!</strong>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={() => setShowToast(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Your message has been sent successfully! We'll get back to you soon.
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container-fluid p-0">
        <div className="position-relative">
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=400&fit=crop" 
            alt="Contact Us Hero" 
            className="w-100"
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" 
               style={{ backgroundColor: 'rgba(139, 31, 31, 0.7)' }}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center text-white">
                  <h1 className="fw-bold">Contact Us</h1>
                  <p className="lead">We're here to help and answer any questions you might have</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info and Form Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4" style={{ color: 'rgb(139, 31, 31)' }}>Get In Touch</h3>
                
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <i className="bi bi-geo-alt fs-2" style={{ color: 'rgb(139, 31, 31)' }}></i>
                  </div>
                  <div className="ms-3">
                    <h5>Location</h5>
                    <p className="mb-0">123 Nature's Way<br />Wellness District<br />Health City, HC 12345</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <i className="bi bi-telephone fs-2" style={{ color: 'rgb(139, 31, 31)' }}></i>
                  </div>
                  <div className="ms-3">
                    <h5>Phone</h5>
                    <p className="mb-0">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="bi bi-envelope fs-2" style={{ color: 'rgb(139, 31, 31)' }}></i>
                  </div>
                  <div className="ms-3">
                    <h5>Email</h5>
                    <p className="mb-0">info@naturescure.com<br />support@naturescure.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title mb-4" style={{ color: 'rgb(139, 31, 31)' }}>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          style={{ height: '150px' }}
                          required
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-lg px-5"
                        style={{ 
                          backgroundColor: 'rgb(139, 31, 31)',
                          color: 'white'
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container-fluid p-0 mt-5">
        <div className="ratio ratio-21x9" style={{ maxHeight: '400px' }}>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=400&fit=crop" 
            alt="Location Map" 
            className="w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;