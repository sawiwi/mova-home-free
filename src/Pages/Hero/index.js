import React from 'react'

const Hero = () => {
  const color = 'bg-[#070707]';
  return (
    <>
      <div id='HeroSectionScroll' className={`min-h-[616px] ${color} pt-28 xl:pt-40`}>
        <div className={`px-4 py-8 max-w-[1276px] mx-auto ${color}`}>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-stretch">
            <div className="flex flex-col rounded-md shadow-sm text-white justify-center">
              <p className="mx-1 max-w-xl sm:text-3xl/relaxed font-semibold">
                Servicios de contabilidad
              </p>
              <h1 className="bg-gradient-to-r from-[#EABE3F] via-[#c05b28] to-[#a73e0a] bg-clip-text text-3xl font-bold text-transparent sm:text-5xl pb-5">
                Déjanos la contabilidad a nosotros y concéntrate en tu negocio
              </h1>

              {/* <p className="mx-1 max-w-xl sm:text-xl/relaxed">
                Remuneraciones, Asesoría Contable y Tributaria para Emprendedores, PyMes y Empresas. Haz que tu negocio crezca de forma ordenada y controlada.
              </p> */}

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-[#EABE3F] px-12 py-3 text-sm font-medium text-white hover:bg-[#EABE3F] focus:outline-none focus:ring ring-[#EABE3F] active:bg-[#EABE3F] sm:w-auto transition-all duration-500"
                  href="#nosotros"
                >
                  Nosotros
                </a>
                <a
                  className="block w-full rounded border border-[#a73e0a] px-12 py-3 text-sm font-medium text-white hover:bg-[#a73e0a] focus:outline-none focus:ring ring-[#a73e0a] active:bg-[#a73e0a] sm:w-auto transition-all duration-500"
                  href="#services"
                >
                  Nuestros Servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Hero
