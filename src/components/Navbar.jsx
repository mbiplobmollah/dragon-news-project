import React, { use } from 'react';
import { NavLink , Link } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = use(AuthContext)
    // console.log(user)

    const handleLogout = () =>{
        logOut().then(() => {
  alert('You Have Logged Out Successfully')
            }).catch((error) => {
  // An error happened.
  console.log(error)
                });
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='w-45'>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-4'>
                <img src={userIcon} alt="user image" />
                {
                  user ?  
                  <button onClick={handleLogout} className='btn  btn-primary px-10'>Logout</button>
                  : <Link to={'/auth/login'} className='btn  btn-primary px-10'>Login</Link> 
                }
                
            </div>
        </div>
    );
};

export default Navbar;