import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'

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
            <div key={post.id}> 
              <p className='text-red-700 font-bold text-xs '>{post.title}</p>
              <p className='text-[10px]'>
                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
              </p>
              <p className='text-[10px]'>Posted on {post.date}</p>
              <p className='text-[11px] mt-[10px]'>{post.content}</p>

              <div className='flex gap-x-2'>
                {
                  post.tags.map((tag,index)=> (
                    <span key={index}
                    className='text-blue-600 text-[9px] underline'
                    >{`#${tag}`}</span>
                  ))
                }
              </div>

            </div>
          ) ))
        )
      }
    </div>
  )
}

export default Blogs