import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

function Card(props) {
  let course= props.course;
  let likedCourses= props.likedCourses;
  let setLikedCourses= props.setLikedCourses;

  function clickHandler( ) {
    if(likedCourses.includes(course.id)){
      //pehle se like hua pada he yo unlike krva do
      setLikedCourses((prev)=> prev.filter((cid)=>cid !== course.id))
      toast.warning('liked removed')
    } else{
      //pehle se like nhi he to like krva do
      if (likedCourses.length===0) {
        setLikedCourses([course.id])
      } else{
        setLikedCourses((prev)=>[...prev,course.id])
      }
      toast.success("liked successfully")
    }
  }

  return (
    <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
      <div className='relative '>
      <img src={course.image.url} alt={course.image.alt}/>

        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id)
              ? (<FcLike fontSize="1.75rem"/>)
              :(<FcLikePlaceholder fontSize="1.75rem"/>)
              
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
        <p className='mt-2 text-white'>
          {
            props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
          }
        </p>
      </div>

    </div>
  )
}

export default Card