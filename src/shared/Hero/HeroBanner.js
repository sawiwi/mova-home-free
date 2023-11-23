import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


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
                  className="object-cover h-[245px] xl:h-[700px]"
                >
                        {ImgCarousel?.length  > 0 ?  
                            ImgCarousel.map((item) =>
                            <div key={item.id}>
                              <img
                                src={item.img}
                                alt="slide-1"
                                // className="rounded-full h-[260px] w-[100%] mt-10 object-[center-center] object-cover  md:mx-2 xl:w-full xl:h-full xl:mt-1 xl:mx-2 "
                                className='object-scale-down xl:w-full xl:h-full'
                              />
                            </div>
                        ) : null}
                </AutoplaySlider>
          </div>
    )

}


export default HeroBanner;