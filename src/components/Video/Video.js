import React from 'react';
import light from "../../assets/light.png";
import tv from "../../assets/tv.png";
import girl from "../../assets/girl.png";
import youtube from "../../assets/youtube-logo.png";
import "./Video.css";

export const Video = () => {
  return (
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
  )
}
