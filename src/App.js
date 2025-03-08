import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import instagramIcon from "./assets/Insta.png";
import Fb from "./assets/Fb.png";
import Twiter from "./assets/Twiter.png";
import Pintrest from "./assets/Pintrest.png";
import logo from "./assets/logo_logo 1.png";
import hat from "./assets/christmas-hat-png-15 1.png";
import ora from "./assets/Vector.png";
import mom from "./assets/Group.png";
import sam from "./assets/Group (1).png";
import mon from "./assets/Group (2).png";
import sem from "./assets/Group (2).png";
import link1 from "./assets/Link → vector.svg.png";
import link2 from "./assets/Link → vector-1.svg.png";
import link3 from "./assets/Link → vector-2.svg.png";
import link4 from "./assets/Link → vector-3.svg.png";
import link5 from "./assets/Link → vector-4.svg.png";
import link6 from "./assets/Link → vector-5.svg.png";
import symbol from "./assets/Symbol.png";
import Symbolwhite from "./assets/Symbolwhite.png";
import Frame from "./assets/Frame 394.png";
import sqrt from "./assets/sqrt.png";
import right from "./assets/wright.png";
import blue from "./assets/blue.png";
import man from "./assets/man.png";
import light from "./assets/light.png";
import tv from "./assets/tv.png";
import girl from "./assets/girl.png";
import youtube from "./assets/youtube-logo.png";
import logos1 from "./assets/Display Round Logo.png";
import logos2 from "./assets/Display Round Logo2.png";
import logos3 from "./assets/Display Round Logo3.png";
import logos4 from "./assets/Display Round Logo4.png";
import logos5 from "./assets/Display Round Logo5.png";
import logos7 from "./assets/Display Round Logo7.png";
import logos8 from "./assets/Display Round Logo8.png";
import logos9 from "./assets/Display Round Logo9.png";
import logos11 from "./assets/Display Round Logo11.png";
import logos12 from "./assets/Display Round Logo12.png";
import logos13 from "./assets/Display Round Logo13.png";
import logos14 from "./assets/Display Round Logo14.png";
import logos15 from "./assets/Display Round Logo15.png";
import logos16 from "./assets/Display Round Logo16.png";
import logos17 from "./assets/Display Round Logo17.png";
import logos18 from "./assets/Display Round Logo18.png";
import logos19 from "./assets/Display Round Logo19.png";
import logos20 from "./assets/Display Round Logo20.png";
import logos21 from "./assets/Display Round Logo21.png";
import logos22 from "./assets/Display Round Logo22.png";
import logos23 from "./assets/Display Round Logo23.png";
import logos24 from "./assets/Display Round Logo24.png";
import note from "./assets/note.png";
import credit from "./assets/credit.png";
import contact from "./assets/contact-form 1.png";
import ant from "./assets/ant-design_mail-filled.png";

import "./App.css";
import BlogGrid from "./components/Blog/BlogSection";
import TestimonialsCarousel from "./components/Testimonial/Testimonials";
import FAQ from "./components/FAQ/FAQ.js";
import Download from "./components/Download/Download.js";
import Statistics from "./components/Statistics/Statistics.js";
import BrandLogos from "./components/BrandLogos/BrandLogos.js";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/Navbar/Navbar.js";
import HeroSection from "./components/Layout/HeroSection.js";
import Hero from "./components/Hero/Hero.js";

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

function App() {
  const brands = [ora, mom, mom, sam, mon, sem];

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <div
        className="main-container"
        style={{ maxWidth: "1440px", width: "100%", margin: "0 auto" }}
      >
        {/* header*/}
        <div
          className="py-2"
          style={{ background: "#1C4670", color: "white", minHeight: "44px" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-end">
              {/* Contact Info */}
              <div className="col-auto d-flex align-items-center">
                <small className="d-flex align-items-center">
                  <i className="bi bi-envelope me-2"></i> www.yourwebsite.com
                </small>
                <div className="divider mx-3"></div>
                <small className="d-flex align-items-center">
                  <i className="bi bi-telephone me-2"></i> +91 1234567890
                </small>
                <div className="divider mx-3"></div>
              </div>

              {/* Social Icons */}
              <div className="col-auto">
                <div className="social-icons d-flex gap-2">
                  <a href="#" className="me-2">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="#" className="me-2">
                    <img src={Fb} alt="Facebook" />
                  </a>
                  <a href="#" className="me-2">
                    <img src={Twiter} alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src={Pintrest} alt="Pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <NavBar />

        {/* Hero Section */}
        <HeroSection />

        {/* Trusted by section */}
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
        {/* Services by section */}

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

        {/* About Section */}
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

        {/* Why Choose Section */}
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

        {/* Video Section */}
        <section className="video-section py-5">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-6 text-light">
              <div className="video-section-head mb-5">
                <h2 className="fw-bold mb-4">Our Video Introductions</h2>
                <p className="video-section-para mr-3">
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                  magna vulputate pellentesque a diam tincidunt.
                </p>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <img
                    src={light}
                    alt="Explore ideas"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Explore ideas together</h5>
                  <p>
                    Engage audience segments and finally create actionable
                    insights.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="me-4">
                  <img
                    src={tv}
                    alt="Bring ideas to life"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Bring those ideas to life</h5>
                  <p>
                    Engage audience segments and finally create actionable
                    insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="position-relative mt-4 mt-lg-0">
                <img
                  src={girl}
                  alt="Video Thumbnail"
                  className="img-fluid rounded shadow"
                />

                <img
                  src={youtube}
                  alt="Play Button"
                  className="position-absolute top-50 start-50 translate-middle p-3"
                  style={{ width: "153px", height: "122px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* logo section */}
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

          <button className="btn  text-primary" >
            <span  className= "logo-showmore">Show more → </span></button>
        </section>

        {/* process-section */}
        <section className="process-section">
          <div className="row justify-content-center align-items-center">
            {/* Step 1 */}
            <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
              <div className="icon-circle red-bg">
                <img src={note} alt="Form Icon" />
              </div>
              <p className="form-process">Fill up Application Form</p>
            </div>

            {/* Step 2 */}
            <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
              <div className="icon-circle green-bg">
                <img src={credit} alt="Payment Icon" />
              </div>
              <p className="form-process">Make Online Payment</p>
            </div>

            {/* Step 3 */}
            <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
              <div className="icon-circle orange-bg">
                <img src={contact} alt="Executive Icon" />
              </div>
              <p className="form-process">Executive will Process Application</p>
            </div>

            {/* Step 4 */}
            <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
              <div className="icon-circle gray-bg">
                <img src={ant} alt="Mail Icon" />
              </div>
              <p className="form-process">Get Confirm Mail</p>
            </div>
          </div>
        </section>

        {/* blog section */}
        <BlogGrid />

        {/* Testimonal section */}
        <TestimonialsCarousel />
        {/* Faq */}
        <FAQ />
        {/* Download */}
        <Download />
        {/* Statistics */}
        <Statistics />
        {/* Hero  */}
        <Hero />
        {/* BrandLogos  */}
        <BrandLogos />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
