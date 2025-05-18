import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
<div>
    <div className="join join-vertical w-full ">
  <button className="btn bg-base-100 join-item"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 join-item"><FaX></FaX> Twitter / X</button>
  <button className="btn bg-base-100 join-item"><FaInstagram></FaInstagram> Instagram</button>
</div>
</div>
        </div>
    );
};

export default FindUs;