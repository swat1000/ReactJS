import React from "react";
import './header.css'

export default function Header(){
    return (
        <div className="heading">
            <h2>Header is blue using external css</h2>
            <p style={{color: 'red'}}>Contact Us is using in line CSS</p>
        </div>
    )
};