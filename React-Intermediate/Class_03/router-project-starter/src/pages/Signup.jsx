import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title=' Join millions learning code with studynotion for'
    desc1='Build skills for today, tomorrow and beyond'
    desc2='Education to future-proof your career'
    image={signupImg}
    formtype='signup'
    setIsLoggedIn={setIsLoggedIn}
    
    />
  );
}

export default Signup;
