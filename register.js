import React, { useState } from 'react'
import Login from '../1login/login'
import './register.css'

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState(false)
  const [repassword, setRePass] = useState(false)
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !repassword) {
      setFlag(true);
    }
    else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div id='bgg'>
      {login ? (
        <form onSubmit={handleFormSubmit}>
          <div id='cont'>
            
          {/* <label>Name: </label> */}
          <input type='text' id='form1' name="name" placeholder="Enter name" onChange={(event) => setName(event.target.value)}></input><br></br>

          {/* <label>EmailId: </label> */}
          <input type='text' name="email" placeholder="Enter emailId" onChange={(event) => setEmail(event.target.value)} ></input><br></br>

          {/* <label>Password: </label> */}
          <input type='password' name="password" placeholder="Enter password" onChange={(event) => setPass(event.target.value)}></input><br></br>

          {/* <label>Password: </label> */}
          <input type='password' name="repassword" placeholder="Conform password" onChange={(event) => setRePass(event.target.value)}></input><br></br>

          <div id='reg1'>
          <button id='reg'>Register</button><br></br>
          </div>
          
          <span id="txt">Already registered ? </span>
          <div id='log1'>          
          <p onClick={handleClick} className="forgot-password text-right">
          <button id='log'>Login</button>
                            
              </p>
          </div>
          
              </div>
        </form>
         ) : (
        <Login />
        )}
      </div>
    </>
  )
}

export default Register






