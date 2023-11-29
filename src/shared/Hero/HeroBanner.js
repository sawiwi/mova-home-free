import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { Link } from "react-scroll";

import { ImgCarousel } from "../../data/Carousel";

const HeroBanner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return(
          <div className="col-span-2 md:mx-44 xl:mx-0 xl:col-span-1 flex flex-col xl:h-[40%]">
              <AutoplaySlider
                  bullets={false}
                  mobileTouch={true}
                  // organicArrows={false}
                  // infinite={true}
                  startupScreen={3000}
                  // startup={true}
                  // transitionDelay={1000}
                  play={true}
                  cancelOnInteraction={false} 
                  interval={6000}
                  className="object-cover h-[495px] xl:h-[700px]"
                > 
                        {ImgCarousel?.length  > 0 ?  
                            ImgCarousel.map((item) =>
                            <div key={item.id}>
                              <img
                                src={item.img}
                                alt="slide-1"
                                // className="rounded-full h-[260px] w-[100%] mt-10 object-[center-center] object-cover  md:mx-2 xl:w-full xl:h-full xl:mt-1 xl:mx-2 "
                                className='object-cover h-[495px] md:h-full  xl:w-full xl:h-full'
                              />
                               <div className="absolute top-0 left-0 w-full lg:w-[840px] xl:w-[730px] h-full bg-gray-900/60 ">
                                <div className="grid grid-cols-1">
                                  <div className="col-span-1 text-center">
                                  <img
                                    src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
                                    alt="about-img"
                                    className="rounded-full  h-[150px] w-[150px] mt-16 mx-auto md:mx-2 xl:w-[250px] xl:h-[250px] xl:mt-32 xl:mx-[290px]"
                                    />
                                    <h1 className="text-[#f3f3f3] font-bold text-lg xl:text-2xl mt-2  xl:mt-8 xl:ml-20 drop-shadow-md">Maria Ojeda Silvestre.</h1>
                                    <br></br>
                                    <Link  to="AboutSectionScroll" smooth="true" duration={200} offset={-150}
                                      className="drop-shadow-md bg-[#ff8017]/60 rounded-md border border-[#ff8017] text-white px-6 py-2  w-32 hover:bg-[#ff8017] cursor-pointer"
                                      >
                                        <span  pan className=" text-lg font-medium capitalize mx-auto max-h-10">
                                          Ver más
                                        </span>                                 
                                    </Link>
                                  </div>
                         
                                </div>
                               </div>
                            </div>
                        ) : null}
                </AutoplaySlider>
          </div>
    )

}


export default HeroBanner;