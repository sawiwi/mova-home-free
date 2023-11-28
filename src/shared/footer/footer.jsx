import React from 'react';

import Logo from '../../assets/img/logo/logoHead.png'
import { iconList } from '../../components/icons' 


const Footer = () => {
const {AiOutlineWhatsApp, FaLinkedin } = iconList

  return (
    <div className='h-full xl:h-[490px] bg-[#373635]'>
      <div className='max-w-[1290px] mx-auto p-10 pt-16 text-white'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div className='my-3 px-1 md:col-span-2'>
            <div className='flex justify-center xl:mx-24 mb-14 '>
              <img src={Logo} alt='logo-emp' className='h-16 w-32 xl:h-20 xl:w-auto cursor-pointer'></img>
            </div>
            <p className='text-center md:mx-10 break-words'>Queremos acompañarte durante todo el proceso de compraventa y arriendo de tus propiedades. Para ello, 
            ponemos a tu disposición toda nuestra experiencia y conocimientos.</p>
            <br></br>
            <div className='flex justify-center mx-auto my-2'>
              <a href='' className='bg-primary-default hover:bg-primary-default/90  p-3 text-gray-950 rounded-lg'>Contáctanos</a>
            </div>
          </div>
          <div className='my-3 px-6 md:col-span-1'>
            <h1 className='font-semibold text-2xl mb-2'>Menú</h1>
            <hr className=" mb-1 w-20 text-primary-default h-[2.1px] border-none bg-primary-default"></hr>
            <hr className="w-12 text-primary-default h-[2.1px] border-none bg-primary-default"></hr>
            <ul className='list-none'>
              <li className='my-4'><a href=''>Inicio</a></li>
              <li className='my-4'><a href=''>Quiénes Somos</a></li>
              <li className='my-4'><a href=''>Propiedades</a></li>
              <li className='my-4'><a href=''>Contáctanos</a></li>
              <li className='my-4'><a href=''>Intranet</a></li>
            </ul>
          </div>
          <div className='my-3 px-6 md:col-span-1'>
          <h1 className='font-semibold text-2xl mb-2'>Contáctanos</h1>
            <hr className=" mb-1 w-20 text-primary-default h-[2.4px] border-none bg-primary-default"></hr>
            <hr className="w-12 text-primary-default h-[2.1px] border-none bg-primary-default"></hr>
            <ul className='list-none'>
              <li className='my-4'>Dr. Manuel Barros Borgoño 160 Of 102 , Providencia, Santiago</li>
              <li className='my-4'>+569 7336 6164</li>
              <li className='my-4'>contacto@movahome.cl</li>
              <li className='my-4'> 
                <ul className='list-none flex flex-row'>
                  <li className='p-3'><a href=''><AiOutlineWhatsApp className='w-[30px] h-[30px] text-primary-default'/></a></li>
                  <li className='p-3'><a href=''><FaLinkedin className='w-[30px] h-[30px] text-primary-default'/></a></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer