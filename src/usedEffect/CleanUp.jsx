import React, { useEffect, useState, } from 'react'
import UseEffect from './UseEffect'

const CleanUp = () => {
    const [size, setsize] = useState(window.innerWidth)
    const windowSize = () => {

        setsize(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener("resize", windowSize)
        return () => {
            window.removeEventListener("resize", windowSize)

        }
    })


    return (
        <>
            <div>CleanUp  Working </div>
            <center>
                <h1> Window Size : <span>{size}</span></h1>
            </center>


        </>
    )
}

export default CleanUp