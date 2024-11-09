import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

function Navbar({isLoggedIn,setIsLoggedIn}) {

  return (
    <div className='flex space-x-12'>
      <Link to='/'>
       <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex gap-3'>
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

      <div className='flex mr-2 ml-2 gap-3'>
        {
          !isLoggedIn &&
          <Link to='/login'>
            <button>Login</button>
          </Link>
        }
        {
          !isLoggedIn &&
          <Link to='/signup'>
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast.success('Logged out')
            }}>Signup</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to='/'>
            <button>Logout</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to='/dashboard'>
            <button>Dashboard</button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar