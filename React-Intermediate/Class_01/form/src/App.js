import './App.css';
import { useState } from "react";

function App() {
  
const [formData,setFormData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  comments:"",
  isVisible:true,
});

// console.log(`firstName: ${formData.firstName}`);
// console.log(`lastName: ${formData.lastName}`);
// console.log(`email: ${formData.email}`);

console.log(formData);

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
          value={formData.firstName}
          /> 
          <input type='text' 
          placeholder='lastName'
          name='lastName'
          onChange={changeHandler}
          value={formData.lastName}
          />
          <input type='email' 
          placeholder='Email'
          name='email'
          onChange={changeHandler}
          value={formData.email}
          />
          <textarea
          placeholder='Enter Your comments here'
          name='comments'
          onChange={changeHandler}
          value={formData.comments}
          /> 
          <br></br>
          <br></br>
          <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          />
          <label htmlFor='isVisible'>on/off</label>
      </form>
     </div>
  );
}

export default App;
