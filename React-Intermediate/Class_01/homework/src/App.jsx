
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
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
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
          onChange={changeHandler}
          />
        </label>  <br />

        <label htmlFor='lastname'>LastName: <span/>
          <input 
          type='text' 
          placeholder='Siraj'
          id='lastname' 
          name='lastname'
          onChange={changeHandler}
          />
        </label> <br />

        <label htmlFor='email'>Email:  <span/>
          <input 
          type='email' 
          placeholder='joe@123'
          id='email' 
          name='email'
          onChange={changeHandler}
          />
        </label> <br /> 

        <label htmlFor='country'>Country:  <span/>
          <select id='country' name='country'  onChange={changeHandler}> 
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
          onChange={changeHandler}
          ></textarea>
        </label> <br /> 

        <label htmlFor='city' > City:
          <input type="text" 
          name='city'
          id='city'
          placeholder='Surat'
          onChange={changeHandler}
          />

        </label> <br/>

        <label htmlFor='state'> State: 
          <input type='text'
          id='state'
          name='state'
          placeholder='Gujarat'
          onChange={changeHandler}
          />
        </label> <br />
        <label htmlFor='zip'> Zip: 
          <input type='number'
          id='zip'
          name='zip'
          placeholder='654658'
          onChange={changeHandler}
          />
        </label> <br />

        <fieldset>
          <legend> By email:</legend>
          <input type='checkbox'
            id='comments'
            value='comments'
            name='comments'
            onChange={changeHandler}
            />
          <label htmlFor='comments'>Comments </label>

          <input type='checkbox'
            id='candidates'
            value='candidates'
            name='candidates'
            onChange={changeHandler}
            />
          <label htmlFor='candidates'>Candidates </label>

          <input type='checkbox'
            id='offers'
            value='offers'
            name='offers'
            onChange={changeHandler}
            />
          <label htmlFor='offers'>Offers </label>
        </fieldset>
        
        <fieldset>
          <legend>Push Notification</legend>
          <input type='radio' 
          id='everything'
          name='notification'
          value='everything'
          onChange={changeHandler}
          />
          <label htmlFor='everything'>Everything</label>

          <input type='radio' 
          id='sameemail'
          name='notification'
          value='sameemail'
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
