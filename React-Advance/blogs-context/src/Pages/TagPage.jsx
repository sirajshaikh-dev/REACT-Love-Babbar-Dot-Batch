import React from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

function TagPage() {
  const navigate= useNavigate()
  const location =useLocation();
  const tag= location.pathname.split("/").at(-1)
  return (
    <div className="mt-[100px]">
      <Header/>
      <div className="max-w-2xl mx-auto flex items-center space-x-2 w-11/12 -mb-[100px]">
        <button className="border-2 border-gray-300 py-1 px-4 rounded-md"
         onClick={()=>navigate(-1)}>🔙</button>
        <h2 className="font-bold text-xl">Blogs Tagged <span className="underline text-blue-700">#{tag}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage