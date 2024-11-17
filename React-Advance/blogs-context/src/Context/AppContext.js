import {createContext, useEffect, useState} from 'react'
import { baseUrl } from '../baseUrl';
//step1:
export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [loading,setLoading]= useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    async function fetchBlogPosts(page=1) {
        setLoading(true)
        let url=`${baseUrl}?page=${page}`;
        try { 
            const response= await fetch(url)
            const data= await response.json()
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

        useEffect(() => {
            fetchBlogPosts();
        }, [])
     
    function handlePageChange(page) {
        setPage(page)
        fetchBlogPosts(page)
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

