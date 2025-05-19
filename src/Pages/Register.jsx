import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2x py-8">
        <h2 className='font-semibold text-center text-2xl'>Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Enter your URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Enter your Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Enter your Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold p-4 text-center'>Already Have An Account ? <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
        </fieldset>
      </div>
    </div>
        </div>

    );
};

export default Register;