import './App.css';
import Header from './components/header';
import Contactus from './components/contactus';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  // const [name, setName] = useState('Swatantra')
  // const [Incnum, setNum]=useState(0)
  // const [showtitlepage, setshowtitlepage] = useState(true)

  // const contactDetails = {
  //   name: 'Swatantra',
  //   phone: '6336822372',
  //   email: 'xyz@gmail.com'
  // }

  // function handleClick(){
  //   setName('Chaurasia')
  // }

  // function RevertClick(){
  //   setName('Swatantra')
  // }

  // function Increment(){
  //   setNum(Incnum+1)
  // }

  // function Decrement(){
  //   setNum(Incnum-1)
  // }


  return (
    // <div>
    //   {/* <Header name={name} setName={setName} showtitlepage={showtitlepage} setshowtitlepage={setshowtitlepage}></Header> */}

    //   {/* <Contactus name={name}></Contactus> */}
    //   {/* My Name is {name}
    //   <button onClick={handleClick}>Click me</button> */}
    //   {/* <button onClick={RevertClick}>Revert me</button> */}

    //   {/* This is my Counter {Incnum}
    //   <button onClick={Increment}>Increment</button>
    //   <button onClick={Decrement}>Decrement</button> */}

    //   {/* <Contactus name={contactDetails.name}
    //     phone={contactDetails.phone} email={contactDetails.email}>
    //   </Contactus> */}
    // </div>

    <Routes>
      <Route path= '/'  element = {<Signup/>} />
      <Route path= '/login'  element = {<Login/>} />
    </Routes>

  );
}

export default App;
