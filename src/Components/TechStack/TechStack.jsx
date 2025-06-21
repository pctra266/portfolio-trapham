import React from 'react';
import './TechStack.css'; // Import CSS

const TechStack = () => {
  return (
    <div className="techstack-container">
     <h2>Experience</h2>
      <div className="techstack-table-wrapper">
        <table className="techstack-table">
          <tbody>
            <tr>
              <td>
                <img src="https://techstack-generator.vercel.app/csharp-icon.svg" alt="C#" />
                <br />C#
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=dotnet" alt=".NET" />
                <br />.NET
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
                <br />JavaScript
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=html" alt="HTML5" />
                <br />HTML5
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                <br />CSS
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" />
                <br />Bootstrap
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=react" alt="React" />
                <br />React
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://skillicons.dev/icons?i=java" alt="Java" />
                <br />Java
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=postman" alt="Postman" />
                <br />Postman
              </td>
              <td>
                <img
                  src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                  alt="Git"
                />
                <br />Git
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                <br />GitHub
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" />
                <br />VS Code
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=visualstudio" alt="Visual Studio" />
                <br />VS2022
              </td>
              <td>
                <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
                <br />Node.js
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechStack;
