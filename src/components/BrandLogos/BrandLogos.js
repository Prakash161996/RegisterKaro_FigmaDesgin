import React from "react";
import "./BrandLogos.css";
import company1 from "../../assets/Company logo.png"
import company2 from "../../assets/Company logo2.png";
import company3 from "../../assets/Company logo3.png";
import company4 from "../../assets/Company logo4.png";
import company5 from "../../assets/Company logo5.png";
import company6 from "../../assets/Company logo6.png"

const BrandLogos = () => {
  return (
    <div className="brand-logos">
      <img src={company1} alt="Coinbase" />
      <img src={company2} alt="Spotify" />
      <img src={company3} alt="Slack" />
      <img src={company4} alt="Dropbox" />
      <img src={company5} alt="Webflow" />
      <img src={company6} alt="Zoom" />
    </div>
  );
};

export default BrandLogos;
