import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-inner">
                <h1 className="logo">Carr's Gallery</h1>
                <nav className="site-nav">
                    <ul>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
