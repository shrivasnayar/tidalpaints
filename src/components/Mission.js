
import React from 'react';
import './Mission.css';

import MissionImages from './MissionImages';
import Buttons from './Buttons';
import Footer from './Footer';


function Mission() {
    return (
        <div className='mission-container'>
            <div className='mission-statement'>
                <h1>Our mission is to help people fulfil their potential through the power of painting</h1>
                <h2 className="h2-mission">"The painter has the universe in his mind and hands" - Leonardo Da Vinci</h2>
            </div>
            <div className='snippet'>
                <h3>Here's a snippet of the creative artwork our fans have produced using Tidal Paints:</h3>
            </div>
            <MissionImages />
            <Buttons />
            <Footer />
        </div>
    )
}

export default Mission;
