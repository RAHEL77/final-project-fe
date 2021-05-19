import React, { useState } from "react";
import {apiLogin} from '../../api/userApi';
import {useHistory} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onLogin = async(e) => {
    e.preventDefault();
    console.log(email, password);
    localStorage.removeItem('token')
    const resp = await apiLogin(email,password);
    const rawToken = localStorage.getItem('token');
    
    if(!resp.msg)
      history.push('/main')
    else
      alert(resp.msg)
  };

  return (
    <div>
            <h3>LOGIN</h3>
   
      <form onSubmit={onLogin} style={{display:"flex"}}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
