import React from 'react'

function Spinner() {
  return (
    <div className='flex items-center flex-col space-y-2'>
        <div className='spinner'>
        </div>
        <p className='text-lg text-bgDark font-semibold'>loading...</p>
    </div>
  )
}

export default Spinner