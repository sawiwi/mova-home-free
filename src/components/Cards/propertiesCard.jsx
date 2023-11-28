import React from 'react'
import image1 from '../../assets/img/house.jpeg'
import Modal from '../Modal/modal'

const PropertiesCard = () => {
  return (
    <div className='md:max-w-[50%] lg:max-w-[33.333333%] w-full px-3'>
      <div className='mb-6'>
        <a href='#propiedad' className=''>
          <div className='relative bg-gray-200 overflow-hidden'>
            <center>
              <img src={image1} className='h-[255px] w-auto hover:scale-110 transition-transform duration-300' alt=''/>
            </center>
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
          <div className='px-6 pb-4 w-full flex justify-start border-b pt-3'>
            <table className="table-fixed w-full">
              <thead>
                <tr className='[&>th]:text-sm [&>th]:px-3 [&>th]:text-[#A6ADBB] [&>th]:font-normal text-center'>
                  <th>M2</th>
                  <th>Dormitorios</th>
                  <th>Baños</th>
                  <th>Garajes</th>
                </tr>
              </thead>
              <tbody>
                <tr className='[&>td>div>svg]:text-primary-default text-[#A6ADBB]'>
                  <td>
                    <div className='flex items-center justify-center'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path></g></svg>
                      <span className='ml-1'>2</span>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center justify-center'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path></svg>  
                      <span className='ml-1'>2</span>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center justify-center'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path></svg>
                      <span className='ml-1'>4</span>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center justify-center'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 44.158L19.76 165.816 32 173.937l224-112 224 112 12.24-8.12L256 44.157zm0 37.904l-215 107.5V495h30V203h370v292h30V189.562l-215-107.5zM92 223v18h328v-18H92zm0 36v18h328v-18H92zm100 36c-8.5 0-14.393 5.524-18.95 11.6-4.556 6.075-8.276 13.701-11.478 22.24-4.27 11.389-7.54 24.334-9.248 36.887-8.722-2.235-22.048-4.431-24.324 2.273-2.354 6.934 7.344 13.583 16.668 18.217-.32 1.067-.63 2.17-.906 3.344C141.969 397.18 141 406.6 141 416c0 9.4.969 18.82 2.762 26.44 1.272 5.406 3.108 9.766 4.744 12.56h214.988c1.636-2.794 3.472-7.154 4.744-12.56C370.031 434.82 371 425.4 371 416c0-9.4-.969-18.82-2.762-26.44a56.768 56.768 0 0 0-.906-3.343c9.324-4.634 19.022-11.283 16.668-18.217-2.276-6.704-15.602-4.508-24.324-2.273-1.707-12.553-4.977-25.498-9.248-36.887-3.202-8.539-6.922-16.165-11.479-22.24C334.393 300.524 328.5 295 320 295H192zm0 18h128c-.5 0 1.607.476 4.55 4.4 2.944 3.925 6.224 10.299 9.022 17.76 3.673 9.795 6.488 21.437 8.028 32.414C318.195 361.125 292.18 361 256 361c-36.18 0-62.195.125-85.6 6.574 1.54-10.977 4.355-22.62 8.028-32.414 2.798-7.461 6.078-13.835 9.021-17.76 2.944-3.924 5.051-4.4 4.551-4.4zm-16 87a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm160 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-183 73v22h30v-22h-30zm176 0v22h30v-22h-30z"></path></svg>
                      <span className='ml-1'>5</span>
                    </div>
                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='p-6 pt-3'>
            <h5 className='hover:text-primary-default text-black mb-2'>
              <a href='#propiedad'>
                <p className='text-primary-default mb-2'>Codigo: d2d2</p>
                Departamento, 1 Dormitorios, 1 Baños, Superficie construida 100 metros...
              </a>
            </h5>
            <span className='inline-flex items-center text-primary-default mt-5'>
              <div className="w-6 h-6 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <span>rico, Sta Blanca, 2173, Lo Barnechea</span>
            </span>
          </div>
          <div className='px-6 pb-3 w-full flex justify-start'>
            <div className='flex [&>div>svg]:text-primary-default'>
              <div className="w-6 h-6 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </div>
              
              Ureta Propiedades 
            </div>
          </div>

          <div className='px-6 pb-3 w-full flex justify-end border-t pt-3'>
            <Modal></Modal>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default PropertiesCard
