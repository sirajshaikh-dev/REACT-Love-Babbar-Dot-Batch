import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
  <div className="bg-slate-600">
    <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src=" " alt="img" />
          </div>
        </NavLink>
        
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        
        <NavLink to='/cart'>
          <div><FaShoppingCart/></div>
        </NavLink>
      </div>
    </div>
  </div>)
};

export default Navbar;
