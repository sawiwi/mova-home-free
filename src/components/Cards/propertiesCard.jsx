import React from 'react'
import image1 from '../../assets/img/house.jpeg'

const PropertiesCard = () => {
  return (
    <div className='md:max-w-[50%] lg:max-w-[33.333333%] w-full px-3'>
      <div className='mb-6'>
        <a href='#propiedad' className=''>
          <div className='relative bg-gray-300 overflow-hidden'>
            <center>
              <img src={image1} className='h-[255px] w-auto' alt=''/>
            </center>
            <div className='bg-[#f7be81] text-white absolute top-[30px] left-[-50px] z-10 w-[200px] text-center rotate-[-42deg]'>
              Nuevo
            </div>
            <div className='text-white py-[5px] px-[15px] rounded z-10 absolute top-[15px] right-[15px] bg-[#2e2e2e]'>
              En Venta
            </div>
            <div className='absolute bottom-[20px] left-[20px] z-10 text-2xl text-primary-default bg-black/30'>
              UF 74.449,79
              <span className='text-sm text-white block'>
                1390 / m2
              </span>
            </div>
          </div>
        </a>
        <div className='shadow-xl'>
          <div className='p-[24px]'>
            <h5 className='hover:text-primary-default text-black mb-2'>
              <a href='#propiedad'>
                <p className='text-primary-default mb-2'>Codigo: d2d2</p>
                Departamento, 1 Dormitorios, 1 Baños, Superficie construida 100 metros...
              </a>
            </h5>
            <span className='flex space-x-3 [&>svg]:text-primary-default mt-5'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              rico, Sta Blanca , 2173 , Lo Barnechea
            </span>
          </div>
          <div className='px-[24px] pb-[24px] w-full flex justify-start'>
            <div className='flex [&>svg]:text-primary-default'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
              Ureta Propiedades
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertiesCard
