import React, { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    }) 
    // OR
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [showPassword,setShowPassWord]=useState(false)

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
  return (
    <form>
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
            type= {showPassword ? ("text") : ("password") }
            value={formData.password}
            name='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            />
            <span onClick={()=>showPassword((prev)=>!prev)}>
                {
                   showPassword ? (<FontAwesomeIcon icon="fa-solid fa-eye" />):(<FontAwesomeIcon icon="fa-solid fa-eye-slash" />) 
                }
            </span>

            <link to='#'>
                <p>
                    Forgot Password
                </p>
            </link>
        </label>
        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm