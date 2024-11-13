import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

function Navbar({isLoggedIn,setIsLoggedIn}) {

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to='/'>
       <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='text-white flex gap-x-6'>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/about' >About</Link>
          </li>
          <li>
            <Link to='/Contact' >Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center gap-x-4'>
        {
          !isLoggedIn &&
          <Link to='/login'>
            <button className='bg-richblack-800 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-800 '
            >Log In
            </button>
          </Link>
        }
        {
          !isLoggedIn &&
          <Link to='/signup'>
            <button
            className='bg-richblack-800 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-800 ' 
            >Sign up</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to='/'>
            <button 
            className='bg-richblack-800 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-800 '
            onClick={()=>{
              setIsLoggedIn(false);
              toast.success('Logged out')
            }}>Logout</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to='/dashboard'>
            <button
            className='bg-richblack-800 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-800 '>Dashboard</button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar