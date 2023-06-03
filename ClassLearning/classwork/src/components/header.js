import React from "react";
import './header.css';
import { useState } from "react";

export default function Header({name, setName}) {

  function handleClick() {
      setName('Chaurasia')
  }
  return (

    
    <div>
      This is header : Welcome to react
      <div>
        your name is : {name}
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  )
};