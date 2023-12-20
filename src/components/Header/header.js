import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="name-container">
                <img className="logo" src="/portfolio.png" alt="Portfolio" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
