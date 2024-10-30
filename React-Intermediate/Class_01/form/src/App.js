import './App.css';
import useState from 'react'
function App() {
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')

  console.log(firstname);
  console.log(lastName);
  
  function changeFirstNameHandler(e) {
    // console.log('printing first name');
    // console.log(e.target.value);
    setFirstName(e.target.value)
  }

  function changeLastNameHandler(e) {
    // console.log('printing last name');
    // console.log(e.target.value);
    setLastName(e.target.value)
  }
  return (
     <div className='app'> 
      <form>
          <input type='text' 
          placeholder='name'
          onChange={changeFirstNameHandler}
          />
          <input type='text' 
          placeholder='lastName'
          onChange={changeLastNameHandler}
          />
          
      </form>
     </div>
  );
}

export default App;
