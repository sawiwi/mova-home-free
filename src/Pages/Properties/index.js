import React,{ useState } from 'react'
import PropertiesCard from '../../components/Cards/propertiesCard'
import Pagination from '../../components/Pagination/pagination'
import ListCard from '../../components/Cards/ListCard'

const Properties = () => {
  const [isList, setList] = useState(false);

  return (
    <div id='PropertiesSectionScroll' className='min-h-screen py-16'>
      <div className='max-w-[540px] md:max-w-[720px] lg:max-w-[1200px] w-full mx-auto'>
        <div className='py-5 px-3  mb-4 bg-white w-full'>
          <div className="flex flex-wrap flex-row justify-between xl:justify-between items-center">
            <div className="flex flex-row justify-start">
              <p className="text-lg p-1 rounded text-[#7a7e86]">
                Total Propiedades: 17
              </p>
            </div>
            <div className="flex flex-row justify-end">
              <ul className="flex">
                <li className="w-[200px] sm:flex hidden mr-5 text-gray-600">
                  <select className="px-2 py-1 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]">
                    <option value="">Ordenar por:</option>
                    <option value="asc">Menor precio</option>
                    <option value="desc">Mayor precio</option>
                  </select>
                </li>
                <li className={`mx-1 p-2.5 cursor-pointer ${isList? 'bg-gray-100 text-gray-500':'bg-primary-default text-white'}`} onClick={() => setList(false)}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg>
                </li>
                <li className={`mx-1 p-2.5 cursor-pointer ${isList? 'bg-primary-default text-white':'bg-gray-100 text-gray-500'}`} onClick={() => setList(true)}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z">
                    </path>
                  </svg>
                </li>
              </ul>


              {/* <a href="https://unnepropiedades.cl/" target="_blank">
                <div className="inline-flex items-center px-3 py-2 text-sm bg-primary-default text-white rounded-md hover:bg-primary">
                  <span className="mx-3">Búsqueda avanzada </span>   
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z">
                    </path>
                  </svg>
                </div>
              </a> */}
            </div>
          </div>
        </div>
        {!isList ? (
          <div className='flex flex-wrap items-stretch'>
            <PropertiesCard/>
            <PropertiesCard/>
            <PropertiesCard/>
            <PropertiesCard/>
            <PropertiesCard/>
            <PropertiesCard/>
          </div>
        ):(
          <div>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
          </div>
        )}
        

        
        <div>
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

export default Properties
