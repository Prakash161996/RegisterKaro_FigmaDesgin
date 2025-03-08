import React from 'react';
import "./Services.css";
import link1 from "../../assets/Link → vector.svg.png";
import link2 from "../../assets/Link → vector-1.svg.png";
import link3 from "../../assets/Link → vector-2.svg.png";
import link4 from "../../assets/Link → vector-3.svg.png";
import link5 from "../../assets/Link → vector-4.svg.png";
import link6 from "../../assets/Link → vector-5.svg.png";
import symbol from "../../assets/Symbol.png";

const services = [
    {
      id: 1,
      icon: link1,
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
    },
    {
      id: 2,
      icon: link2,
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      id: 3,
      icon: link3,
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      id: 4,
      icon: link4,
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      id: 5,
      icon: link5,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      id: 6,
      icon: link6,
      title: "Bookkeeping Services",
      description:
        "Steering user behaviors with creative design, data insights & technology.",
    },
  ];

const Services = () => {
  return (
    <section className="services-section">
    <div className="container text-center">
      <p className="section-subtitle">WELCOME TO REGISTERKARO.IN</p>
      <h2 className="section-title mb-6">Explore Our Services</h2>
      <div className="row mt-8 ">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="col-md-4 col-sm-6 mb-4 position-relative"
          >
            <div className="service-card">
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a
                href="#"
                className="service-link d-flex align-items-center justify-center"
              >
                Learn more{" "}
                <img src={symbol} alt="arrow" className="arrow-icon" />
              </a>
            </div>

            {[0, 1, 3, 4].includes(index) && (
              <div className="d-flex align-items-center justify-content-center vr-container">
                <div className="vr"></div>
                {/* First overlap box at the top, second at the bottom */}
                {index % 2 !== 1 ? (
                  <div className="overlap-box overlap-top"></div>
                ) : (
                  <div className="overlap-box overlap-bottom"></div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="btn btn-primary custom-button mt-4">
        See All Services
      </button>
    </div>
  </section>
  )
}

export default Services