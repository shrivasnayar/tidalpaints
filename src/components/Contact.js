
import React from 'react';
import './Contact.css';
import Buttons from './Buttons';
import Footer from './Footer';

import { MdEmail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai';


function Contact() {
    return (
        <div className='contact-body'>
           <h1>Contact Us:</h1>
           <div className='contact-methods'>
                    <MdEmail size={25} />
               <div className='email-container'>
                    <h4 className='email'>Email:</h4>
                    <a target='__blank'>enquiries@tidalpaints.co.uk</a>
               </div>
                    <FaFacebook size={25}/>
                <div className='fb-container'>
                    <h4 className='fb'> Facebook:</h4>
                    <a href='https://www.facebook.com/tidalpaints' target='_blank'>facebook.com/tidalpaints</a>
                </div>
                    <AiFillInstagram size={25} /> 
                <div className='insta-container'>
                    <h4 className='insta'>Instagram:</h4>
                    <a href='https://www.instagram.com/tidalpaints' target='_blank'>instagram.com/tidalpaints</a>
                </div>
           </div>
           <Buttons />
        <Footer />
        </div>
    )
}

export default Contact;
