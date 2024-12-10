import React from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'

function CategoryPage() {
  const navigate= useNavigate()
  const location= useLocation()
  const category  = location.pathname.split("/").at(-1)

  return (
    <div className="mt-[100px]">
      <Header/>
      <div className="-mb-[100px] max-w-2xl mx-auto flex items-center space-x-2 w-11/12">
        <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={() => navigate(-1)}>🔙</button>
        <h2 className="font-bold text-xl">
          Blogs Tagged <span className="underline text-blue-700">#{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage