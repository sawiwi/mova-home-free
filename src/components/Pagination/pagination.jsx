import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }

    console.log(currentPage - 1)
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
    console.log(currentPage + 1)
  };

  return (
    <div className='w-full'>
      <nav>
        <ul className='flex justify-center mt-6 list-none rounded [&>li>button]:transition [&>li>button]:duration-300'>
          <li className='mr-3'>
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'
            >
              Anterior
            </button>
          </li>

          {getPageNumbers().map((pageNumber, index) => (

            <li className='mr-3' key={index}>
              <button
                className={`${
                  currentPage === pageNumber || pageNumber === '...'
                    ? 'relative block leading-10 rounded-md px-3 sm:px-5 border-none text-sm bg-primary-default text-white'
                    : 'text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'
                }`}
                disabled={currentPage === pageNumber || pageNumber === '...'}
                onClick={() =>
                  typeof pageNumber === 'number' && onPageChange(pageNumber)
                }
              >
                {pageNumber}
              </button>
            </li>
          
        ))}
          <li className='mr-3'>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
