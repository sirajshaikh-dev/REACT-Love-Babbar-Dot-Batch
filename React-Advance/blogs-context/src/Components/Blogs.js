import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

function Blogs() {
  const {posts,loading}= useContext(AppContext)

  return (  
    <div className="my-[110px]">
      <div className="w-11/12 max-w-[500px] flex flex-col gap-y-7 mt-[70px]">
      {
        loading 
        ? (<Spinner/> )
        :(
          posts.length===0  
          ?(<div>
              <p className="font-bold text-3xl text-center my-[200px]">No data Found</p>  
            </div>)
          :(posts.map((post)=> (
            <BlogDetails key={post.id} post={post} />
          ) ))
        )
      }
      </div>
    </div>
    
  )
}

export default Blogs