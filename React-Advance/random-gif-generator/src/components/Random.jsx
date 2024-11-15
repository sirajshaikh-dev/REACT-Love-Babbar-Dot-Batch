import  React,{ useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY = 'VzTxCNb5aaeQxI5w99ViL3G2TKGqTpVj'
// const API_KEY_2=process.env.REACT_APP_GIPHY_API_KEY_2;
// const API_KEY_2='3K8SsG1tGi80HvrAU3Y8gKxoRYov6Snd'

// let curApiKey= API_KEY;

export default function Random() {
  
  const {gif,loading,fetchData}=useGif();

 

  return( 
      <div className="w-1/2  bg-green-500 rounded-lg border border-black 
      flex flex-col items-center gap-y-5 mt-[15px] ">

        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
          A Random Gif
        </h1>

        {
          loading ? (<Spinner/>) :(<img src={gif}   width='400' />)
        }
        {/* <img src={gif}   width='400' /> */}
        <button onClick={()=>fetchData()}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
        >
          Generate
        </button>
      </div>
      )
}
