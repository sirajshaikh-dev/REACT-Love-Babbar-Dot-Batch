import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 py-2 pt-3 bg-white w-11/12 max-w-[450px] flex justify-between items-center">
     
      <div className="flex space-x-4">
        {page > 1 && ( // Previous button
          <button
            onClick={() => handlePageChange(page - 1)}
            className="rounded-md border-2 border-zinc-500 px-1 py-1 text-sm hover:bg-zinc-200"
          >
            Previous
          </button>
        )}
        {page < totalPages && ( // Next button
          <button
            onClick={() => handlePageChange(page + 1)}
            className="rounded-md border-2 border-zinc-500 px-1 py-1 text-sm hover:bg-zinc-200"
          >
            Next
          </button>
        )}
      </div>

      <p className="font-bold text-sm text-gray-700">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}

export default Pagination;
