import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center p-2 border-top bg-body-tertiary">
        <p className="col-md-4 mb-0 text-muted">© 2024 Company, Inc</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32"></svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
