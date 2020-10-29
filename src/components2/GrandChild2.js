import React, { useContext } from 'react'
import DataContext from '../context/Data'

export const GrandChild2 = () => {
    const value = useContext(DataContext)
    return (
        <div>
            I lives in {value[2].city}.
        </div>
    )
}
