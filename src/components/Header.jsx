import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2" />
              123 Street, Finland
            </small>
            <small className="me-3 text-light">
              <i className="fa fa-phone-alt me-2" />
              +012 345 6789
            </small>
            <small className="text-light">
              <i className="fa fa-envelope-open me-2" />
              info@example.com
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              to=""
            >
              <i className="fab fa-facebook-f fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              to=""
            >
              <i className="fab fa-linkedin-in fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              to=""
            >
              <i className="fab fa-instagram fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
              to=""
            >
              <i className="fab fa-youtube fw-normal" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar End */}
    {/* Navbar & Hero Start */}
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand d-flex align-items-center p-0">
          <img 
            src="/assets/img/logo.png" 
            alt="Beyond Lanka Logo" 
            style={{ height: "60px", marginRight: "10px" }} 
          />
          <h1 
            className="text-primary m-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Beyond Lanka
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/About" className="nav-item nav-link">
              About
            </Link>
            <Link to="/Destination" className="nav-item nav-link">
              Destinations
            </Link>
            <Link to="/Services" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/Packages" className="nav-item nav-link">
              Packages
            </Link>
          </div>
        </div>
      </nav>
    </div>
    {/* Navbar & Hero End */}
    </div>
  )
}

export default Header