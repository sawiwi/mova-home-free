import React from 'react'
import image1 from '../../assets/img/house.jpeg'

const ListCard = () => {
  return (
    <div className='flex border border-gray-300 my-4 rounded-xl hover:shadow-xl transition-shadow duration-300 flex-col md:flex-row'>
      <div className='md:w-1/3 flex justify-center'>
        <img src={image1} className='h-[300px] w-auto' alt=''/>
      </div>
      <div className='md:w-2/3 flex flex-col md:flex-row'>
        <div className='md:w-2/3 flex flex-col justify-center p-3'>
          <div className='flex flex-col w-full text-[#A6ADBB]'>
            <small className='flex mb-3'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-xl mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
              rico, Sta Blanca , 2173 , Lo Barnechea
            </small>
            <small className='text-primary-default'>COD: 12345</small>
          </div>
          <h5 className='font-bold text-xl mb-2'>
            Departamento, 1 Dormitorios, 1 Baños, Superficie construida 100 metros...
          </h5>
          <div className='w-full border-b-2 mb-4 border-[#e6eaf3]'></div>
          <div>
            <table class="table-fixed w-full">
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
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path></g></svg>
                      <span className='ml-1'>2</span>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center justify-center'>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path></svg>  
                      <span className='ml-1'>2</span>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center justify-center'>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path></svg>
                      <span className='ml-1'>4</span>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center justify-center'>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 44.158L19.76 165.816 32 173.937l224-112 224 112 12.24-8.12L256 44.157zm0 37.904l-215 107.5V495h30V203h370v292h30V189.562l-215-107.5zM92 223v18h328v-18H92zm0 36v18h328v-18H92zm100 36c-8.5 0-14.393 5.524-18.95 11.6-4.556 6.075-8.276 13.701-11.478 22.24-4.27 11.389-7.54 24.334-9.248 36.887-8.722-2.235-22.048-4.431-24.324 2.273-2.354 6.934 7.344 13.583 16.668 18.217-.32 1.067-.63 2.17-.906 3.344C141.969 397.18 141 406.6 141 416c0 9.4.969 18.82 2.762 26.44 1.272 5.406 3.108 9.766 4.744 12.56h214.988c1.636-2.794 3.472-7.154 4.744-12.56C370.031 434.82 371 425.4 371 416c0-9.4-.969-18.82-2.762-26.44a56.768 56.768 0 0 0-.906-3.343c9.324-4.634 19.022-11.283 16.668-18.217-2.276-6.704-15.602-4.508-24.324-2.273-1.707-12.553-4.977-25.498-9.248-36.887-3.202-8.539-6.922-16.165-11.479-22.24C334.393 300.524 328.5 295 320 295H192zm0 18h128c-.5 0 1.607.476 4.55 4.4 2.944 3.925 6.224 10.299 9.022 17.76 3.673 9.795 6.488 21.437 8.028 32.414C318.195 361.125 292.18 361 256 361c-36.18 0-62.195.125-85.6 6.574 1.54-10.977 4.355-22.62 8.028-32.414 2.798-7.461 6.078-13.835 9.021-17.76 2.944-3.924 5.051-4.4 4.551-4.4zm-16 87a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm160 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-183 73v22h30v-22h-30zm176 0v22h30v-22h-30z"></path></svg>
                      <span className='ml-1'>5</span>
                    </div>
                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='md:w-1/3 flex flex-col justify-center px-5 md:px-0 lg:px-5 py-3'>
          <div className='w-full'>
            <p className='flex justify-center md:justify-end items-center mb-3 font-semibold text-xl border-primary-400 p-1 rounded-sm text-primary-default'>UF: 54.72</p>
            <p className='flex justify-center md:justify-end items-center mb-3 font-semibold text-xl border-primary-400 p-1 rounded-sm text-black'>CLP: $2.000.000</p>
          </div>
          <div className='flex justify-center md:justify-end'>
            <button className='inline-flex items-center px-6 py-2 w-52 m-2 text-center  xl:w-48 xl:h-12 xl:px-8 text-white bg-primary-default rounded-lg hover:bg-[#ffd488] transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300'>
              <span className='text-lg xl:text-lg m-1 flex items-center'>
                Ver Detalle
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mt-[0.3rem] ml-1 hover:translate-x-3 transition duration-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor"></path></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListCard
