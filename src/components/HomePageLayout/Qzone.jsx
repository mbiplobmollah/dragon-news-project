import React from 'react';
import classImg from "../../assets/class.png"
import swimmingImg from "../../assets/swimming.png"
import playgroundImg from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className="flex flex-col justify-center">
            <img src={classImg} alt="" />
            <img src={swimmingImg} alt="" />
            <img src={playgroundImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;