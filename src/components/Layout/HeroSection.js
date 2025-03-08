import React from "react";
import "./HeroSection.css";
import starIcon from "../../assets/Link → SVG.png"
import star from "../../assets/stars.png"
import profile from "../../assets/profile.png";
import hand from "../../assets/hand.png"
import smallIcons from "../../assets/Size=Small.png"



const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background Image will be set in CSS */}
      <div className="hero-content">
        <div className="rating-container">
          <span className="star-icon">
            <img src={starIcon} alt="Google" className="google-icon" />
          </span>
          <span className="rating-text">Google Rating</span>
          <div className="stars">
            <img src={star} alt="Star" className="star-image" />
            <img src={star} alt="Star" className="star-image" />
            <img src={star} alt="Star" className="star-image" />
            <img src={star} alt="Star" className="star-image" />
            <img src={star} alt="Star" className="star-image" />
          </div>
        </div>

        <h1 className="hero-title">
          Your trusted partner<br />
          for compliance business needs
        </h1>
        
        <p className="hero-description">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various, <strong>registrations, tax filings</strong>, and other <strong>legal
          matters</strong>.
        </p>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              {/* Customer Rating Icon */}
              <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="4" width="8" height="8" rx="1" stroke="#4F4F4F" strokeWidth="1.5"/>
  <rect x="14" y="4" width="8" height="8" rx="1" stroke="#4F4F4F" strokeWidth="1.5"/>
  <rect x="2" y="16" width="8" height="8" rx="1" stroke="#4F4F4F" strokeWidth="1.5"/>
  <rect x="14" y="16" width="8" height="8" rx="1" stroke="#4F4F4F" strokeWidth="1.5"/>
</svg>
            </div>
            <div className="stat-text">
              <div className="stat-value">4.5+</div>
              <div className="stat-label">Customer Rating</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Clients Icon */}
              <img src={profile} alt="Google" className="google-icon" />
            </div>
            <div className="stat-text">
              <div className="stat-value">20,000+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Financial Stability Icon */}
              <img src={hand} alt="Google" className="google-icon" />
            </div>
            <div className="stat-text">
              <div className="stat-value">99.8%</div>
              <div className="stat-label">Financial Stability</div>
            </div>
          </div>
        </div>

        <div className="cta-container">
          <button className="cta-button">Talk An Expert</button>
          <a href="#how-it-works" className="how-it-works">
          <img src={smallIcons} alt="Google" className="google-icon" />
          <span className="smallIcons-text">
          See how it works
          </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;