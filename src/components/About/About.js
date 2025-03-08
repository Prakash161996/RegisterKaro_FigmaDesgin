import React from 'react';
import Symbolwhite from "../../assets/Symbolwhite.png";
import Frame from "../../assets/Frame 394.png";
import "./About.css"

const About = () => {
  return (
    <section className="about-section ">
    <div className="row align-items-center">
      {/* Left Side: Text Content */}
      <div className="col-lg-6 d-flex flex-column align-items-start gap-4">
        <h6 className="section-subtitle">WELCOME TO REGISTERKARO.IN</h6>
        <h2 className="section-title">
          About <span>Register Karo</span>
        </h2>
        <p className="about-text">
          We have been using Intelegencia as our DevOps vendor for our
          field service applications over the last couple of years and I’m
          extremely pleased with their performance, ability to execute,
          and willingness to adapt in our ever changing environment. Perry
          is an outstanding leader who is fanatical about customer
          satisfaction. He has built a solid team which has consistently
          delivered on projects thereby exceeding everyone’s expectations.
          I would strongly recommend their services to any organization
          that is looking for solid, reliable, and predictable outcomes.
        </p>
        <button className="btn btn-primary d-flex align-items-center gap-2">
          Learn More
          <img src={Symbolwhite} alt="Arrow" className="btn-icon" />
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="col-lg-5 text-center">
        <img src={Frame} alt="Team" className="about-image" />
      </div>
    </div>
  </section>
  )
}

export default About