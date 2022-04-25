import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='text-center mt-3'>
            <h2>You are about to book: {service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>
                    Proceed to checkout
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;