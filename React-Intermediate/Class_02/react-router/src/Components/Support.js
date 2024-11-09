import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate= useNavigate()

  function clickHandler( ) {
    navigate('/labs')
  }

  function backHandler( ) {
    navigate(-1)
  }
  return (
    <div>
      <p>Support</p>
      <button onClick={clickHandler}>Move to labs</button>
      <button onClick={backHandler}>Back </button>
    </div>
  )
}

export default Support