


import React, { useState } from "react";
import './Home.css';

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wellness Enthusiast",
      text: "Nature's Cure transformed my approach to health. The natural remedies have made a significant difference in my daily wellness routine.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Fitness Trainer",
      text: "As a fitness professional, I appreciate the holistic approach to health. It complements my training programs perfectly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Nutrition Specialist",
      text: "The herbal remedies and natural solutions provided here are backed by traditional wisdom and modern research.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop"
    }
  ];
  return (
    <>
      <div className="home-section text-white py-5 d-flex align-items-center min-vh-100" 
           >
        <div className="overlay w-100 h-100 d-flex align-items-center">
          <div className="container text-center">
            <h1 className="display-3 mb-4 fw-bold animate-grow">HEALING THROUGH NATURE</h1>
            <p className="lead mb-4 animate-fade">
              Discover the power of natural remedies for a healthier lifestyle.
            </p>
          </div>
        </div>
      </div>

      <section className="why-useful-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title">Why Nature's Cure is Useful</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 benefit-card">
                <div className="card-body text-white p-4">
                  <h3 className="card-title h4 mb-3">Natural Healing</h3>
                  <p className="card-text text-[#a5d6a7]">Experience healing through time-tested natural remedies without side effects.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 benefit-card">
                <div className="card-body text-white p-4">
                  <h3 className="card-title h4 mb-3">Holistic Approach</h3>
                  <p className="card-text">Address the root cause of health issues with comprehensive natural solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 benefit-card">
                <div className="card-body text-white p-4">
                  <h3 className="card-title h4 mb-3">Sustainable Health</h3>
                  <p className="card-text">Build long-term health and wellness through natural practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs-section text-white py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title">Frequently Asked Questions</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className=" text-dark h-100 faq-card">
                <div className="card-body p-4">
                  <h3 className="card-title h4 mb-3">What are natural remedies?</h3>
                  <p className="card-text">Natural remedies are healing methods and substances derived from nature, including herbs, plants, and traditional practices.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-dark h-100 faq-card">
                <div className="card-body p-4">
                  <h3 className="card-title h4 mb-3">Are natural remedies safe?</h3>
                  <p className="card-text">Natural remedies are generally safe when used correctly, but it's important to consult with healthcare professionals for proper guidance.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-dark h-100 faq-card">
                <div className="card-body p-4">
                  <h3 className="card-title h4 mb-3">How long do natural treatments take?</h3>
                  <p className="card-text">The timeline varies depending on the condition and treatment, but natural healing typically focuses on sustainable, long-term results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title">Related Resources</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 related-card">
                <div className="card-body text-white p-4">
                  <h3 className="card-title h4 mb-3">Herbal Remedies Guide</h3>
                  <p className="card-text">Comprehensive guide to common medicinal herbs and their uses.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 related-card">
                <div className="card-body text-white p-4">
                  <h3 className="card-title h4 mb-3">Natural Health Tips</h3>
                  <p className="card-text">Daily practices for maintaining optimal health naturally.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 related-card">
                <div className="card-body text-white p-4">
                  <h3 className="card-title h4 mb-3">Wellness Programs</h3>
                  <p className="card-text">Structured programs for natural health and healing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 section-title">Featured Natural Products</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card product-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300&h=200&fit=crop" 
                  className="card-img-top" 
                  alt="Herbal Tea - Various dried herbs and flowers in glass jars"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Organic Herbal Tea</h5>
                  <p className="card-text">Calming blend of natural herbs for relaxation and wellness.</p>
                  <button className="btn btn-outline-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card product-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=200&fit=crop" 
                  className="card-img-top" 
                  alt="Essential Oils - Collection of aromatherapy oils"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Essential Oils Set</h5>
                  <p className="card-text">Pure essential oils for aromatherapy and natural healing.</p>
                  <button className="btn btn-outline-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card product-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1626197031507-c17099753214?w=300&h=200&fit=crop" 
                  className="card-img-top" 
                  alt="Herbal Supplements - Natural vitamin and mineral capsules"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Herbal Supplements</h5>
                  <p className="card-text">Natural supplements for enhanced well-being and vitality.</p>
                  <button className="btn btn-outline-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card product-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&h=200&fit=crop" 
                  className="card-img-top" 
                  alt="Natural Skincare - Organic beauty products with herbs"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Natural Skincare</h5>
                  <p className="card-text">Organic skincare products for healthy, glowing skin.</p>
                  <button className="btn btn-outline-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title">What Our Customers Say</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`carousel-item ${index === activeTestimonial ? 'active' : ''}`}>
                      <div className="text-center">
                        <img src={testimonial.image} className="rounded-circle mb-3" alt={testimonial.name} width="60" />
                        <p className="lead mb-3">{testimonial.text}</p>
                        <h5 className="mb-0">{testimonial.name}</h5>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}>
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}>
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">Stay Updated with Natural Health Tips</h2>
              <p className="mb-4">Subscribe to our newsletter for the latest updates on natural remedies and wellness tips.</p>
              <form className="newsletter-form">
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email for newsletter" />
                  <button className="btn btn-light" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-primary">1000+</h3>
                <p className="text-muted">Natural Remedies</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-primary">50+</h3>
                <p className="text-muted">Expert Herbalists</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-primary">10k+</h3>
                <p className="text-muted">Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-primary">5+</h3>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
















