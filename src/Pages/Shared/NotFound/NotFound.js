import React from 'react';
import notfound from '../../../images/404/404.jpg';
const NotFound = () => {
    return (
        <div>
            <h2 className="text-warning text-center mt-3 mb-4">404!Mechanic is sleeping</h2>
            <img src={notfound} alt="" className=' w-100' />
        </div>
    );
};

export default NotFound;