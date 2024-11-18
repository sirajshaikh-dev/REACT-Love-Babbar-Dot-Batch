import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {

    const {page,handlePageChange,totalPages}= useContext(AppContext)
  return (
    <div>     
      { page >1 &&  // Previous wala btn pehle page k liye nhi aayega
        <button onClick={()=>handlePageChange(page-1)}>
          Previous
        </button>
      }
      { page < totalPages &&
        <button onClick={()=>handlePageChange(page+1)}>
          Next
        </button>
      }
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Pagination