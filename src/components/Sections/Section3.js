import useOnScreen from '../../hooks/useOnScreen';
import React, { useRef } from 'react';


function Section3() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div ref={ref} className={`project2-section ${isVisible ? 'fade-in-section' : ''}`}>
                <div className="project-description">
                <h2>Aliens vs Robots</h2>
            <p>
            Aliens vs Robots is a game I programmed in React, created especially for my five-year-old son to enjoy. In this project, my wife also played a significant role, and my son contributed by playtesting it. This game highlights my expertise in frontend web development, specifically in React and JavaScript/JSX, with an emphasis on game development.
            </p>
            <a href="https://github.com/robjsnow/avr/" className="github-link">View Source Code</a>
            <a href="https://yellow-water-02e94ce10.4.azurestaticapps.net/" className="github-link">Live Demo</a>
        </div>
        <div className="project-image">
          {/* Replace with the actual image source */}
          <img src="project1.png" alt="Project Screenshot" />
        </div>

      </div>
    );
  }
export default Section3;