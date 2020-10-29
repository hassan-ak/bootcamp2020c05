import React, { useReducer } from 'react'
import numberReducer from '../reducer/CounterReducer'

export const Parent = () => {

    const [state, dispatch] = useReducer(numberReducer, 100)

    return (
        <div>
           Counter :  {state}
           <div className = "button2">
              <button className="add" onClick={()=>{ dispatch ({type:"add"}) }}>++</button>
              <button className="minus" onClick={()=>{ dispatch ({type:"minus"}) }}>--</button>
              <button className="add" onClick={()=>{ dispatch ({type:"addition", value : 11}) }}>+</button>
              <button className="minus" onClick={()=>{ dispatch ({type:"subtraction", value : 7}) }}>-</button>
              <button className="add" onClick={()=>{ dispatch ({type:"multiplication", value : 2}) }}>*</button>
              <button className="minus" onClick={()=>{ dispatch ({type:"division", value : 3}) }}>/</button>
            </div>
        </div>
    )
}
