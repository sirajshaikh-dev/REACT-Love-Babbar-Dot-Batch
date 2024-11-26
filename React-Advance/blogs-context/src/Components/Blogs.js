import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

function Blogs() {
  const {posts,loading}= useContext(AppContext)

  return (  
    <div className='w-11/12 max-w-[450px] flex flex-col gap-y-7 mt-[70px]'>
      {
        loading 
        ? (<Spinner/> )
        :(
          posts.length===0  
          ?(<div>
              <p>No data Found</p>  
            </div>)
          :(posts.map((post)=> (
            <BlogDetails key={post.id} post={post} />
          ) ))
        )
      }
    </div>
  )
}

export default Blogs