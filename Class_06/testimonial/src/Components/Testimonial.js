import React, { useState } from "react";
import Card from "./Card";
// import {FiCheveronRight, FiCheveronLeft} from "react-icons/fi"
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
 
const Testimonial = ({ reviews }) => {

  const [index, setIndex] = useState(0);
  
    function leftShiftHandler( ) {
        if (index-1 < 0) {           
          setIndex(reviews.length-1)      /*to get last array data(n-1) */
        }
        else{
          setIndex(index-1)
        }
    }
    
    function RightShiftHandler() {
      if ( index +1 >= reviews.length) {
        setIndex(0);
      } else{
        setIndex(index+1)
      }
    }

    function surpriseHandler( ) {
      let random= Math.floor(Math.random()*reviews.length)
      setIndex(random)
    }
  return (

    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]}></Card>

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button 
        onClick={leftShiftHandler}
        className="cursor-pointer hover:text-violet-500">
          
          <IoIosArrowBack />

        </button>
        <button
        onClick={RightShiftHandler}
        className="cursor-pointer hover:text-violet-500"
        ><IoIosArrowForward /></button>
      </div>
      <div className="mt-6">
        <button 
        onClick={surpriseHandler}
        className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
