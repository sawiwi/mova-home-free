import React from 'react'
import Navbar from './navbar'

import { realtorData } from '../../constants/realtor'
import { iconList } from '../../components/icons' 

const Header = () => {

  const {AiOutlineWhatsApp} = iconList
  return (
    <header className='bg-secondary-default text-white fixed z-50 w-full'>
      <div className='h-[36px] border-b border-gray-900 hidden md:block'>
        <div className='max-w-[1200px] w-full h-full px-4 mx-auto flex justify-between items-center'>
          <div>
            <ul className='list-none flex space-x-4'>
              <li>
                <a href='#hola' className='flex items-center gap-x-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  +56 {realtorData.phone}
                </a>
              </li>
              <li>
                <a href='#hola' className='flex items-center gap-x-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  {realtorData.email}
                </a>
              </li>
            </ul>

          </div>
          <div><AiOutlineWhatsApp className='w-[23px] h-[26px]'/> </div>
        </div>
        
      </div>
      <Navbar></Navbar>
    </header>
  )
}

export default Header
