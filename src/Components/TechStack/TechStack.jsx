import React from 'react';
import "./TechStack.css";

const TechStack = () => {
  // Dữ liệu được map chính xác từ section Technical Skills trong Latex
  const techStackItems = [
    // --- Languages ---
    {
      name: 'C#',
      icon: 'https://skillicons.dev/icons?i=cs',
      alt: 'C#'
    },
    {
      name: 'Java',
      icon: 'https://skillicons.dev/icons?i=java',
      alt: 'Java'
    },
    {
      name: 'JavaScript',
      icon: 'https://skillicons.dev/icons?i=js',
      alt: 'JavaScript'
    },
    {
      name: 'TypeScript',
      icon: 'https://skillicons.dev/icons?i=ts',
      alt: 'TypeScript'
    },
    {
      name: 'Dart',
      icon: 'https://skillicons.dev/icons?i=dart',
      alt: 'Dart'
    },
    {
      name: 'SQL',
      icon: 'https://skillicons.dev/icons?i=mysql', // Dùng icon đại diện cho SQL
      alt: 'SQL'
    },
    {
      name: 'HTML5',
      icon: 'https://skillicons.dev/icons?i=html',
      alt: 'HTML'
    },
    {
      name: 'CSS3',
      icon: 'https://skillicons.dev/icons?i=css',
      alt: 'CSS'
    },

    // --- Frameworks ---
    {
      name: '.NET Core',
      icon: 'https://skillicons.dev/icons?i=dotnet',
      alt: '.NET Core'
    },
    {
      name: 'ASP.NET',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg', // Icon .NET gốc
      alt: 'ASP.NET'
    },
    {
      name: 'React.js',
      icon: 'https://skillicons.dev/icons?i=react',
      alt: 'React.js'
    },
    {
      name: 'Spring Boot',
      icon: 'https://skillicons.dev/icons?i=spring',
      alt: 'Spring Boot'
    },
    {
      name: 'Unity',
      icon: 'https://skillicons.dev/icons?i=unity',
      alt: 'Unity'
    },
    {
      name: 'Flutter',
      icon: 'https://skillicons.dev/icons?i=flutter',
      alt: 'Flutter'
    },

    // --- Developer Tools ---
    {
      name: 'Git',
      icon: 'https://skillicons.dev/icons?i=git',
      alt: 'Git'
    },
    {
      name: 'Postman',
      icon: 'https://skillicons.dev/icons?i=postman',
      alt: 'Postman'
    },
    {
      name: 'Visual Studio',
      icon: 'https://skillicons.dev/icons?i=visualstudio',
      alt: 'Visual Studio'
    },
    {
      name: 'VS Code',
      icon: 'https://skillicons.dev/icons?i=vscode',
      alt: 'VS Code'
    },
    {
      name: 'IntelliJ',
      icon: 'https://skillicons.dev/icons?i=idea',
      alt: 'IntelliJ IDEA'
    },
    {
      name: 'SQL Server (SSMS)',
      icon: 'https://skillicons.dev/icons?i=mssql', // Khớp với SQL Server Management Studio
      alt: 'SSMS'
    }
  ];

  return (
    <div className="techstack-container">
      <div className="techstack-header">
         <h2>Technical Skills</h2>
      </div>
      
      <div className="techstack-grid">
        {techStackItems.map((item, index) => (
          <div key={index} className="techstack-item">
            <img 
              src={item.icon} 
              alt={item.alt}
              className="techstack-icon"
              loading="lazy"
            />
            <span className="techstack-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;