import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";
import profileImage from "../../assets/div.lazyloaded.png";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: profileImage,
  },
  {
    id: 2,
    name: "Emma Johnson",
    position: "CEO, TechCorp, UK",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 5,
    image: profileImage,
  },
  {
    id: 3,
    name: "John Doe",
    position: "Founder, Startup Inc., India",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4,
    image: profileImage,
  },
  {
    id: 4,
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: profileImage,
  },
  {
    id: 5,
    name: "Emma Johnson",
    position: "CEO, TechCorp, UK",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 5,
    image: profileImage,
  },
  {
    id: 6,
    name: "John Doe",
    position: "Founder, Startup Inc., India",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4,
    image: profileImage,
  },
];

const TestimonialsCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="header-row">
        <h2 className="sections-title">What people say about us</h2>
        <div className="carousel-controls">
          <button
            className="prev-btn"
            onClick={() => document.querySelector(".carousel-control-prev")?.click()}
          >
            &#10094;
          </button>
          <button
            className="next-btn"
            onClick={() => document.querySelector(".carousel-control-next")?.click()}
          >
            &#10095;
          </button>
        </div>
      </div>

      <Carousel indicators={true} interval={3000} className="custom-carousel">
        {[...Array(Math.ceil(testimonials.length / (isMobile ? 1 : 2)))].map((_, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-group">
              {testimonials
                .slice(index * (isMobile ? 1 : 2), index * (isMobile ? 1 : 2) + (isMobile ? 1 : 2))
                .map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="quote-stars-row">
                      <FaQuoteLeft className="quote-icon" />
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="star-icon">
                            {i + 1 <= Math.floor(testimonial.rating) ? (
                              <FaStar className="star" />
                            ) : i < testimonial.rating ? (
                              <FaStarHalfAlt className="star" />
                            ) : null}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="testimonial-text mt-6">{testimonial.text}</p>
                    <div className="testimonial-footer">
                      <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                      <div className="testimonial-info">
                        <h5 className="testimonial-name">{testimonial.name}</h5>
                        <p className="testimonial-position">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialsCarousel;
