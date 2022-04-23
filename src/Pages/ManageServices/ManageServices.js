import React from 'react';
import useServices from './../../hooks/useServices';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageServices = () => {
    const [services,setServices] = useServices();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                toast(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Services</h2>
            {
                    services.map(service => <div key={service._id} service={service}>
                        <h5>{service.name}
                        <button onClick={()=>handleDelete(service._id)}>X</button></h5>
                        
                    </div>)
            }
            <ToastContainer/>
        </div>
    );
};

export default ManageServices;