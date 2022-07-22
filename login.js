import React, { useState } from "react";
import Home from "../1homepage/home";
import '../1login/login.css'

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
    }
  }

  return (
    <div id="cont-main">
      {home ? (
        <form onSubmit={handleLogin}>

        <div id='contlog'>       
          <h3 id="log-txt">Have an account ?</h3>

          {/* <label>Email: </label> */}
          <input type="email" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)}/><br></br>
          {/* <label>Password: </label> */}
          <input type="password" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)}/><br></br>
          <div id="log-box">
          <button id="log-bt">Login</button>
          </div>
          </div>  
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;