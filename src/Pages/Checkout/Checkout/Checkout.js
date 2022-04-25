import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }
    // const [user,setUser] = useState({
    //     name: 'Akbar The Great',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol road',
    //     phone: '017111111111'
    // });
    // const handleAddressChnage = event =>{
    //     console.log(event.target.value); 
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {newAddress, ...rest}
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const {data} = response;
                if(data.insertedId){
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='w-50 mx-auto'>
            <h5 className='text-primary text-center'>Please order: {service.name}</h5>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='Name' readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='Email' readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Service' readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={user.address} name="address" placeholder='Address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name="phone" placeholder='Phone' required />
                <br />
                <input className='w-100 mb-2 btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;