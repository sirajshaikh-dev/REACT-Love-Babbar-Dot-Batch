import { useContext,useEffect } from 'react';
import Blogs from './Components/Blogs';
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext';
import {Route, Routes} from "react-router-dom"
export default function App() {

  // const {fetchBlogPosts}=useContext(AppContext)
  // useEffect(() => {
  //   fetchBlogPosts();
  // }, [])
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />
    </Routes>
  );
}
