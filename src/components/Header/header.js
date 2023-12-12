import React from 'react';
import './header.css';


const Header = () => {

    return (
        <header className="header">
            <div className="name-container">
            <img className="logo" src="/portfolio.png" alt="Portfolio" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
