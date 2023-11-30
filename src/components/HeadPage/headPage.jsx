import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HeadPage = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        {children}
        <meta name="description" content="Sistema de canje Avanzado con nuevas oportunidades de negocios y aumenta tus ingresos con el sistema de canje desarrollado con inteligencia de datos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="kanjeo, yokanjeo, canjeo, canje tradicional, yo kanjeo, propiedad, venta, arriendo" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </HelmetProvider>

  )
}

export default HeadPage
