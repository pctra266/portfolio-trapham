import React from "react";
import "./About.css";
import aboutImg from "../../assets/traphamDanhCo.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Phần ảnh bên trái */}
        <div className="about-left">
          <div className="image-card">
            <img src={aboutImg} alt="Pham Cong Tra" className="about-img" />
            <div className="img-overlay"></div>
          </div>
        </div>

        {/* Phần nội dung bên phải */}
        <div className="about-right">
          <h3 className="section-subtitle">WHO I AM</h3>
          <h2 className="section-title">
            Hi, I'm <span className="highlight">Pham Cong Tra</span>
          </h2>
          
          <div className="text-box">
            <p>
              I enjoy learning new technology and solving real-world problems by
              developing software. It makes me feel like a beneficial person who
              contributes value to society.
            </p>
            <p>
              My journey involves constantly exploring backend architectures, 
              optimizing databases, and building scalable systems.
            </p>
          </div>

          {/* Một vài chỉ số hoặc skill nhỏ (Optional - trang trí thêm) */}
          {/* <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">2+</span>
              <span className="stat-desc">Years Exp</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-desc">Projects</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;