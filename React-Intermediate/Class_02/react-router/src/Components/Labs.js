import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {
  const navigate= useNavigate();

    function clickHandler( ) {
      navigate('/about')
    }
    function backHandler( ) {
      navigate(-1)
    }
  return (
    <div>
      <p>Labs</p>
      <button onClick={clickHandler}>Move to about page</button>
      <button onClick={backHandler}>back</button>
    </div>
  )
}

export default Labs