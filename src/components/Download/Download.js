import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Download.css"; 
import appImage from "../../assets/Group 23.png"; 
import appStore from "../../assets/Frame 7844.png";
import googleStore from "../../assets/Frame 7846.png"

const Download = () => {
  return (
    <section className="download-app-section position-relative">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-lg-6 col-md-6 text-content position-relative z-2">
            <h2 className="fw-bold text-white">
              Manage Your Services by your <br /> Mobile Phone
            </h2>
            <p className="text-light">
              Download our app to manage and track your services. Our app enables 
              you to stay in touch with our experts and aids you in tracking your progress.
            </p>
            <p className="text-white fw-semibold">Get the App</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 app-store">
              <img src={appStore} alt="App Store" className="store-badge"  />
              <img src={googleStore} alt="Google Play" className="store-badge" />
            </div>
          </div>

          {/* Right Side - Image Overlapping */}
          <div className="col-lg-6 col-md-6 position-relative">
            <div className="image-container">
              <img src={appImage} alt="App Preview" className="app-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
