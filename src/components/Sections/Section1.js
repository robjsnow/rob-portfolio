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
            <p>I am a dedicated software engineering enthusiast, currently pursuing my Bachelor's in Computer Science.
              My passion and expertise in this field are evident in the projects I've developed, which are showcased below.
              These projects represent a range of skills and interests I've cultivated, spanning Web Development, App Development, Game Development, and Artificial Intelligence.
              Each project is a testament to my commitment to exploring diverse areas of technology and software development.
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