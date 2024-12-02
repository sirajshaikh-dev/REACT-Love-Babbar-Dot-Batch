import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slices/CounterSlice'

export const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return (
    <div >
        <button onClick={()=>dispatch(decrement())}
        >-</button> 
        <div>{count}</div> 
        <button 
        onClick={()=>dispatch(increment())}
        >+</button>
    </div>
  )
}
