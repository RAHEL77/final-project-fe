import logo from './logo.svg';
import Login from './components/User/Login'
import Register from './components/User/Register'
import Update from './components/User/Update'
import AddApartment from './components/Apartment/AddApartment'
import './App.css';

function App() {
  return (
    <div>
      <Login/>
      <br/>
      <Register/>
      <br/>
      <Update/>
      <br/>
      <AddApartment/>
    </div>
  );
}

export default App;
