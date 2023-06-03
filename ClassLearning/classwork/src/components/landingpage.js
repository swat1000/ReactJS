import React, { useEffect } from 'react'
// use effect

export default function Landingpage() {
    console.log("I m rendering in landing page compinent")
    let a= 10;

    useEffect(() => {
        console.log("I m getting printed from useeffect body")

        let body = document.querySelector(".header");
        console.log(body);
    })

    console.log("I m getting rendered in landing page component")
  return (
    <div className='header'>landingpage: {a} </div>
  )
}
