import React from 'react'

export default function Description() {
    const {user, setUser, age, setAge} = userContext(User)
  return (
    <div>
        Description.js {user}|{age}
        <br></br>
         <button onClick={() => setUser('Herovired')}>Change user</button>
         <button onClick={() => setAge(23)}>Change Age</button>
    </div>
  )
}
