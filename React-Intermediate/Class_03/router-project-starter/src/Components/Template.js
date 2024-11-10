import React from 'react'
import frameImage from "../assets/frame.png"

const Template = ({title, desc1, desc2,image ,formtype,setIsLoggedIn }) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
            formtype=== "signup"
            ? (<SignupForm/>)
            :(<LoginForm/>)
            }
            
            <div>
                <div></div>
                OR
                <div></div>
            </div>

            <button>Sign up with Google</button>
        </div>

        <div>
            <img src={frameImage} 
            alt='pattern' 
            width={558}
            height={504}
            loading='lazy'
            />
            <img src={image} 
            alt='Login image' 
            width={558}
            height={504}
            loading='lazy'
            />
        </div>
    </div>
  )
}

export default Template