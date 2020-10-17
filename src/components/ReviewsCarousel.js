import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewsCarousel.css';


function ReviewsCarousel() {
 
    const settings = {
        dots: false,
        infinite: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1,
        autoplaySpeed: 12000,
        arrows: false,
        cssEase: "linear"
      };

    return (
        <div className='container'>
           <h2>Verified Customer Feedback</h2>
            <Slider {...settings}>
                <div>
                    <p>
                        Lucy - "Nice paint easy to use. We used them to repaint plant pots and bring a bit of colour into the back garden. 
                        Even though we have had very hot weather and also very wet and windy weather over the past month the paint has stayed 
                        crisp and fresh with no chipping or fading."
                    </p>
                </div>
                <div>
                    <p>
                        Rebecca - "I bought these for my daughter. Since being in quarantine she’s found a love of art.
                        When they were delivered, she was amazed at the range of colours. 
                        Really good quality and value for money. I would definitely buy them again."
                    </p>
                </div>
                <div>
                    <p>
                        Lauren - "I'm really loving these paints! The colours are beautiful and the price was great! 
                        I'd been searching for weeks for a decent set of paints that wouldn't cost me the earth and these have been great to work with. 
                        I will definitely be buying these again! Thank you."
                    </p>
                </div>
                <div>
                    <p>
                        Yasser - "Love this set. It's really quality and gave me something to do during this hectic time at home :)"
                    </p>
                </div>
                <div>
                    <p>
                        Heather - "Great paints and a good variety of colours. Been painting wooden ornaments and have come out really good!"
                    </p>
                </div>
            </Slider> 
        </div>
    )
}

export default ReviewsCarousel
