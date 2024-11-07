
import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:'',
    email: '',
    country: '',
    address: '',
    city : '',
    state: '',
    zip: '',
    comments:'',
    candidates: '',
    offers: '',
    notification: '',


  })

  function changeHandler(event) {
    const {name,value,checked, type}=event.target
    setFormData((prevData)=>{
      return{...prevData,
        [name]: type=== 'checkbox' ? checked : value}
    })
  }

  function submitHandler( e) {
    e.preventDefault()
    console.log(formData);
  }
   

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstname'>FirstName: <span/>
          <input 
          type='text' 
          placeholder='Shaikh'
          id='firstname' 
          name='firstname'
          value={formData.firstname}
          onChange={changeHandler}
          />
        </label>  <br />

        <label htmlFor='lastname'>LastName: <span/>
          <input 
          type='text' 
          placeholder='Siraj'
          id='lastname' 
          name='lastname'
          value={formData.lastname}
          onChange={changeHandler}
          />
        </label> <br />

        <label htmlFor='email'>Email:  <span/>
          <input 
          type='email' 
          placeholder='joe@123'
          id='email' 
          name='email'
          value={formData.email}
          onChange={changeHandler}
          />
        </label> <br /> 

        <label htmlFor='country'>Country:  <span/>
          <select 
          id='country' 
          name='country'  
          value={formData.country}
          onChange={changeHandler}> 
            <option value='india'>India</option>
            <option value='USA'>USA</option>
            <option value='Canada'>Canada</option>
          </select>
        </label> <br /> 

        <label htmlFor='address'>Address:  <span/>
          <textarea style={{resize:'none'}}
          name="address" id="address"
          rows="2" cols="30"
          placeholder='123,pan gate'
          value={formData.address}
          onChange={changeHandler}
          ></textarea>
        </label> <br /> 

        <label htmlFor='city' > City:
          <input type="text" 
          name='city'
          id='city'
          placeholder='Surat'
          value={formData.city}
          onChange={changeHandler}
          />

        </label> <br/>

        <label htmlFor='state'> State: 
          <input type='text'
          id='state'
          name='state'
          placeholder='Gujarat'
          value={formData.state}
          onChange={changeHandler}
          />
        </label> <br />
        <label htmlFor='zip'> Zip: 
          <input type='number'
          id='zip'
          name='zip'
          placeholder='654658'
          value={formData.zip}
          onChange={changeHandler}
          />
        </label> <br />

        <fieldset>
          <legend> By email:</legend>
          <input type='checkbox'
            id='comments'
            name='comments'
            value={formData.comments}
            onChange={changeHandler}
            />
          <label htmlFor='comments'>Comments </label>

          <input type='checkbox'
            id='candidates'
            name='candidates'
            value={formData.candidates}
            onChange={changeHandler}
            />
          <label htmlFor='candidates'>Candidates </label>

          <input type='checkbox'
            id='offers'
            name='offers'
            value={formData.offers}
            onChange={changeHandler}
            />
          <label htmlFor='offers'>Offers </label>
        </fieldset>
        
        <fieldset>
          <legend>Push Notification</legend>
          <input type='radio' 
          id='everything'
          name='notification'
          value={formData.notification}
          onChange={changeHandler}
          />
          <label htmlFor='everything'>Everything</label>

          <input type='radio' 
          id='sameemail'
          name='notification'
          value='Everything'
          onChange={changeHandler}
          />
          <label htmlFor='sameemail'>Same as Email</label>

          <input type='radio' 
          id='no'
          name='notification'
          value='nonotification'
          onChange={changeHandler}
          />
          <label htmlFor='no'>No Notification</label>
        </fieldset>
        <button>Save</button>
      </form>
    </>
  )
}

export default App
