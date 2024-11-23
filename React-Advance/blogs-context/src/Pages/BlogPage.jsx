import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { baseUrl } from '../baseUrl'
import Header from '../Components/Header'

function BlogPage() {

  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const location= useLocation()
  const navigation= useNavigation()
  const {loading, setLoading}= useContext(AppContext)
  const blogId= location.pathname.split("/").at(-1)
  
  async function fetchRelatedBlogs() {
    setLoading(true)
    let url= `${baseUrl}?blogId=${blogId}`;
    try {
      const res= await fetch(url)
      const data= await res.json()

      setBlog(data.blog)
      setRelatedBlogs(data.relatedBlogs)
    } catch (error) {
      console.log("Error occured in blog id");
      setBlog(null)
      setRelatedBlogs([])
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(blogId)  {
      fetchRelatedBlogs()
    }
  },[location.pathname])

  return (
    <div>
      <Header/>
      
    </div>
  )
}

export default BlogPage