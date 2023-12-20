function Section2() {
    return (
        <div className="project-section">
          <div className="project-image">
            {/* Replace with the actual image source */}
            <img src="project0.png" alt="Project Screenshot" />
          </div>
          <div className="project-description">
            <h2>Newsfusion Website</h2>
            <p>
            This project is a website I created to reinforce my understanding of various web development aspects, including APIs, databases, and authentication. It offers functionalities like user sign-up, login, profile editing, avatar uploading, and commenting on articles. The technologies used in this project are JavaScript, EJS, HTML, CSS, NodeJS, Express, Azure (for storing avatars), and MongoDB
            </p>
            <a href="https://newsfusion-3a88334147f8.herokuapp.com/" className="github-link">
              Live Demo
            </a>
          </div>
        </div>
      );
    }
export default Section2;