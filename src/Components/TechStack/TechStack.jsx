import React from 'react';
import "./TechStack.css"
const TechStack = () => {
  const techStackItems = [
    {
      name: 'C#',
      icon: 'https://techstack-generator.vercel.app/csharp-icon.svg',
      alt: 'C#'
    },
    {
      name: '.NET',
      icon: 'https://skillicons.dev/icons?i=dotnet',
      alt: '.NET'
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
      name: 'Tailwind',
      icon: 'https://skillicons.dev/icons?i=tailwind',
      alt: 'Tailwind'
    },
    {
      name: 'React',
      icon: 'https://skillicons.dev/icons?i=react',
      alt: 'React'
    },
    {
      name: 'Java',
      icon: 'https://skillicons.dev/icons?i=java',
      alt: 'Java'
    },
    {
      name: 'Spring',
      icon: 'https://skillicons.dev/icons?i=spring',
      alt: 'Spring'
    },
    {
      name: 'Hibernate',
      icon: 'https://skillicons.dev/icons?i=hibernate',
      alt: 'Hibernate'
    },
    {
      name: 'Postman',
      icon: 'https://skillicons.dev/icons?i=postman',
      alt: 'Postman'
    },
    {
      name: 'Git',
      icon: 'https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png',
      alt: 'Git'
    },
    {
      name: 'MySQL',
      icon: 'https://skillicons.dev/icons?i=mysql',
      alt: 'MySQL'
    }
  ];
  

  return (
    <div className="techstack-container">
      <h2 className="techstack-title">Tech Stack</h2>
      <div className="techstack-grid">
        {techStackItems.map((item, index) => (
          <div key={index} className="techstack-item">
            <img 
              src={item.icon} 
              alt={item.alt}
              className="techstack-icon"
            />
            <span className="techstack-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;