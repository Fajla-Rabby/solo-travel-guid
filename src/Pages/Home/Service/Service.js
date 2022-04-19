import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Services from '../../Services/Services';
import './Service.css';

const Service = ({ service }) => {
    const {  name, img,  price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = ()=> {
        navigate('/serviceDetails');
    }
    return (
        <div className='service'>
            <img className='images' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>            
            <button onClick={() => navigateToServiceDetail()} className='button'>Book Now</button>
        </div>
    );
};

export default Service;