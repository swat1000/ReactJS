import './App.css';
import Header from './components/header';
import Contactus from './components/contactus';

function App() {
  const contactDetails = {
    name: 'Swatantra',
    phone: '6336822372',
    email: 'xyz@gmail.com'
  }
  return (
    <div>
      <Header></Header>
      
      <Contactus name={contactDetails.name}
        phone={contactDetails.phone} email={contactDetails.email}>
      </Contactus>
    </div>

  );
}

export default App;
