import React from 'react'
import { Child1 } from './Child1'

export const Parent1 = (props) => {
    return (
        <div>
            My name is {props.name}            
            <Child1 age = {props.age} city = {props.city}></Child1>
        </div>
    )
}
