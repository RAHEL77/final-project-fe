import logo from "./logo.svg";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AddApartment from "./components/Apartment/AddApartment";
import "./App.css";
import AddPayment from "./components/Payment/AddPayment";
import AddCase from "./components/Cases/AddCase";
import Menu from "./components/Menu/Menu";
import {Route} from "react-router-dom";
import ApartmentPage from "./pages/ApartmentPage";
import UpdateApartment from "./components/Apartment/UpdateApartment";
import PaymentPage from "./pages/PaymentPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import UpdateUser from "./components/User/UpdateUser";

function App() {
  return (
    <div className="App">
      <Menu/>
      <br/>
      <Route path="/apartment"> <ApartmentPage/> </Route>
      <Route path="/apartments/:apartmentId"> <UpdateApartment/> </Route>
      <Route path="/payments"> <PaymentPage/> </Route>
      <Route path="/" exact> <LoginPage/> </Route>
      <Route path="/register" exact> <RegisterPage/> </Route>
      <Route path="/user" exact> <UserPage/> </Route>
      <Route path="/users/:userId" exact> <UpdateUser/> </Route>
      </div>
    
  );
}

export default App;
