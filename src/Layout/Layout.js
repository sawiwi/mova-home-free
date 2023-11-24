import React from 'react'
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'
const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <main className='pt-28 md:pt-44 lg:pt-36'>{children}</main>
        <Footer/>
    </>
  )
}

export default Layout