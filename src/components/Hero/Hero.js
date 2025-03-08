import React from "react";
import "./Hero.css";
import checkIcon from "../../assets/check.png"; 

const Hero = () => {
  return (
    <div className="heros-section">
      <p className="heros-title mb-3">1% OF THE INDUSTRY</p>
      <h2 className="heros-head mb-3">Welcome to your new digital reality. Now.</h2>

      {/* Centered Email Input and Button */}
      <div className="heros-input  mb-3">
        <div className="input-wrapper">
          <input type="email" placeholder="Enter Your Email" />
          <button>Submit</button>
        </div>
      </div>

      {/* Features with Image Checkmark */}
      <div className="heros-features">
        <span>
          <div className="check-circle">
            <img src={checkIcon} alt="Check" />
          </div>
          Instant results
        </span>
        <span>
          <div className="check-circle">
            <img src={checkIcon} alt="Check" />
          </div>
          User-friendly interface
        </span>
        <span>
          <div className="check-circle">
            <img src={checkIcon} alt="Check" />
          </div>
          Personalized customization
        </span>
      </div>
    </div>
  );
};

export default Hero;
