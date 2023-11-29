import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ButtonClose from '../buttons/ButtonClose'
import ImageGallery from 'react-image-gallery';
import { iconsList } from '../../icons';

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
  } = iconsList;

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="hover:text-white  bg-primary-default/60 hover:bg-primary-default px-3 py-2 rounded-lg transition-colors duration-300"
        >
          Ver Detalle
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="py-4 px-6 text-center relative border-b bg-white border-slate-100 md:py-5">
                    <ButtonClose
                      onClick={closeModal}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4"
                    />
                    
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold lg:text-xl mx-10 text-slate-800"
                      >
                        Detalle de propiedad

                      </Dialog.Title>
                      <Dialog.Title
                        as="h5"
                        className="text-base font-light lg:text-base mx-10 text-slate-400"
                      >
                        Código de la propiedad 402
                      </Dialog.Title>
                  </div>
                  <div className="mt-2">
                    <ImageGallery
                      autoPlay={true}
                      slideDuration={500}
                      slideInterval={3000}
                      infinite={true}
                      showNav={true}
                      showPlayButton={false}
                      showFullscreenButton={false}
                      showBullets={false}
                      showThumbnails={true}
                      thumbnailPosition="bottom"
                      items={images}
                    />

                    <div className="flex flex-col p-5 mt-5 md:xl:mt-24 lg:xl:mt-24 xl:mt-24">
                      <h1 className='text-lg font-bold'>Características</h1>

                      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-1">
                          <span className="text-gray-400 mr-1">
                            <RiPencilRulerLine className='xl:w-[38px]'/>
                          </span>
                          Superficie útil: 100m<sup>2</sup> útiles
                        </div>

                        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-2">
                          <span className="text-gray-400 mr-1">
                            <FaBath className='xl:w-[38px]'/>
                          </span>
                          Baños: 1
                        </div>

                        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-6 lg:order-3">
                          <span className="text-gray-400 mr-1">
                            <BsFillCalendarCheckFill className='xl:w-[38px]'/>
                          </span>
                          Fecha de entrega: {'Pendiente'}
                        </div>

                        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-4">
                          <span className="text-gray-400 mr-1">
                            <FaBed className='xl:w-[38px]'/>
                          </span>
                          Dormitorios: 3
                        </div>

                        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-5">
                          <span className="text-gray-400 mr-1">
                            <GiHomeGarage className='xl:w-[38px]' />
                          </span>
                          Estacionamientos: 0
                        </div>

                        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-6">
                          <span className="text-gray-400 mr-1">
                            <BsCheckCircle className='xl:w-[38px]' />
                          </span>
                          Estado del proyecto: Activa
                        </div>

                      </div>

                      <div className="my-7">
                        <h5 className="text-lg font-bold">Descripción</h5>
                        <p className="text-gray-600 mt-2">
                          Casa, 3 Dormitorios, 1 Baños, Superficie terreno 121 metros, Superficie construida 100 metros, 4 Orientación
                        </p>
                        <br />
                        <p className="text-gray-600">
                          3 Total dormitorios, Total de baños 1 Los textos literarios son composiciones que persiguen un fin estético. Se trata de la creación de mundos a través del lenguaje, en los que prima la subjetividad, ya sea la expresión de sentimientos, compartir un punto de vista, hacer un retrato social, aludir a la memoria, a la identidad de los pueblos o a una cultura
                        </p>
                      </div>
                    </div>

                    <div className="sm:col-span-6 col-span-3 xl:col-span-1 bg-white h-auto order-1 xl:order-2">
                      <div className="border rounded-sm p-4 xl:p-8">
                        <h3 className="border-b pb-1 text-gray-800 text-xl font-bold">Empresa Empresa</h3>
                        <p className="text-sm text-gray-400 my-2">
                          Publicado por:{' '}
                          <span className="text-gray-800">
                            Company
                          </span>
                        </p>

                        <div className="text-sm text-gray-400 my-3">
                          <p className="text-gray-400">Desde</p>
                              <>
                                <h4 className="text-xl text-gray-700 font-semibold">
                                  UF 29.000
                                </h4>
                                <p>
                                  CLP:{' '}
                                  6.252.545.255
                                </p>
                              </>
                        </div>

                        <div className="my-5 text-sm text-gray-400">
                          <p className="flex items-center my-1 text-sm ">
                          Tipo de inmueble:
                            <span className="text-gray-800 mr-1 text-base font-normal pl-1">
                            Casa
                            </span> 
                          </p>

                          <p className="flex items-center my-1 text-sm ">
                            Tipo de operacion :
                            <span className="text-gray-800 mr-1 text-base font-normal pl-1">
                            Venta
                            </span> 
                          </p>

                          {/* <div className="flex items-center my-1">
                            <span className="text-gray-400 mr-1">
                              <FaBath />
                            </span>
                            {bathrooms ?? 0} baños
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
