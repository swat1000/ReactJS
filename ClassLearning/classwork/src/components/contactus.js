import React from "react";
import Hello from "./hello";

export default function Contactus(props){
    return (
       <div>
        Name: {props.name}<br></br>
        Phone No.: {props.phone}<br></br>
        Email: {props.email}<br></br>
{/* We can link the child into the parent element but not the vice versa */}
        <Hello></Hello>
       </div>
    )
}