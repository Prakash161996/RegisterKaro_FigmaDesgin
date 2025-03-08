import React from 'react';
import sqrt from "../../assets/sqrt.png";
import right from "../../assets/wright.png";
import blue from "../../assets/blue.png";
import man from "../../assets/man.png";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
    <div className="row g-4">
      {/* First Row */}
      <div className="col-12 col-lg-6">
        <div
          className="feature-box"
          style={{ backgroundColor: "#ffffff" }}
        >
          <h6 className="section-subtitle">WHY REGISTERKARO.IN</h6>
          <h2 className="section-title">Why Choose Register Karo</h2>
          <p className="why-para">
            It is with consistent services and results that build trust
            with the people and that in turn help us to serve the business
            better.
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-6 d-flex gap-3">
        <div
          className="features-box small-box"
          style={{ backgroundColor: "#FEF3EF" }}
        >
          <img src={sqrt} alt="Feature 2" className="feature-icon" />
          <h5 className="feature-icon-head">Confidential & Safe</h5>
          <p className="feature-icon-para">
            All your private information is safe with us
          </p>
        </div>
        <div
          className="features-box small-box"
          style={{ backgroundColor: "#F1FBF3" }}
        >
          <img src={right} alt="Feature 3" className="feature-icon" />
          <h5 className="feature-icon-head">No Hidden Fee</h5>
          <p className="feature-icon-para">
            Everything is put before you with no hidden charges or
            conditions
          </p>
        </div>
      </div>

      <div className="col-12 col-lg-6 d-flex gap-3">
        <div
          className="features-box small-box d-none d-lg-block"
          style={{ backgroundColor: "#ffffff", border: "0px" }}
        ></div>
        <div
          className="features-box small-box"
          style={{ backgroundColor: "#EDF3FF" }}
        >
          <img src={blue} alt="Feature 7" className="feature-icon" />
          <h5 className="feature-icon-head">Guaranteed Satisfaction</h5>
          <p className="feature-icon-para">
            We ensure that you stay 100% satisfied with our offered
            services
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-6 d-flex gap-3">
        <div
          className="features-box small-box"
          style={{ backgroundColor: "#FBF1FB" }}
        >
          <img src={man} alt="Feature 6" className="feature-icon" />
          <h5 className="feature-icon-head">Expert CA/CS Assistance</h5>
          <p className="feature-icon-para">
            Prompt support from our in-house expert professionals
          </p>
        </div>
        <div
          className="features-box small-box"
          style={{ backgroundColor: "#27AE600A" }}
        >
          <img src={sqrt} alt="Feature 7" className="feature-icon" />
          <h5 className="feature-icon-head">Confidential & Safe</h5>
          <p className="feature-icon-para">
            All your private information is safe with us
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyChoose