import React, { useState, useEffect } from 'react';
import arrowImg from '../images/uparrow.png'; // Adjust the path as needed

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && 
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <img src={arrowImg} alt="Scroll to top" />
        </button>
      }
    </div>
  );
}

export default ScrollToTopButton;