import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import ButtonClose from '../buttons/ButtonClose'
import ImageGallery from 'react-image-gallery';
import { iconsList } from '../../icons';
import {
  parseToCLPCurrency,
  parseToDecimal,
  ufToClp,
  clpToUf2
} from '../../utils'
import PropertiesServices from '../../services/properties/PropertiesServices';
import { company } from '../../constants/company';

const Modal = ({item, valueUf}) => {
  let [isOpen, setIsOpen] = useState(false);
  const [propertyId, setPropertyId]= useState("")

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

  const _renderItem = (name,code,price) => {
    let ufValue = price;
    let clpValue = price;

    let valueIntUF = valueUf.Valor.replace(/\./g, '').replace(',', '.');

    if (name === 'UF' && code === 'UF'){
      clpValue = ufToClp(price,valueIntUF);
    }
    if (name === 'Peso Chileno' && code === 'CLP'){
      ufValue = clpToUf2(price,valueIntUF);
    }

    return (
      <>
        <h4 className="text-xl text-gray-700 font-semibold">
          UF: {parseToDecimal(ufValue)}
        </h4>
        <p>
          CLP: {parseToCLPCurrency(clpValue)}
        </p>
      </>
    )
  };

  const getPropertyForId= async (id, statusId, companyId)=>{
    const data= await PropertiesServices.getProperty(id, statusId, companyId);
    setPropertyId(data);
  }
  useEffect(()=>{
    getPropertyForId(item.id, 1, company.companyId)
  }, [item.id])
  const getImages = () =>
  propertyId?.images
      ? propertyId?.images?.map((_, idx) => ({
          original: `https://accion.panal.house//Imagenes//${
            propertyId?.id
          }//${idx + 1}.jpg`,
          thumbnail: `https://accion.panal.house//Imagenes//${
            propertyId?.id
          }//${idx + 1}.jpg`,
        }))
      : [];



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
                        Código de la propiedad {item.id}
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
                      items={getImages()}
                    />

                    <div className='flex flex-col md:flex-row'>
                      
                      <div className='w-full md:w-3/4 p-4 xl:p-8'>
                        <div className="">
                          <h5 className="text-lg font-bold">Título</h5>
                          <p className="text-gray-600 mt-2">
                          {item?.title}
                          </p>
                        </div>
                        <div className="my-7">
                          <h5 className="text-lg font-bold">Descripción</h5>
                          <p className="text-gray-600 mt-2">
                          {item?.description}
                          </p>
                        </div>
                        <h1 className='text-lg font-bold'>Características</h1>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2'>
                          <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-1">
                            <span className="text-primary-default mr-1">
                              <RiPencilRulerLine className='xl:w-[38px]'/>
                            </span>
                            Superficie útil: {item?.surface_m2}m<sup>2</sup> útiles
                          </div>

                          <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-2">
                            <span className="text-primary-default mr-1">
                              <FaBath className='xl:w-[38px]'/>
                            </span>
                            Baños: {item?.bathrooms}
                          </div>

                          <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-6 lg:order-3">
                            <span className="text-primary-default mr-1">
                              <BsFillCalendarCheckFill className='xl:w-[38px]'/>
                            </span>
                            Fecha de entrega: {'Pendiente'}
                          </div>

                          <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-4">
                            <span className="text-primary-default mr-1">
                              <FaBed className='xl:w-[38px]'/>
                            </span>
                            Dormitorios: {item?.bedrooms}
                          </div>

                          <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-5">
                            <span className="text-primary-default mr-1">
                              <GiHomeGarage className='xl:w-[38px]' />
                            </span>
                            Estacionamientos: {item?.coveredParkingLots}
                          </div>

                          <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-6">
                            <span className="text-primary-default mr-1">
                              <BsCheckCircle className='xl:w-[38px]' />
                            </span>
                            Estado del proyecto: Activa
                          </div>

                        </div>
                      </div>
                      <div className="bg-white h-auto w-full md:w-1/4">
                        <div className="border rounded-sm p-4 xl:p-8 h-full">
                          <h3 className="border-b pb-1 text-gray-800 text-xl font-bold">Empresa: {item?.company}</h3>
                          <p className="text-sm text-gray-400 my-2">
                            Publicado por:{' '}
                            <span className="text-gray-800">
                              {item?.realtor?.name}
                            </span>
                          </p>

                          <div className="text-sm text-gray-400 my-3">
                            <p className="text-gray-400">Desde</p>
                            {_renderItem(item?.currency?.name, item?.currency?.isoCode, item.price)}
                          </div>

                          <div className="my-5 text-sm text-gray-400">
                            <p className="flex items-center my-1 text-sm ">
                            Tipo de inmueble:
                              <span className="text-gray-800 mr-1 text-base font-normal pl-1">
                              {item?.types[0]}
                              </span> 
                            </p>

                            <p className="flex items-center my-1 text-sm ">
                              Tipo de operacion :
                              <span className="text-gray-800 mr-1 text-base font-normal pl-1">
                              {item?.operation}
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
