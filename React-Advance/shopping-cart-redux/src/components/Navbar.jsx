import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart}= useSelector((state)=>state)

  return (
  <div className="bg-slate-600">
    <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img className="h-14"
            src="../logo.png" alt="img" />
          </div>
        </NavLink>
        
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        
        <NavLink to="/cart"  >
            <FaShoppingCart   />
            { 
              <span>{cart.length}</span>
            }
          </NavLink>
      </div>
    </div>
  </div>)
};

export default Navbar;
