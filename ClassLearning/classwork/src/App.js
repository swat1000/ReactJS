import './App.css';
import Header from './components/header';
import Contactus from './components/contactus';
import { useState } from 'react';

function App() {
  const [name, setName]=useState('Swatantra')

  const contactDetails = {
    name: 'Swatantra',
    phone: '6336822372',
    email: 'xyz@gmail.com'
  }

  function handleClick(){
    setName('Chaurasia')
  }

  
  return (
    <div>
      <Header></Header>
      My Name is {name}
      <button onClick={handleClick}>Click me</button>
      
      {/* <Contactus name={contactDetails.name}
        phone={contactDetails.phone} email={contactDetails.email}>
      </Contactus> */}
    </div>

  );
}

export default App;
