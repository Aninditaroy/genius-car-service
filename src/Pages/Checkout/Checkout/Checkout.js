import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user,setUser] = useState({
        name: 'Akbar The Great',
        email: 'akbar@momo.taj',
        address: 'Tajmohol road',
        phone: '017111111111'
    });
    const handleAddressChnage = event =>{
        console.log(event.target.value); 
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        const newUser = {newAddress, ...rest}
        setUser(newUser);
    }
    return (
        <div className='w-50 mx-auto'>
            <h5 className='text-primary text-center'>Please order: {service.name}</h5>
            <form >
                <input className='w-100 mb-2' type="text" name="name" value={user.name} placeholder='Name' required/>
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder='Email' required/>
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Service' readOnly/>
                <br />
                <input className='w-100 mb-2' onChange={handleAddressChnage} type="text" value={user.address} name="address" placeholder='Address' required/>
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name="phone" placeholder='Phone' required/>
                <br />
                <input className='w-100 mb-2 btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;