import React from "react";
import Hello from "./hello";

export default function Contactus({name}){
    return (
//        <div>
//         Name: {props.name}<br></br>
//         Phone No.: {props.phone}<br></br>
//         Email: {props.email}<br></br>
// {/* We can link the child into the parent element but not the vice versa */}
//         <Hello></Hello>
//        </div>

    <div>
        I m in a footer components
        <div>
            wlcm to footer component: {name}
        </div>
    </div>
    )
}