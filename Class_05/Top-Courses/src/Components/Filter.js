import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;

  return (
    <div>
      {filterData && filterData.length > 0 ? (
        filterData.map((data) => (
          <button key={data.id}>
            {data.title}
          </button>
        ))
      ) : (
        <p>No filters available.</p>
      )}
    </div>
  );
};

export default Filter;