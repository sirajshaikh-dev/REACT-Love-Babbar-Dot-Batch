import { useState,React } from 'react'
// import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [confirmShowPassword, setConfirmShowPassword] = useState(false)
  const [formData, setFormData] = useState({
      firstName:"",
      lastName: '',
      email: '',
      createPassword: '',
      confirmPassword:'',
  })

  function changeHandler(event){
    setFormData((prevData)=>(
      {
      ...prevData,
      // [event.target.name]:[event.target.value]
      // [event.target.value], makes createPassword and confirmPassword 
      // arrays rather than strings. This leads to a mismatch even if the 
      // passwords appear identical because an array will never strictly equal a string.
      [event.target.name]: event.target.value // Remove brackets 
      }
    ))
  }


  function submitHandler(e) {
    e.preventDefault();
    if (formData.createPassword != formData.confirmPassword){
      toast.error('Password did not match')
      console.log(formData); // Log data even password do not match
      // console.log(JSON.stringify(formData)); // To get data in string
      return;
    }
    setIsLoggedIn(true)
    toast.success('Account Created')
    navigate('/dashboard')
    
    console.log(formData); //Log data only if pasword mathces
    // console.log({AccountData: {...formData}}); // practicing
  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
        <div>
          <label>
            <p>First Name <sup>*</sup></p>
            <input 
            required
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={changeHandler}
            placeholder='Enter First Name'
            />
          </label>

          <label>
            <p>Last Name <sup>*</sup></p>
            <input 
            required
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={changeHandler}
            placeholder='Enter Last Name'
            />
          </label>
        </div>

      {/* Email address */}
        
          <label>
            <p>Email address <sup>*</sup></p>
            <input 
            required
            type='email'
            onChange={changeHandler}
            value={formData.email}
            name='email'
            placeholder='Enter email address'
            />
          </label>
        
      {/*create password  and Confirm password */}
        <div>
          <label>
            <p>Create Password <sup>*</sup></p>
            <input 
            required
            type={showPassword ? "text": "password"}
            onChange={changeHandler}
            value={formData.createPassword}
            name='createPassword'
            placeholder='Enter Password'
            />
             <span onClick={()=>setShowPassword( !showPassword /* OR prev=>!prev*/)}>
                {
                   showPassword 
                   ? <AiOutlineEye/>
                   : <AiOutlineEyeInvisible />
                }
            </span>
          </label>

          <label>
            <p>confirmPassword <sup>*</sup></p>
            <input 
            required
            type={confirmShowPassword ? "text": "password"}
            onChange={changeHandler}
            value={formData.confirmPassword}
            name='confirmPassword'
            placeholder='Confirm Password'
            />
             <span onClick={()=>setConfirmShowPassword(!confirmShowPassword)} >
                {/* OR ()=>setConfirmShowPassword (prev)=>!prev */}
                {
                   confirmShowPassword 
                   ? <AiOutlineEye/>
                   : <AiOutlineEyeInvisible />
                }
            </span>
          </label>
        </div>
        <button>
          Create Account
        </button> 
      </form>

    </div>
  )
}

export default SignupForm