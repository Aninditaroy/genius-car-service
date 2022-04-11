import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div id='services' className='service shadow-lg'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-warning'>Book: {name}</button>
        </div>
    );
};

export default Service;