import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="faq-section" style={{ backgroundColor: "#fafafa" }}>
      <div className="faq-container">
        <h6 className="text-center text-warning faq-title mb-3">FAQ</h6>
        <h2 className="text-center fw-bold mb-5">Frequent Ask Questions</h2>

        <div className="faq-list">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="faq-card">
              <div className="faq-highlight"></div> {/* Colored Box */}
              <div className="faq-question">
                <span>
                  Can I recover deleted files from desktop with this software?
                </span>
                <span className="faq-arrow">&#x276F;</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 mb-3 faq-btn-section">
          <button className="btn btn-primary faq-btn">
            Show more <span>&#x2794;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
