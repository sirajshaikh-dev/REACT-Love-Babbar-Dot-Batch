import './App.css';
import {NavLink, Link, Route,Routes} from 'react-router-dom'
import Support from './Components/Support';
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <div className="App">
    {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/support">Support</Link>
            <Link to="/about">About</Link>
            <Link to="/labs">Labs</Link>
          </li>
        </ul>
      </nav> */}

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
        {/* <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} /> */}

        <Route path='/' element={<MainHeader/>} >
        {/* index route: Used to define the default component for 
        a given route path, loading when no additional path is specified. */}
          <Route index element={<Home/>}/>      {/* default route for parent route */}
          <Route path="support" element={<Support/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="labs" element={<Labs/>}/>
          <Route path="*" element={<NotFound/>}/>
          {/* path="*" route: Used to catch all unspecified or incorrect routes,
          typically for displaying a "404" error page. */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
