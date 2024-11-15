import  React,{ useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY_2=process.env.REACT_APP_GIPHY_API_KEY_2;

let curApiKey= API_KEY;

export default function Random() {

  const [gif, setgif] = useState('');
  const [loading, setloading] = useState(true)

  async function fetchData( ) {

    try {
    setloading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${curApiKey}`
    const {data} = await axios.get(url)   //hold only data object not entire response
    // console.log(data);

    const imageSource= data.data.images.downsized_large.url
    // if don't want to destructure {data} then
    // const imageSource = data.data.data.images.downsized_large.url;
    // console.log(imageSource);
    setgif(imageSource)
    } 
      catch (error) 
      {
      if (error.response && error.response.status === 429) {
        console.error('Rate Limit Exceed, Retrying in 5 secnod');
        curApiKey = curApiKey ? API_KEY : API_KEY_2
        // setTimeout(fetchData, 5000);
      }else{
        console.error("An error occured:", error.message);
      }
    }
      finally{
        setloading(false)
      }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  function clickHandler( ) {
    fetchData()
   }

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
        <button onClick={clickHandler}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
        >
          Generate
        </button>
      </div>
      )
}
