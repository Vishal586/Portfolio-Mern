import React from 'react';
import "./About.css";
import Jump from "react-reveal/Jump";
import Profile from "../../assets/docs/profile.jpg";

const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src={Profile} alt="profile_pic"/>
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am a passionate Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, 
              React, Node.js) and a strong background in software development. With hands-on experience in
              building scalable web applications, I specialize in crafting efficient frontend interfaces and 
              robust backend architectures. My skills include responsive design, API development, database
              management, and cloud integration. I am proficient in modern technologies like Redux, Tailwind
              CSS, and RESTful APIs, ensuring seamless user experiences. Driven by problem-solving and
              innovation, I continuously strive to enhance my coding proficiency and stay updated with industry
              trends to develop high-performance, user-centric applications.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;