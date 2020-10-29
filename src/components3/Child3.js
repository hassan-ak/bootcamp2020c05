import React, {useContext}from 'react'
import CounterContext from '../context/Counter'

export const Child3 = () => {

    const value = useContext(CounterContext)

    return (
        <div>
           Counter :  {value[0]}
           <div className = "button2">
              <button className="add" onClick={()=>{value[1](value[0]+1)}}>+</button>
              <button className="minus" onClick={()=>{value[1](value[0]-1)}}>-</button>
            </div>
        </div>
    )
}
