import React,{ useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Filter from "./Components/Filter"
import Cards from './Components/Cards'
import { filterData, apiUrl } from "./data";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify"; 

const App = () => {
  const [courses, setcourses] = useState(null) /*Can initialise with [] to avoid error */
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  const fetchData = async  () => {
    setLoading(true)
    try {
    const response= await fetch(apiUrl)
    const output= await response.json()
    setcourses(output.data)
     }catch (error) {
      console.error('Network issue')
      toast.error('Problem hai ')
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])

return (  
  <div className="min-h-screen flex-col flex bg-bgDark2">
    <div>
      <Navbar/>
    </div>
    <div className="bg-bgDark2">
    <div>
      <Filter 
      filterData={filterData}
      category={category}
      setCategory={setCategory}
      />
    </div>
    <div  className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {
        loading ? <Spinner/> : <Cards courses={courses} category={category}/>
      }
    </div>
    </div>
    
  </div>
)
};

export default App;
