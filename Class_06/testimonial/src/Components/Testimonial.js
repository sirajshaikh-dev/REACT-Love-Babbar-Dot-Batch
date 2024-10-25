import React from "react";
import Card from "./Card";
// import {FiCheveronRight, FiCheveronLeft} from "react-icons/fi"

const Testimonial = ({ reviews }) => {
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[0]}></Card>

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button 
        // onClick={leftShiftHandler}
        className="cursor-pointer hover:text-violet-500">
          -{/* <FiCheveronLeft/> */}
        </button>
        <button
        // onClick={leftShiftHandler}
        className="cursor-pointer hover:text-violet-500"
        >+{/* <FiCheveronRight/> */}</button>
      </div>
      <div>
        <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
