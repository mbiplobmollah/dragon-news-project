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
        <div className='md:flex justify-between items-center flex-col'>
            <div className='w-45'>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-4'>
                <img className='w-12 rounded-full' src={`${user  ? user.photoURL : userIcon}`} alt="user image" />
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