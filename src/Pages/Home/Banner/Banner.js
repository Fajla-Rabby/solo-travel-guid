import React from 'react';
import banner from '../../../images/trk.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-img'>
             <img src={banner} alt="" />
        </div>
    );
};

export default Banner;