import './App.css';
import {NavLink, Link, Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Support from './Components/Support';
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/support" >Suppor</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/labs" >Labs</NavLink>
          <NavLink to="/*" >Not Found</NavLink>
        </li>
      </ul>
    </nav>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
