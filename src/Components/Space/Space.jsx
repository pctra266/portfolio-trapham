import React from "react";
import "./Space.css";
import logo from "../../assets/logo.png";

const Space = () => {
  return (
    <div className="space container">
      <div className="space-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image">
            <img src={logo} alt="Pham Cong Tra" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Pham Cong Tra</h1>
            <div className="contact-button-section">
              <button className="contact-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                Contact me
              </button>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="main-title">
          <h2>BACKEND</h2>
          <h2>DEVELOPER</h2>
        </div>

        {/* Contact Button */}

        {/* Contact Icons */}
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/trapham266"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="LinkedIn"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </svg>
          </a>
          <a
            href="https://github.com/pctra266"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="GitHub"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </a>

          <a
            href="mailto:trapham.dev@gmail.com"
            className="icon-link"
            title="Gmail"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
          </a>

          <a
            href="https://drive.google.com/file/d/1eDwCltHbQGesFGooAPlKuH_13mTNpKAS/view?usp=sharing"
            target="_blank"
            className="icon-link cv-icon"
            title="Download CV"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2M12,17L8,13H11V9H13V13H16L12,17M13,9V3.5L18.5,9H13Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Space;
