import  React,{ useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

   
  const [tag, setTag] = useState(' ')
  const {gif, loading, fetchData}= useGif(tag)

  return( 
      <div className="w-1/2  bg-blue-500 rounded-lg border border-black 
      flex flex-col items-center gap-y-5 mt-[15px] ">

        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
          Random {tag} Gif
        </h1>

        {
          loading ? (<Spinner/>) :(<img src={gif}   width='400' />)
        }
        {/* <img src={gif}   width='400' /> */}

        <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[1px] text-center"
        onChange={(e)=>setTag(e.target.value)}
        value={tag}
        />

        <button onClick={()=>fetchData(tag)}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
        >
          Generate
        </button>
      </div>
      )
}

