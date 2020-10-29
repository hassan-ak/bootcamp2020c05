import React, { useContext } from 'react'
import { Child2 } from './Child2'
import DataContext from '../context/Data'

export const Parent2 = () => {
    const value = useContext(DataContext)
    return (
        <div>
            My name is {value[0].name}.     
            <Child2></Child2>
        </div>
    )
}
