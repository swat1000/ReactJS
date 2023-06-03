import React, { useEffect, useState } from 'react'
import axios from 'axios'
// use effect

export default function Landingpage() {
    const [Counter, setCounter] = useState(0)
    const [product, setProduct] = useState([])
    console.log("I m rendering in landing page compinent")
    let a = 10;

    useEffect(() => {
        console.log("I m getting printed from useeffect body")
        const apicalling = async () => {
            try {
                let response = await axios.get('https://dummyjson.com/products');
                console.log(response.data)
                setProduct([response.data.products])

            } catch (error) {
                console.log(error)
            }
        }

        apicalling();


    }, [])

    console.log("I m getting rendered in landing page component")
    console.log('the products are', product)
    // [] Dependency array
    // case1 : Dependency is empty: useffect runs only single time when page renders
    // case2 : dependency array has some state or props: whenever the states and props changes, your useeffect changes that many times
    return (
        <div className='header'>
            {/* in line calling of function in a single line */}
            <button onClick={() => setCounter(Counter + 1)}>Increment</button>
            {Counter}
        </div>
    )
}
