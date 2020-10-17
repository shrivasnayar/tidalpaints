
import React from 'react';
import { Link } from "react-router-dom";
import SocialFollow from './SocialFollow';


import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <SocialFollow />
            <span className='tidal-paints'>Tidal Paints ™, 2020</span>
        </div>
    )
}

export default Footer
