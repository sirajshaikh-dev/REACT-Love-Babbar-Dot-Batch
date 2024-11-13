import { useState,React } from 'react'
// import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [confirmShowPassword, setConfirmShowPassword] = useState(false)
  const [accountType, setAccountType] = useState("student");

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
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
         onClick={() => setAccountType("student")}
         className={`${
           accountType === "student"
             ? "bg-richblack-900 text-richblack-5"
             : "bg-transparent text-richblack-200 "
         } py-2 px-5 rounded-full transition-all`}
       >
        Student</button>

        <button
        onClick={() => setAccountType("instructor")}
        className={`${
          accountType === "instructor"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200 "
        } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
        <div className="flex gap-x-4">
          <label className="w-full">
            <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>

            <input 
            required
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={changeHandler}
            placeholder='Enter First Name'
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>

          <label className="w-full">
            <p>Last Name <sup>*</sup></p>
            <input 
            required
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={changeHandler}
            placeholder='Enter Last Name'
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>

      {/* Email address */}
        
          <label  className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email address <sup>*</sup>
            </p>

            <input 
            required
            type='email'
            onChange={changeHandler}
            value={formData.email}
            name='email'
            placeholder='Enter email address'
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        
      {/*create password  and Confirm password */}
        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password 
              <sup className="text-pink-200">*</sup>
            </p>

            <input 
            required
            type={showPassword ? "text": "password"}
            onChange={changeHandler}
            value={formData.createPassword}
            name='createPassword'
            placeholder='Enter Password'
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
              <span 
                onClick={()=>setShowPassword( !showPassword /* OR prev=>!prev*/)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"  
              >
                {showPassword 
                ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>
                }
              </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password 
              <sup  className="text-pink-200">*</sup>
            </p>
            
            <input 
              required
              type={confirmShowPassword ? "text": "password"}
              onChange={changeHandler}
              value={formData.confirmPassword}
              name='confirmPassword'
              placeholder='Confirm Password'
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
             <span onClick={()=>setConfirmShowPassword(!confirmShowPassword)}
              className="absolute right-3 top-[38px] cursor-pointer z-10" 
              >
                {/* OR ()=>setConfirmShowPassword (prev)=>!prev */}
                {
                   confirmShowPassword 
                   ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                   : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>
                }
              </span>
          </label>
        </div>
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button> 
      </form>

    </div>
  )
}

export default SignupForm