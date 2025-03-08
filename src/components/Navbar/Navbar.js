import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_logo 1.png";
import { FaSearch } from "react-icons/fa";
import hat from "../../assets/christmas-hat-png-15 1.png";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white py-2 shadow-sm">
      <div className="container-fluid">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <img src={hat} alt="Hat" className="hat" />
        </div>
        
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/service1">
                    Service 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/service2">
                    Service 2
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
          </ul>

          {/* Search Icon */}
          <button className="btn btn-link text-dark mx-3">
            <FaSearch size={18} />
          </button>

          {/* CTA Button */}
          <a href="/talk-to-expert" className="btn btn-warning text-white px-4">
            Talk To An Expert
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;