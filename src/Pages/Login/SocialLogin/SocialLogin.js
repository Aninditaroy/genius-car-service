import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement =
            <p className='text-danger text-center'>Error: {error?.message}{error1?.message}</p>
    }
    if(user || user1){
        navigate("/home");
    }
    return (
        <div>
            <div className="d-flex  align-items-center ">
                <div style={{ height: "1px" }} className="bg-primary w-50 shadow-sm"></div>
                <p className='mt-2 px-3'>OR</p>
                <div style={{ height: "1px" }} className="bg-primary w-50 shadow-sm"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn w-50 border-1 border-secondary d-block mx-auto my-2'>
                    <img style={{ width: "30px", height: "30px" }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button  className='btn border-1 border-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px", height: "30px" }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn border-1 border-secondary w-50 d-block mx-auto'>
                    <img style={{ width: "30px", height: "30px" }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;