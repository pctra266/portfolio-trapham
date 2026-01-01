import React from 'react';
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <div className="certificates-header">
        <h2>Certificates</h2>
      </div>

      <ul className="certificates-list">
        {/* 1. SDLC Specialization */}
        <li className="certificate-item">
          <a 
            href="https://drive.google.com/file/d/1rfPezvDDAUG4FummIANp6CONaZzFdhEO/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className="main-link"
          >
            <strong>Software Development Lifecycle Specialization</strong>
          </a>
          {' '}-- Univ. of Minnesota:{' '}
          <span className="sub-skills">
            <a href="https://drive.google.com/file/d/1Q7Esz7vo9NmYBXS9yrXLaSDDKt-sEPhL/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><em>Agile</em></a>,{' '}
            <a href="https://drive.google.com/file/d/1OaB9i9omBrOnJLokEZoKWeB8gqa4O8lg/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><em>Lean</em></a>,{' '}
            <a href="https://drive.google.com/file/d/1Z_pXVPlx0w-JAzN1yBwrZMxpiYzo-wep/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><em>Quality Engineering</em></a>
          </span>
        </li>

        {/* 2. CCNA */}
        <li className="certificate-item">
          <a 
            href="https://drive.google.com/file/d/1j_BuRTuQQqIxHGyT7aj5WqqNu6WOhaXq/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className="main-link"
          >
            <strong>CCNAv7: Introduction to Networks</strong>
          </a>
          {' '}-- Cisco Networking Academy
        </li>

        {/* 3. Project Management */}
        <li className="certificate-item">
          <a 
            href="https://drive.google.com/file/d/1WBwrcis_hHhVrHQQ53Gz_tMikGE4XyBx/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className="main-link"
          >
            <strong>Project Management Principles and Practices</strong>
          </a>
          {' '}-- Univ. of California, Irvine:{' '}
          <span className="sub-skills">
            <a href="https://drive.google.com/file/d/13vfhssoIQ6_LHR5s3_P9gMMqg-eG6y19/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><em>Planning</em></a>,{' '}
            <a href="https://drive.google.com/file/d/1KGg6h_8PYVIvhF5JR9w2D_cTI311xXqr/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><em>Risk Management</em></a>
          </span>
        </li>

        {/* 4. Problem Solving & Critical Thinking */}
        <li className="certificate-item">
          <a 
            href="https://drive.google.com/file/d/1MP2IvCozemC1jxbbccG8ju0fJGnkyLs4/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className="main-link"
          >
            <strong>Problem-Solving</strong>
          </a>
          {' '}&{' '}
          <a 
            href="https://drive.google.com/file/d/13fhOmNJ2HNUB6CQ_2xEL5Rim93LANscv/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className="main-link"
          >
            <strong>Critical Thinking Skills</strong>
          </a>
          {' '}-- University of Sydney
        </li>

        {/* 5. English */}
        <li className="certificate-item">
          <a 
            href="https://drive.google.com/file/d/1ffw95rTneEPbFnARhn-90OZUQ7ID0M4l/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className="main-link"
          >
            <strong>Certificate: Academic Preparatory English 6</strong>
          </a>
          {' '}-- FPT University
        </li>
      </ul>
    </div>
  )
}

export default Certificates;