 import React from 'react'
 import { FaCar } from 'react-icons/fa'
 const CartItem = ({item,itemIndex}) => {
   return (
     <div>
        <div>

          <div>
            <img src={item.title} alt="" />
            <h1>{item.description}</h1>
            <div>
              <p>{item.price}</p>
              <div>
                <FaCar/>
              </div>
            </div>
          </div>
        </div>
     </div>
   )
 }
 
 export default CartItem