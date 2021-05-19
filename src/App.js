import logo from "./logo.svg";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AddApartment from "./components/Apartment/AddApartment";
import "./App.css";
import AddPayment from "./components/Payment/AddPayment";
import AddCase from "./components/Cases/AddCase";
import {Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
 
      <Route path="/" exact> <LoginPage/> </Route>
      <Route path="/register" exact> <RegisterPage/> </Route>
      <Route path="/main" > <MainPage/> </Route>

      </div>
    
  );
}

export default App;
