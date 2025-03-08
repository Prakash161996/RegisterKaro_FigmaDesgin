import React from 'react';
import logos1 from "../../assets/Display Round Logo.png";
import logos2 from "../../assets/Display Round Logo2.png";
import logos3 from "../../assets/Display Round Logo3.png";
import logos4 from "../../assets/Display Round Logo4.png";
import logos5 from "../../assets/Display Round Logo5.png";
import logos7 from "../../assets/Display Round Logo7.png";
import logos8 from "../../assets/Display Round Logo8.png";
import logos9 from "../../assets/Display Round Logo9.png";
import logos11 from "../../assets/Display Round Logo11.png";
import logos12 from "../../assets/Display Round Logo12.png";
import logos13 from "../../assets/Display Round Logo13.png";
import logos14 from "../../assets/Display Round Logo14.png";
import logos15 from "../../assets/Display Round Logo15.png";
import logos16 from "../../assets/Display Round Logo16.png";
import logos17 from "../../assets/Display Round Logo17.png";
import logos18 from "../../assets/Display Round Logo18.png";
import logos19 from "../../assets/Display Round Logo19.png";
import logos20 from "../../assets/Display Round Logo20.png";
import logos21 from "../../assets/Display Round Logo21.png";
import logos22 from "../../assets/Display Round Logo22.png";
import logos23 from "../../assets/Display Round Logo23.png";
import logos24 from "../../assets/Display Round Logo24.png";
import "./Logo.css";

const Logo = () => {
    const logos = [
        logos1,
        logos2,
        logos3,
        logos4,
        logos5,
        logos7,
        logos8,
        logos9,
        logos11,
        logos12,
        logos13,
        logos14,
        logos15,
        logos16,
        logos17,
        logos18,
        logos19,
        logos20,
        logos21,
        logos22,
        logos23,
        logos24,
      ];
      
  return (
    <section
    className="text-center py-5"
    style={{ backgroundColor: "#FAFAFA" }}
  >
    <h2 className="fw-bold">Our Happy Clients</h2>
    <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
      Professionally cultivate one-to-one customer service with robust
      ideas. Dynamically innovate resource-leveling customer service for
      state-of-the-art customer service.
    </p>

    {/* Grid-Based Logo Section */}
    <div className="logos-grid-container">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="logos-item"
          style={{
            transform: `translate(${Math.random() * 20 - 10}px, ${
              Math.random() * 20 - 10
            }px) rotate(${Math.random() * 10 - 5}deg)`,
          }}
        >
          <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="img-fluid"
          />
        </div>
      ))}
    </div>

    <button className="btn  text-primary">
      <span className="logo-showmore">Show more → </span>
    </button>
  </section>
  )
}

export default Logo