import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart}= useSelector((state)=>state)

  return (
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5"> 
            <img className="h-14"
            src="../logo.png" alt="img" />
          </div>
        </NavLink>
        
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        
        <NavLink to="/cart" className='relative' >
            <FaShoppingCart  className="text-2xl" />
            { 
              cart.length > 0 && 
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
              justify-center items-center animate-bounce rounded-full text-white" 
              >{cart.length}</span>
            }
          </NavLink>
      </div>
    </nav>
  )};

export default Navbar;


/*
//Showing count as badge on cart :  "THE HARD WAY"
{
  (() => {
  if (cart.length > 0) {
    return (
      <span>{cart.length}</span>
    );
  }
  return null;
  })()
} */
/* 
//THE "EASY HARD"
let cartBadge = null;
if (cart.length > 0) {
  cartBadge = (
    <span>{cart.length}</span>
  );
}

<NavLink to="/cart" >
  <FaShoppingCart />
  {cartBadge}
</NavLink>;
 */