import React, { useContext } from 'react'
import { useMemo, useState } from 'react'
import Name from './Profile/Name'
import User from '../context/Usercontext'
import All from '../context/Allcontext'

export default function Profile() {
    const [user, setUser] = useState('Swatantra')
    const [age, setAge] = useState('27')
    const { global} = useContext(All)
    const value = useMemo(
        () => ({user, setUser})
    )
    return (
    <div>
        <User.Provider value = {user}>
          Profile.js:  {user}| {age} | global: {global} <br></br>
            <Name></Name>

        </User.Provider>
    </div>
  )
}
