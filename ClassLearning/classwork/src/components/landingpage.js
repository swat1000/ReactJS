import React, { useEffect,useState } from 'react'
// use effect

export default function Landingpage() {
    const[Counter,setCounter] = useState(0)
    console.log("I m rendering in landing page compinent")
    let a= 10;

    useEffect(() => {
        console.log("I m getting printed from useeffect body")

        // let body = document.querySelector(".header");
        // console.log(body);
    }, [Counter])

    console.log("I m getting rendered in landing page component")
     // [] Dependency array
     // case1 : Dependency is empty: useffect runs only single time when page renders
     // case2 : dependency array has some state or props: whenever the states and props changes, your useeffect changes that many times
    return (
    <div className='header'>
        {/* in line calling of function in a single line */}
        <button onClick={() => setCounter(Counter+1)}>Increment</button>
        {Counter}
    </div>
  )
}
