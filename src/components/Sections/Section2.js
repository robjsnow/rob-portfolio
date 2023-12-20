import useOnScreen from '../../hooks/useOnScreen';
import React, { useRef } from 'react';

function Section2() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
    return (
      <div ref={ref} className={`project-section ${isVisible ? 'fade-in-section' : ''}`}>
          <div className="project-image">
            {/* Replace with the actual image source */}
            <img src="news1.jpeg" alt="Project Screenshot" />
          </div>
          <div className="project-description">
            <h2>Newsfusion Website</h2>
            <p>
            This project is a website I created to reinforce my understanding of various web development aspects, including APIs, databases, and authentication. It offers functionalities like user sign-up, login, profile editing, avatar uploading, and commenting on articles. The technologies used in this project are JavaScript, EJS, HTML, CSS, NodeJS, Express, Azure (for storing avatars), and MongoDB
            </p>
            <a href="https://newsfusion-3a88334147f8.herokuapp.com/" className="github-link">
              Live Demo
            </a>
            <a href="mailto:robjsnow@gmail.com" className="github-link">Request Source Code</a>
          </div>
        </div>
      );
    }
export default Section2;