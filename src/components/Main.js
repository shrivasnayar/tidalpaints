
import React from 'react';
import './Main.css';

import Buttons from './Buttons';
import Footer from './Footer';

import HomepageImages from './HomepageImages';

import ReviewsCarousel from './ReviewsCarousel'; 

function Main() {
    return (
        <div className='main'>
            <div className="header">
                <h2>It's no surprise our acrylic paint set is officially recommended by Amazon</h2>
            </div>
            <div>
                <Buttons />
            </div>
            <div className='images-carousel'>
                <HomepageImages />
            </div>
            <div className="paint-set">
                <h2>What's Included?</h2>
                    <ul>
                        <li>24 x 12ml premium acrylic paints</li>
                        <li>3 paint brushes</li>
                        <li>1 palette</li>
                        <li>Exclusive electronic beginner's guide</li>
                    </ul>
            </div>
            <div>
                <ReviewsCarousel />
            </div>
            <div>
                <Buttons />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;
