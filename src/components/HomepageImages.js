import React from "react";
import Slider from "react-slick";
import './Images.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fullset from '../resources/fullset.jpg';
import Lastingresults from '../resources/lastingresults.jpg';
import Professionalquality from '../resources/professionalquality.jpg';
import Diverseimage from '../resources/diverse.jpg';
import Versatile from '../resources/versatilecopy.jpg';


function HomepageImages() {
 
    const settings = {
        dots: true,
        infinite: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

    return (
        <div className='slider'>
            <Slider {...settings}>
                <div className='pictures'>
                    <img className='image' src={Fullset} />
                </div>
                <div className='pictures'>
                    <img className='image' src={Lastingresults} />
                </div>
                <div className='pictures'>
                    <img className='image' src={Professionalquality} />
                </div>
                <div className='pictures'>
                    <img className='image' src={Diverseimage} />
                </div>
                <div className='pictures'>
                    <img className='image' src={Versatile} />
                </div>
            </Slider> 
        </div>
    )
}

export default HomepageImages;
