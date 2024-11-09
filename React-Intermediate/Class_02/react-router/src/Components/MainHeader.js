import React from 'react'
import { Outlet } from 'react-router-dom'

function MainHeader() {
  return (
    <div><Outlet/></div>
    // The <Outlet /> component in React Router is used as a 
    // placeholder to render child routes within a parent route.
  )
}

export default MainHeader