// ProjectsSection.js


import React from "react";

const ProjectsSection = () => {
  
  return (
    <section className="projects-section">
      <h1 className="titles">Projects</h1>
      <div className="project-box-container">
        <div className="project-box info-box">
          <h1>MEGA Projects </h1>
          <p>HTML & CSS</p>
          <div className="project-links">
            <a
              href="https://github.com/merveonaran/Mega"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link🔗
            </a>
          </div>
          <img src="src\Components\simon.png" alt="imgsimon" />
        </div>
        
        
   
      </div>
    </section>
  );
};

export default ProjectsSection;
