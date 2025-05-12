import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center gap-3 flex-col items-center'>
            <img className='w-[350px]' src={logo} alt="logo" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;