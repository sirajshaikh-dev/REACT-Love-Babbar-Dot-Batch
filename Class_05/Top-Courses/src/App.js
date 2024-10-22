import React,{ useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Filter from "./Components/Filter"
import Cards from './Components/Cards'
import { filterData, apiUrl } from "./data";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify"; 

const App = () => {
  const [courses, setcourses] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async  () => {
    setLoading(true)
    try {
    const response= await fetch(apiUrl)
    const output= await response.json()
    setcourses(output)
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
  <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <Filter filterData={filterData}/>
    </div>
    <div>
      {
        loading ? <Spinner/> : <Cards courses={courses}/>
      }
    </div>
  </div>
)
};

export default App;
