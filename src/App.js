import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import instagramIcon from "./assets/Insta.png";
import Fb from "./assets/Fb.png";
import Twiter from "./assets/Twiter.png";
import Pintrest from "./assets/Pintrest.png";
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
import Trusted from "./components/Trusted/Trusted.js";
import Services from "./components/Services/Services.js";
import About from "./components/About/About.js";
import WhyChoose from "./components/WhyChoose/WhyChoose.js";
import { Video } from "./components/Video/Video.js";
import Logo from "./components/Logo/Logo.js";
import Process from "./components/Process/Process.js";


function App() {


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
        <Trusted />

        {/* Services by section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Why Choose Section */}
        <WhyChoose />

        {/* Video Section */}
        <Video />

        {/* logo section */}
        <Logo />

        {/* process-section */}
        <Process />

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
