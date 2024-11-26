import {createContext, useEffect, useState} from 'react'
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';
//step1:
export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [loading,setLoading]= useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const navigate=useNavigate()
    
    async function fetchBlogPosts(page=1,tag=null, category) {
        setLoading(true)

        let url=`${baseUrl}?page=${page}`;
        if (tag) url+= `&tag=${tag}`
        if(category) url+= `&category=${category}`

        try { 
            const response= await fetch(url)
            const data= await response.json()
            if (!data.posts || data.posts.length===0){
                throw new Error ('something went wrong')
            }
            console.log(data);
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
            } 
            catch (error) {
            console.error("An Error Occured");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            }
        setLoading(false)
    }
        // useEffect(() => {
        //     fetchBlogPosts();
        // }, [])
     
    function handlePageChange(page) {
        setPage(page)
        navigate({search: `?page=${page}`})
    }
    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };
    //step2:
    return <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
}

