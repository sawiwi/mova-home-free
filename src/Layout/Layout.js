import React from 'react'
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'
import ContactWsp from '../shared/contactButton/Fab'
import HeadPage from '../components/HeadPage/headPage'

const Layout = ({children}) => {
  return (
    <>
        <HeadPage>
        <title>Movahome | Tu partner inmobiliario</title>
        </HeadPage>
        <Header/>
        <main className='pt-28 md:pt-44 lg:pt-36'>{children}</main>
        <ContactWsp/>
        <Footer/>
    </>
  )
} 

export default Layout