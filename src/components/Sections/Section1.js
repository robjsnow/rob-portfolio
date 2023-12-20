import '../Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons
import useOnScreen from '../../hooks/useOnScreen';
import React, { useRef } from 'react';

function Section1() {
  const ref = useRef();
const isVisible = useOnScreen(ref);
    return (
      <div ref={ref} className={`intro-section ${isVisible ? 'fade-in-section' : ''}`}>
          <div className="intro-card">
            <div className="intro-top">
              <img src="me.png" alt="Rob Snow" className="profile-picture" />
              <div className="greeting">
                <h2>Hello! 👋<br/> I'm <a href="mailto:robjsnow@gmail.com">Rob Snow</a>.</h2>
                <br/>
                <div className="social-links">
                <a href="https://github.com/robjsnow" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/robjsnow" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
               
              </div>
              </div>
            </div>
            
            <p>
I'm a software engineering enthusiast, majoring in Computer Science.
Below are my diverse projects in Web, App, Game Development, and AI, highlighting my passion and skills.  Visit my <a href="/resume">resume</a> section for hiring considerations.
</p>
          </div>
        </div>
    );
  }
export default Section1;