import React, { useContext } from 'react'
import { GrandChild2 } from './GrandChild2'
import DataContext from '../context/Data'

export const Child2 = (props) => {
    const value = useContext(DataContext)
    return (
        <div>
            I am {value[1].age} years old.
            <GrandChild2></GrandChild2>
        </div>
    )
}
