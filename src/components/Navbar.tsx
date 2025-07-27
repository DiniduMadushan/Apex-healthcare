import React from 'react';
import './Navbar.css';

const Navbar:React.FC = () => {
    return(
        <nav className='navbar'>
            <div className='navbar-logo'>ApexHealthcare</div>
            <ul className='navbar-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Doctors</a></li>
                <li><a href='#'>Feedbacks</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
            <button className='login-btn'>Login</button>
        </nav>
    );
};

export default Navbar;