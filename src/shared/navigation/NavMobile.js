import React, { useState } from 'react'
import { Link } from 'react-scroll';

export const NavMobile = ({menuItem, close}) => {
  
  const [viewActive, setViewActive] = useState(false);
  const handleActive = (viewName) => setViewActive(viewName);
  const handleInActive = (viewName) => setViewActive(viewName);

  const ActiveClassTw = 'block rounded-md px-3 py-2 text-base font-medium bg-primary-default text-black';
  const NoActiveClassTw = 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary-default hover:text-white';

  return (
    <>
      <Link 
        activeClass={ActiveClassTw}
        className={viewActive ? ActiveClassTw : NoActiveClassTw} 
        to={menuItem.href} 
        spy={true} 
        smooth={true} 
        offset={-110} 
        duration={500} 
        onSetActive={() => handleActive(true)} 
        onSetInactive={() => handleInActive(false)}
        onClick={() => close()}
      >
        {menuItem.name}
      </Link>
    </>
  )
}

export const ButtonNavMobile = ({menuItem, close}) => {
  return (
    <>
      <a 
        className={'block rounded-md px-3 py-2 text-base uppercase text-center text-black bg-[#ffd58e]'} 
        href={menuItem.href} 
        onClick={() => close()}
      >
        {menuItem.name}
      </a>
    </>
  )
}