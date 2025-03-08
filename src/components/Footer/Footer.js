import React from "react";
import "./Footer.css";
import social from "../../assets/Social platforms logos.png";
import social2 from "../../assets/Social platforms logos2.png";
import social3 from "../../assets/Social platforms logos3.png";
import social4 from "../../assets/Social platforms logos4.png";
import Icon from "../../assets/Icon.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <p className="footer-link">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="social-icons">
            <img src={social} alt="Facebook" />
            <img src={social2} alt="Google" />
            <img src={social3} alt="Apple" />
            <img src={social4} alt="Instagram" />
          </div>
        </div>

        {/* Center Links */}
        <div className="footer-links">
          <div>
            <h4 className="footer-head">START A BUSINESS</h4>
            <ul>
              <li className="footer-link">Features</li>
              <li className="footer-link">Solutions</li>
              <li className="footer-link">Integrations</li>
              <li className="footer-link">Enterprise</li>
              <li className="footer-link">Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-head">GOVERNMENT REGISTRATION</h4>
            <ul>
              <li className="footer-link">Partners</li>
              <li className="footer-link">Community</li>
              <li className="footer-link">Developers</li>
              <li className="footer-link">App</li>
              <li className="footer-link">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-head">COMPLIANCE & TAX</h4>
            <ul>
              <li className="footer-link">Channels</li>
              <li className="footer-link">Scale</li>
              <li className="footer-link">Watch the Demo</li>
              <li className="footer-link">Our Competition</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-head">BIS & CDSCO</h4>
            <ul>
              <li className="footer-link">About Us</li>
              <li className="footer-link">News</li>
              <li className="footer-link">Leadership</li>
              <li className="footer-link">Media Kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-img">
      <img
          src={Icon}
          alt="Scroll to Top"
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        </div>
      <div className="footer-bottom">
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
