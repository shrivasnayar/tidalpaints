import React from "react";
import Slider from "react-slick";
import './CustomerImages.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomerImages.css';

import Olivia1 from '../resources/olivia_tidalpaints.jpg';
import Olivia2 from '../resources/olivia2_tidalpaints.jpg';
import Olivia3 from '../resources/olivia3_tidalpaints.jpg';
import Olivia4 from '../resources/olivia4_tidalpaints.jpg';
import Juhi1 from '../resources/juhi_tidalpaints.jpg';


function MissionImages() {
 
    const settings = {
        dots: true,
        infinite: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
        <div className='customer-images'>
            <Slider {...settings}>
                <div>
                    <img src={Olivia3} />
                </div>
                <div>
                    <img src={Olivia1} />
                </div>
                <div>
                    <img src={Olivia2} />
                </div>
                <div>
                    <img src={Juhi1} />
                </div>
                <div>
                    <img src={Olivia4} />
                </div>
            </Slider> 
        </div>
    )
}

export default MissionImages;
