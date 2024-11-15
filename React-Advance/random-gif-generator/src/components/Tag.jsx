import  React,{ useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  const [gif, setgif] = useState(' ');
  const [loading, setloading] = useState(true)
  const [inputValue, setInputValue] = useState(' ')

  async function fetchData( ) {
    setloading(true)

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${inputValue}`
    const {data} = await axios.get(url)   //hold only data object not entire response
    // console.log(data);
    const imageSource= data.data.images.downsized_large.url

    // if don't want to destructure {data} then
    // const imageSource = data.data.data.images.downsized_large.url;
    // console.log(imageSource);
    setgif(imageSource)
    setloading(false)
  }  
  
  useEffect(() => {
    fetchData();
  }, [])
  
  function clickHandler( ) {
    fetchData()
   }

  function changeHandler(e) {
     setInputValue(e.target.value)
     console.log(e.target.value);
  }

  return( 
      <div className="w-1/2  bg-blue-500 rounded-lg border border-black 
      flex flex-col items-center gap-y-5 mt-[15px] ">

        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
          Random Gif
        </h1>

        {
          loading ? (<Spinner/>) :(<img src={gif}   width='400' />)
        }
        {/* <img src={gif}   width='400' /> */}

        <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[1px] text-center"
        onChange={changeHandler}
        value={inputValue}
        />

        <button onClick={clickHandler}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
        >
          Generate
        </button>
      </div>
      )
}
