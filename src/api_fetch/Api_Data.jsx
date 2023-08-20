import React, { useEffect, useState } from 'react'


const Api_Data = () => {
    const [title, settitle] = useState([])
    const url = 'https://dummyjson.com/products';
    const getdata = async () => {
        const data = await fetch(url)
        const response = await data.json();
        // console.log(data);
        // console.log(response.products);
        settitle(response.products)
        console.log(title);

    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
        {
            title?.map((some)=>{
                return <h1>{some.title}</h1>

            })
        }
        <div>Api_Data</div>
            </>

    )
}

export default Api_Data