import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Services from '../../Services/Services';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='images' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>            
            <button onClick={() => navigateToServiceDetail(id)} className='button'>Book Now</button>
        </div>
    );
};

export default Service;