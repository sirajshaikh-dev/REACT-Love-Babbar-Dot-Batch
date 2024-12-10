import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='fixed top-0 inset-x-0 w-full text-center text-red-100 text-xl font-bold border-b-2 border-orange-600 shadow-lg shadow-orange-500  bg-orange-600 py-3'>
      <NavLink to='/'>
      <header>
        <h1  className='font-bold text-2xl uppercase text-center'>TECH BLOGS</h1>
      </header>
      </NavLink>
      
    </div>
  )
}

export default Header