import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {
        filterData.map((data)=>(
          <button
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200`}
           key={data.id}>
            {data.title}
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