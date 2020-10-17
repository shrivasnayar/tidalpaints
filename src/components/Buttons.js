import React from 'react';
import './Buttons.css';

function Buttons() {
    return (
        <div className='buttons'>
            <button id='amazon-button'><a target="_blank" href="https://www.amazon.co.uk/Tidal-Paints-Acrylic-Ceramics-Surfaces/dp/B07F5S9S4R/ref=sr_1_1?crid=1KST3HNXQWTD7&dchild=1&keywords=tidal+paints&qid=1601731885&sprefix=tidal+pain%2Caps%2C139&sr=8-1">Order on Amazon</a></button>
            <button id='etsy-button'><a id='etsy-link' target="_blank" href="https://www.etsy.com/uk/listing/869328947/acrylic-paint-set-of-24-3-paint-brushes?ref=shop_home_active_1&frs=1">Order on Etsy</a></button>
        </div>
    )
}
export default Buttons;
