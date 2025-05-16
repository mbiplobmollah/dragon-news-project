import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className='space-y-3'>
                <button className='btn btn-secondary btn-outline w-full rounded-xl'><FcGoogle />
 Login with Google</button>
                <button className='btn btn-primary btn-outline w-full rounded-xl'><FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;