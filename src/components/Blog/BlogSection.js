import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/Image.jpeg";
import image2 from "../../assets/Image2.jpeg";
import image4 from "../../assets/Image4.jpeg";
import image5 from "../../assets/Image5.jpeg";
import image6 from "../../assets/Image6.jpeg";
import "./BlogSection.css";
import smallIcon from "../../assets/Icon wrap.png";

const blogs = [
  {
    id: 1,
    author: "Prabhash Mishra • 1 Jan 2023 • Today",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
    image: image,
  },
  {
    id: 2,
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
    image: image2,
  },
  {
    id: 3,
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
    tags: ["Audit", "Money Back"],
    image: image,
  },
  {
    id: 4,
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Collaboration can make our teams stronger, and our Individual designs better.",
    tags: ["Money", "Management"],
    image: image4,
  },
  {
    id: 5,
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
    image: image5,
  },
  {
    id: 6,
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Success"],
    image: image6,
  },
];

const tagColors = {
  "Tax & Audit": { text: "#007bff", bg: "#eef6ff" }, 
  "Management": { text: "#28a745", bg: "#ebf7ed" }, 
  "Tax": { text: "#ff5733", bg: "#ffebe6" }, 
  "Research": { text: "#ffc107", bg: "#fff8e1" }, 
  "Compliance": { text: "#6f42c1", bg: "#f3ecff" }, 
  "Audit": { text: "#17a2b8", bg: "#e5f6f8" }, 
  "Money Back": { text: "#dc3545", bg: "#fce8ea" }, 
  "Money": { text: "#6610f2", bg: "#ede8ff" }, 
  "Tax Return": { text: "#20c997", bg: "#e8f8f1" }, 
  "News": { text: "#fd7e14", bg: "#fff4e6" }, 
  "Private Limited Company": { text: "#e83e8c", bg: "#fdeff3" }, 
  "Customer Success": { text: "#6c757d", bg: "#f1f3f5" }, 
};


const BlogGrid = () => {
  return (
    <section className="blog-section py-5 text-dark" style={{ background: "#f8f9fa" }}>
      <div className="text-center mb-4">
        <h6 className="text-warning text-uppercase text-center mb-6">Explore Our Blogs</h6>
        <h2 className="text-center text-dark section-tittle">Accelerate Digital Transformation</h2>
      </div>
      <div className="row blog-row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card bg-light text-dark border-0 p-3">
              {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="card-img-top rounded" />

              {/* Author Text */}
              <p className="text-muted mb-1 mt-2">{blog.author}</p>

              {/* Title with Small Icon on Right */}
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title text-dark mb-0">{blog.title}</h5>
                <img src={smallIcon} alt="icon" className="small-icon" />
              </div>

              {/* Description */}
              <p className="card-text text-secondary mt-3">{blog.description}</p>

              {/* Tags */}
              <div className="d-flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="tag-text"
                    style={{
                      color: tagColors[tag]?.text || "#1c4670",
                      backgroundColor: tagColors[tag]?.bg || "#f8f9fa",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary custom-button mt-4">Show more blogs →</button>
      </div>
    </section>
  );
};

export default BlogGrid;
