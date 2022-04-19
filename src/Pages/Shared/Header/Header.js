import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>
    {
        signOut(auth);
    }
    return (
        <header className='header'>
            <Link to="/home" className="logo">Travel Guide</Link>
            <nav className='header-right'>
                <Link to="/home">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
               { 
               user?
               <button onClick={handleSignOut}>Sign out</button>
               :
               <Link to="/login">Login</Link>}
                <Link to="/register">Register</Link>
            </nav>

        </header>

    );
};

export default Header;