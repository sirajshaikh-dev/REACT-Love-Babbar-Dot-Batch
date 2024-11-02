import './App.css';
import { useState } from "react";

function App() {
  
const [formData,setFormData]=useState({
  firstName:"",
  lastName:"",
  email:"",
});
    console.log(formData.email);
  function changeHandler(e) {
    setFormData((prevData)=>{
      return{
        ...prevData,
        [e.target.name]:e.target.value
      }
    })
  }

  return (
     <div > 
      <form style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', height:'50vh', borderRadius:'2px solid black'}}>
          <input type='text' 
          placeholder='firstName'
          name='firstName'
          onChange={changeHandler}
          /> 
          <input type='text' 
          placeholder='lastName'
          name='lastName'
          onChange={changeHandler}
          />
          <input type='email' 
          placeholder='Email'
          name='email'
          onChange={changeHandler}
          />
      </form>
     </div>
  );
}

export default App;
