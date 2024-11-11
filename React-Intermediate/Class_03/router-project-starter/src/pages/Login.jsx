import Template from "../Components/Template";
import loginImg from "../assets/login.png";

function Login({setIsLoggedIn}) {
  return (
    <Template
    title='welcome Back'
    desc1='Build skills for today, tomorrow and beyond'
    desc2='Education to future-proof your career'
    image={loginImg}
    formtype='login'
    setIsLoggedIn={setIsLoggedIn}
    
    />
  );
}

export default Login;
