import React from "react";

const Filter = ({filterData,category,setCategory}) => {

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {
        filterData.map((data)=>(
          <button
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300`}
          key={data.id}
          onClick={( )=> filterHandler(data.title)}
          >{data.title}
          </button>
        ))
      }
    </div>
    /*Conditional check for filterData */
    // <div>
    //   {filterData && filterData.length > 0 ? (
    //     filterData.map((data) => (
    //       <button key={data.id}>
    //         {data.title}
    //       </button>
    //     ))
    //   ) : (
    //     <p>No filters available.</p>
    //   )}
    // </div>
  );
};

export default Filter;