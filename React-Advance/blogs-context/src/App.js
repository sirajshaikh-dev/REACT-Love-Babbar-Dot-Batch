import "./App.css"
import { useContext,useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import {Route, Routes, useLocation, useSearchParams} from "react-router-dom"
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage'
import TagPage from './Pages/TagPage'

export default function App() {

  const {fetchBlogPosts}=useContext(AppContext)
  const[searchParams,setSearchParams]= useSearchParams()
  const location= useLocation()
   
  useEffect(() => {
    const page= searchParams.get("page")?? 1;
    
    if (location.pathname.includes("tags")) { //iska matlab tagwala page show krna he
      // https://example.com/tags/software-dev
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ")
      // /tags/software-dev becomes ["", "tags", "software dev"].
      fetchBlogPosts(Number(page),tag)
    } 
    else if (location.pathname.includes("categories")) {
      const category= location.pathname.split('/').at(-1).replaceAll("-"," ")
      fetchBlogPosts(Number(page),null,category)
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname,location.search])
  
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:blogId" element={<BlogPage/>} />
        <Route path="/tags/:tag" element={<TagPage/>} />
        <Route path="/categories/:category" element={<CategoryPage/>} />
      </Routes>
    </div>
  );
}
