import { useContext,useEffect } from 'react';
import Blogs from './Components/Blogs';
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext';

export default function App() {

  // const {fetchBlogPosts}=useContext(AppContext)
  // useEffect(() => {
  //   fetchBlogPosts();
  // }, [])
  
  return (
    <>
    <Header/>
    <Blogs/>
    <Pagination/>
    </>
  );
}
