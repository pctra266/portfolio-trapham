import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <h2>Education</h2>
      </div>

      <div className="education-content">
        {/* Mục 1: FPT University */}
        <div className="education-item">
          
          {/* Hàng 1: Trường + Địa điểm */}
          <div className="education-row header-row">
            <h3 className="school-name">FPT University Ha Noi</h3>
            <span className="location">Thach Hoa, Thach That, Ha Noi</span>
          </div>

          {/* Hàng 2: Ngành học + Thời gian */}
          <div className="education-row sub-header-row">
            <span className="degree">Software Engineering, Minor in .NET</span>
            <span className="date">Jun. 2022 -- Jun 2026</span>
          </div>

          {/* Danh sách chi tiết */}
          <ul className="education-details">
            <li>
              GPA:{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1On0Y4D_ffrGNtLEqIFFGdK0qSJ-IlUoG/edit?usp=drive_link&ouid=110479207289921815762&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                <strong>8.44/10</strong>
              </a>
            </li>
            <li>
              Academic Excellence Award: 4 semesters (
              <a
                href="https://drive.google.com/file/d/116EOnBdE0yvfzFQ2uB31jn4RfePOWH6K/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                FA23
              </a>
              ,{" "}
              <a
                href="https://drive.google.com/file/d/1xnq9fvHu5FwwDhl2wm0_qnZXAAab4jWJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                SP24
              </a>
              ,{" "}
              <a
                href="https://drive.google.com/file/d/194JFX3FqZtwyus_mHkP8fEWSSkyd1h_D/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                SU24
              </a>
              ,{" "}
              <a
                href="https://drive.google.com/file/d/1xnq9fvHu5FwwDhl2wm0_qnZXAAab4jWJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                FA24
              </a>
              )
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;