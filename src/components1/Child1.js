import React from 'react'
import { GrandChild1 } from './GrandChild1'

export const Child1 = (props) => {
    return (
        <div>
            I am {props.age} years old.
            <GrandChild1 city = {props.city}></GrandChild1>
        </div>
    )
}
