import React from "react";

const ContactPage = () => {
  return (
    <div className="row d-flex justify-content-between align-items-center mx-5">
      <h2 className="mb-4">Contact Us</h2>
      <div className="row ">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Contact Information</h4>
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
          <p>
            <strong>Email:</strong> example@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1234567890
          </p>
          <p>
            <strong>Follow us on social media:</strong>
          </p>
          <div className="social-links">
            <a href="#" className="me-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="me-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="me-2">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="me-2">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
