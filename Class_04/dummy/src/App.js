import './App.css';
import { useEffect, useState} from "react";

function App() {
  const [name, setName] = useState('siraj')
  const [text, setText] = useState('')
  //Variation 1: Every Render
  // useEffect(()=>{
  //   console.log('Ui rendering done');
  // })

  //Variation2: First Render
  useEffect(()=>{
    console.log("UI RENDERING DONE");
  },[])

  //Variation 3:- First render + Whenever dependecies changes
  useEffect(()=>{
    console.log('Change observed');
  },[name])

  function changeHandler(e) {
    setText(e.target.value);
    console.log(text);
   }
  return (
    <div className="App">
       <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
