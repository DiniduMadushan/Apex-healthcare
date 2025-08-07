import React, {useState} from 'react';
import '../styles/Navbar.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar:React.FC = () => {

    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <nav className='navbar'>
            <div className='navbar-logo'>ApexHealthcare</div>

            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon fontSize='large'/> : <MenuIcon fontSize='large'/>}
            </div>

            <ul className = {`navbar-links ${menuOpen? 'active' : ''}`}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Facilities</a></li>
                    <li><a href='#'>Doctors</a></li>
                    <li><a href='#'>Feedbacks</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li className='login-mobile'><button className='login-btn'><PersonOutlineIcon fontSize="large" />Login</button></li>
            </ul>
            <div className="login-desktop">
                <button className='login-btn'><PersonOutlineIcon/>Login</button>
            </div>
            
        </nav>
    );
};

export default Navbar;