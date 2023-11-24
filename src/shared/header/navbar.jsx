import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {NavigationItem, ButtonItem} from '../navigation/NavigationItem'
import {NavMobile, ButtonNavMobile} from '../navigation/NavMobile'
import Logo from '../../assets/img/logo/logoHead.png'

const navigation = [
  { name: 'Inicio', href: 'HeroSectionScroll', buttonStyle: false  },
  { name: 'Quiénes Somos', href: 'AboutSectionScroll', buttonStyle: false  },
  { name: 'Propiedades', href: 'PropertiesSectionScroll', buttonStyle: false  },
  // { name: 'Venta', href: 'ServicesSectionScroll', buttonStyle: false  },
  // { name: 'Arriendo', href: 'ServicesSectionScroll', buttonStyle: false  },
  // { name: 'Confianos tu propiedad', href: 'ServicesSectionScroll', buttonStyle: false  },
  { name: 'Contáctanos', href: '#', buttonStyle: false  },
  { name: 'Intranet', href: '#', buttonStyle: true },
] 

const Navbar = () => {
  return (
    <Disclosure as="nav" className="py-3 md:py-6 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex lg:h-16 items-center justify-between">
              
              <div className="flex flex-1 items-center justify-start sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-24 w-auto cursor-pointer"
                    src={Logo}
                    alt="movahome"
                  />
                </div>
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex">
                    {navigation.map((item,index) => item.buttonStyle ? (<ButtonItem key={index} menuItem={item}/>) : (<NavigationItem key={index} menuItem={item}/>)
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center justify-between lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menú principal</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="lg:hidden">
              {({ close }) => (
                <div className="max-w-[650px] mx-auto space-y-2 px-2 pb-3 pt-2">
                  {navigation.map((item,index) => item.buttonStyle ? (<ButtonNavMobile key={index} menuItem={item}/>) : (<NavMobile key={index} menuItem={item} close={close}/>))}
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
          
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
