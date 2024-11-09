import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate= useNavigate()
  function clickHandler( ) {
    navigate('/support')
  }
  function backHandler( ) {
    navigate(-1)
  }
  return (
    <div>
      <p>About</p>
      <button onClick={clickHandler}>Move to support page</button>
      <button onClick={backHandler}>Back</button>
    </div>
  )
}

export default About