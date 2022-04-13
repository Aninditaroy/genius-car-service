import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/register');
    }
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your name' />

                <input type="email" name='email' placeholder='Your email' required />

                <input type="password" name="password" id="" placeholder='Your password' required />
                <input className='bg-warning' type="submit" value="Register" />
            </form>
            <p>Already have an acoount? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;