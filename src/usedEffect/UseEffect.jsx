import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setcount] = useState(0)


    useEffect(() => {
        if (count > 0) {
            document.title = `(${count}) New Message(s)`
            console.log("working");
        } else {
            document.title = "no  new messages "
        }
    })

    return (
        <>
            <div className="h1">
                <h1>{count}</h1>
                <button onClick={() => setcount(count + 1)}>inrease</button>
            </div>




        </>
    )
}

export default UseEffect