import React, { useEffect, useState, } from 'react'
import UseEffect from './UseEffect'

const CleanUp = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const windowSize = () => {

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

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
                <h1>The Size of Your windowis  Size : <span>{width} x {height} </span></h1>
            </center>


        </>
    )
}

export default CleanUp