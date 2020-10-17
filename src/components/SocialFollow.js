
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';


function SocialFollow() {
    return (
        <div className='social-container'>
            <h2 className='follow'>Follow Us</h2>
            <div className='icons'>
                <a  href="https://www.facebook.com/tidalpaints/"
                    target="_blank"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a  href="https://www.instagram.com/tidalpaints"
                    target="_blank"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </div>
    )
}

export default SocialFollow
