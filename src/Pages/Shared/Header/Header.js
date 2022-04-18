import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/home" className="logo">Travel Guide</Link>
            <nav className='header-right'>
                <Link to="/home">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>

        </header>

    );
};

export default Header;