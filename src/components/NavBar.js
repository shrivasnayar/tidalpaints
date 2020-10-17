import React from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="logo" 
                    src='https://scontent.flhr2-1.fna.fbcdn.net/v/t1.0-9/120600374_176343420667019_4776814732480720681_o.jpg?
                        _nc_cat=107&_nc_sid=e3f864&_nc_ohc=08VYXPjd_DIAX-wbnKW&_nc_ht=scontent.flhr2-1.fna&oh=3a3742e69806fe9d13109bc1c6b68d2f&oe=5F9B582B'/>
            </Link>
            <div className="header-links">
                <Link to="/mission">
                    <span className="header-text" id='link-1'>Our Mission</span>
                </Link>
                <Link to="/contact">
                    <span className="header-text" id='link-2'>Contact Us</span>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;
