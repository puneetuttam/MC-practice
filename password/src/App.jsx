import { useState } from "react";
import "./App.css"
const App=()=>{
  const handleClick=()=>{
    setPass(!pass)
  }
  const[pass,setPass] =useState(true)
  return(
    <div>
      <h1>Password Toggle</h1>
    <div className="parent">
      <div><input type={pass?'password':'text'} placeholder="Enter your Password"></input></div>
      <div className="toggle" onClick={handleClick}>{pass?"🔐":"🔓"}</div>
    </div>
    </div>
  )
}
export default App;