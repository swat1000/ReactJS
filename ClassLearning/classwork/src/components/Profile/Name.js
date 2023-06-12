import React from 'react'
import Description from './Description'
import { useContext } from 'react'
import User from '../../context/Usercontext'

export default function Name() {
    const {user} = useContext(User)
  return (
    <div>
        Name.js : {user}<br></br>
        <Description></Description>
    </div>
  )
}
