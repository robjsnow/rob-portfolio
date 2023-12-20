import '../Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

function Section1() {
    return (
        <div className="intro-section">
          <div className="intro-card">
            <div className="intro-top">
              <img src="myself.jpg" alt="Rob Snow" className="profile-picture" />
              <div className="social-links">
                <a href="https://github.com/robjsnow" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/robjsnow" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
              <div className="greeting">
                <h2>Hello! 👋<br/> I'm Rob Snow.</h2>
              </div>
            </div>
            <p>
            I have a strong dedication to software engineering, which is not only my passion but also my expertise.
            On display below are projects that I've brought to fruition, serving as examples of my work.
            These projects span across four key areas of interest that I've explored:
            Web Development, App Development, Game Development, and Artificial Intelligence.
          </p>
          <p>
            If you're interested in collaborating or have any questions, please don't hesitate to connect with me.
            You can email me at <a href="mailto:robjsnow@gmail.com">robjsnow@gmail.com</a> or reach out through
            various social media platforms. And if you're interested in hiring me, I encourage you to visit
            the resume section to learn more about my professional journey.
          </p>
          </div>
        </div>
    );
  }
export default Section1;