import React from "react";
import './header.css';
import { useState } from "react";
import Title from "./Title";

export default function Header({ name, setName, showtitlepage, setshowtitlepage }) {

  function handleClick() {
    setName('Chaurasia')
    setshowtitlepage(false)
  }
  return (


    <div>
      This is header : Welcome to react
      <div>
        your name is : {name}
        <button onClick={handleClick}>Change Name</button>
      </div>
      This is title page: {showtitlepage ? <Title /> : null}
    </div>
  )
};