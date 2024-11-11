import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    }) 
    // OR
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [showPassword,setShowPassword]=useState(false)
    
    function changeHandler(event) {
        setFormData((prevData)=>({
                ...prevData, 
                [event.target.name]: event.target.value
            })
        )
        // OR
        // const { name, value } = e.target;
        // setFormData((prevData) => ({
        //   ...prevData,
        //   [name]: value,    
        // }));    
    }
    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true)
        toast.success('Logged In')
        navigate('/dashboard')
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Emaill Address: <span>*</span></p>
            <input 
            required
            type='email'
            value={formData.email}
            name='email'
            placeholder='Enter Email Id'
            onChange={changeHandler}
            />
        </label>

        <label>
            <p>Password <span>*</span></p>
            <input 
            required
            type= {showPassword ? "text" : "password" }
            value={formData.password}
            name='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            />
            <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {
                   showPassword ? (<AiOutlineEye />):(<AiOutlineEyeInvisible/>) 
                }
            </span>

            <Link to='#'>
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>
        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm