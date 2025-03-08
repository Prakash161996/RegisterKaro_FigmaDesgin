import React from "react";
import "./Statistics.css"; 

const Statistics = () => {
  const stats = [
    { value: "1M+", label: "Customers" },
    { value: "12+", label: "Years of Excellence" },
    { value: "41+", label: "R&D Engineers" },
    { value: "78+", label: "Countries" },
    { value: "3287+", label: "Partners" },
    { value: "41+", label: "Awards Received" },
  ];

  return (
    <div className="statistics">
      <h5 className="text-center text-warning faq-title mb-3">WHY REGISTER KARO</h5>
      <h2 className="text-center fw-bold stat-head">Some Numbers are important</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <h3 className="label-h">{stat.value}</h3>
            <p className="label-p">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
