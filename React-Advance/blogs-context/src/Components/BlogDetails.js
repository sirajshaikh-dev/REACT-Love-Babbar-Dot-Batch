import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}) {
  return (
    <div className="max-w-[500px] mx-auto w-11/12">
      <NavLink to={`/blog/${post.id}`}>
        <p className="font-bold text-xs text-red-700 cursor-pointer hover:underline">{post.title}</p>
      </NavLink>
      <p className="text-[10px]">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
          <span className='underline italic font-bold'>{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[10px]">Posted on {post.date}</p>
      <p className='text-[11px] mt-[10px]'>{post.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {post.tags.map((tag,index)=>(
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-600 text-[9px] underline cursor-pointer">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BlogDetails