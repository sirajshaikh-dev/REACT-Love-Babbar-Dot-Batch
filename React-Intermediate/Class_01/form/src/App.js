// import './App.css';
import { useState } from "react";

function App() {
  
const [formData,setFormData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  comments:"",
  isVisible:true,
  mode: '',
  favCar: '',
});

// console.log(`firstName: ${formData.firstName}`);
// console.log(`lastName: ${formData.lastName}`);
// console.log(`email: ${formData.email}`);

// console.log(formData);

  function changeHandler(e) {
     const {name,value,checked,type}=e.target
    setFormData((prevData)=>{
      return{
        ...prevData,
        [name]: type=== 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(formData);
  }

  return (
     <div > 
      <form style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', height:'50vh', borderRadius:'2px solid black'}}
      onSubmit={submitHandler}
      >
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
          checked={formData.isVisible}
          />
          <label htmlFor='isVisible'>on/off</label>
          <br/><br/>

          <fieldset>
            <legend>Mode:</legend>
            <input type='radio'
            onChange={changeHandler}
            name='mode'
            value='Online-mode'
            id='Online-mode'
            checked={formData.mode=== 'Online-mode'}
            />
            <label htmlFor='Online-mode'>Online mode</label>

            <input type='radio'
            onChange={changeHandler}
            name='mode'
            value='Offline-mode'
            id='Offline-mode'
            checked= {formData.mode === "Offline-mode"}
            />
            <label htmlFor='Offline-mode'>Offline mode</label>

          </fieldset>

          <fieldset>
            <legend>Car</legend>
          <label htmlFor="favcar">Choose your favCar: </label>
          <select
          onChange={changeHandler}
          name= 'favCar'
          id="favcar"
          value={formData.favCar}
          > 
          <option value='Scorpio'>Scorpio</option>
          <option value='Fortuner'>Fortuner</option>
          <option value='Ferrari'>Ferrari</option>
          <option value='Mercedez'>Mercedez</option>
          <option value='Audi'>Audi</option>
          <option value='Thar'>Thar</option>
          </select>
          </fieldset>

          {/* <input type="submit"  /> */}
          <button>Submit</button> 
      </form>
     </div>
  );
}

export default App;
