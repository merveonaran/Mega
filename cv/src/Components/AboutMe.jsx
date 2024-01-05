// AboutMe.js
import React from "react";

const AboutMe = () => {
  
  const openGitHub = () => {
    // Replace 'https://github.com/your_username' with your GitHub profile URL
    window.open("https://github.com/merveonaran", "_blank");
  };

  const openLinkedIn = () => {
    // Replace 'https://www.linkedin.com/in/your_username' with your LinkedIn profile URL
    window.open("https://www.linkedin.com/in/merve-onaran-141350213", "_blank");
  };
  return (
    <section className="aboutme">
      <h1 className="biggest">Hi, I am Merve!</h1>
      <h2 className="biggest2">Computer Engineer </h2>
      <p className="aboutme-text">
      I am doing a Master's Degree with Thesis in Computer Engineering in English at Konya Food and 
      Agriculture University. That's why I'm looking for a job in remote or hybrid working models where
       I can attend my classes. I am fluent in academic English. I was previously interested in mobile
        programming and website programming. I also have knowledge about image processing and artificial
         intelligence. I like working on different fields.
      </p>
      <div className="buttons">
                <button className="github-button" onClick={openGitHub}>
          GitHub Link
        </button>
        <button className="linkedin-button" onClick={openLinkedIn}>
          Linkedin Link
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
