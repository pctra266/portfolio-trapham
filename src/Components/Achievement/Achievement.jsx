import React from 'react';
import "./Achievement.css";

const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="achievement-header">
        <h2>Honors & Awards</h2>
      </div>

      <ul className="achievement-list">
        {/* Item 1: Northern Region Code Fest */}
        <li className="achievement-item">
          <a 
            href="https://github.com/i-am-truong/GrimMercy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="achievement-link"
          >
            <strong>Top 25 Finalist - Northern Region Code Fest 2025</strong>
          </a>
          : Developed a <strong>Rule-based Battle Royale Bot</strong> focusing on combat logic and survival heuristics, utilizing provided pathfinding APIs.
        </li>

        {/* Item 2: FPTU Code Fest */}
        <li className="achievement-item">
          <a 
            href="https://www.linkedin.com/in/trapham266/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="achievement-link"
          >
            <strong>2nd Place (Runner-up) - FPTU Code Fest 2024</strong>
          </a>
          : Implemented an <strong>Autonomous Bot</strong> using <strong>State-based decision making</strong> to optimize resource scavenging and safe-zone timing.
        </li>

        {/* Item 3: Chess Tournament */}
        <li className="achievement-item">
          <a 
            href="https://www.linkedin.com/in/trapham266/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="achievement-link"
          >
            <strong>Top 4 - University Chess Tournament</strong>
          </a>
          : Demonstrated strategic planning and pressure management.
        </li>
      </ul>
    </div>
  )
}

export default Achievement;