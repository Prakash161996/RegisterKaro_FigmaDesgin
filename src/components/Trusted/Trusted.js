import React from 'react';
import ora from "../../assets/Vector.png";
import mom from "../../assets/Group.png";
import sam from "../../assets/Group (1).png";
import mon from "../../assets/Group (2).png";
import sem from "../../assets/Group (2).png";
import "./Trusted.css";

const Trusted = () => {
    const brands = [ora, mom, mom, sam, mon, sem];
  return (
    <section className="trusted-section">
          <div className="trusted-container">
            <h2>Trusted By Over 100+ Startups and Freelance Businesses</h2>
            <div className="trusted-logos">
              {brands.map((logo, index) => (
                <img key={index} src={logo} alt={`Brand ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>
  )
}

export default Trusted