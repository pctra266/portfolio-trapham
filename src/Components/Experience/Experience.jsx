import React, { useState } from "react";
import "./Experience.css";

const workExperience = [
  {
    date: "May 2025 - Present",
    company: "FPT Software",
    role: "Intern Frontend Web Developer",
    description: "Web Design; Web Development; React + TypeScript",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGfyUCuV-FiFA/company-logo_200_200/company-logo_200_200/0/1738914920866/fpt_software_logo?e=1756339200&v=beta&t=jbC5D8ry_Yz7xFz4yamRNhyGj_69RphzrPFRnGCi3Fk",
  },
];

const studiesExperience = [
  {
    date: "Oct 2022 - Nov 2026",
    school: "FPT University",
    degree: "Software Engineer",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEiwK-nCtRsZQ/company-logo_200_200/company-logo_200_200/0/1695107335683/fpt_university_logo?e=1756339200&v=beta&t=ij50YYW2hYIPmLqanWZQrEyQ6FXLOi8kDhdz-GpLxg4",
  },
];
const achievementsExperience = [
  {
    date: "Oct 2022 - Nov 2026",
    title: "GPA 8.6 / 10",
    description: "Four-time Honorable Student (FA23, SP24, SU24, FA24)",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEiwK-nCtRsZQ/company-logo_200_200/company-logo_200_200/0/1695107335683/fpt_university_logo?e=1756339200&v=beta&t=ij50YYW2hYIPmLqanWZQrEyQ6FXLOi8kDhdz-GpLxg4",
  },
  {
    date: "2024",
    title: "Top 2 Codefest 2024",
    description: "Programming competition organized by FPT JS Club",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEiwK-nCtRsZQ/company-logo_200_200/company-logo_200_200/0/1695107335683/fpt_university_logo?e=1756339200&v=beta&t=ij50YYW2hYIPmLqanWZQrEyQ6FXLOi8kDhdz-GpLxg4",
  },

  {
    date: "2022",
    title: "Top 30 School Rank 2022",
    description: "Top 30 Students",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEiwK-nCtRsZQ/company-logo_200_200/company-logo_200_200/0/1695107335683/fpt_university_logo?e=1756339200&v=beta&t=ij50YYW2hYIPmLqanWZQrEyQ6FXLOi8kDhdz-GpLxg4",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <div className="experience-container">
      <h2>Experience & Achievements</h2>
      <div className="tab-buttons">
        <button
          className={activeTab === "achievements" ? "active" : ""}
          onClick={() => setActiveTab("achievements")}
        >
          Achievements
        </button>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "work" ? "active" : ""}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
      </div>

      <div className="timeline">
        {(activeTab === "work"
          ? workExperience
          : activeTab === "education"
          ? studiesExperience
          : achievementsExperience
        ).map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              {item.logo.startsWith("http") ? (
                <img src={item.logo} alt="logo" />
              ) : (
                <span className="emoji-icon">{item.logo}</span>
              )}
            </div>
            <div className="timeline-content">
              <span className="date">{item.date}</span>
              <h3>{item.company || item.school || item.title}</h3>
              <p className="role">{item.role || item.degree || ""}</p>
              {item.description && (
                <p className="description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
