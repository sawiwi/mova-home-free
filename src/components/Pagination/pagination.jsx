import React from 'react'

const Pagination = () => {
  return (
    <div className='w-full'>
      <nav>
        <ul className='flex justify-center mt-6 list-none rounded [&>li>a]:transition [&>li>a]:duration-300'>
          <li className='mr-3'><a href='#a' className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'>Anterior</a></li>
          <li className='mr-3'><a href='#a' className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'>1</a></li>
          <li className='mr-3'><a href='#a' className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'>2</a></li>
          <li className='mr-3'><a href='#a' className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'>3</a></li>
          <li className='mr-3'><a href='#a' className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'>4</a></li>
          <li className='mr-3'><a href='#a' className='text-[#818181] relative block leading-10 rounded-md px-3 sm:px-5 border-none bg-[#f5f5f5] text-sm hover:bg-primary-default hover:text-white'>Siguiente</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
