import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div id='services' className='service shadow-lg'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h5 className='text-muted'>${price}</h5>
            <p><small>{description}</small></p>
            <button className='btn btn-primary' onClick={() => navigateToServiceDetail(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;