 import React from 'react'
 import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import toast from 'react-hot-toast';
  
 const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id));  
    toast.error('Item removed');
  };
  

   return (
     <div>
        <div>

          <div>
            <img src={item.image} alt="" />
            <h1>{item.description}</h1>
            <div>
              <p>{item.price}</p>
              <div>
                <MdDelete onClick={removeFromCart}/>
              </div>
            </div>
          </div>
        </div>
     </div>
   )
 }
 
 export default CartItem