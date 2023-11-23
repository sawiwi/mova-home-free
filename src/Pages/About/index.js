import React from "react";

const About = () =>{
    return(
        <section className="max-w-[1200px] mx-auto p-10" id="aboutMe">
            <div className="">
                <h1 className="font-semibold text-2xl mb-2">Sobre mí</h1>
                    <hr className=" mb-2 w-20 text-primary-default h-[2.5px] border-none bg-primary-default"></hr>
                    <hr className="w-12 text-primary-default h-[3px] border-none bg-primary-default"></hr>
            </div>
            <div className="grid grid-cols-3">
                <div className="grid col-span-1">
                <img
                    src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
                    alt="about-img"
                    className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[210px] xl:h-[210px] xl:mt-28 xl:mx-14"
                    />
                </div>
                <div className="grid col-span-1">
                    <p className="xl:mt-20 ">Somos un equipo comprometido con el crecimiento de nuestros asociados, con quienes trabajamos de forma colaborativa, adaptándonos permanentemente a sus exigencias y a los cambios del mercado inmobiliario.</p>
                    <br/>
                    <p className="">En Movahome nos preocupamos por ofrecer un servicio cercano e integral a nuestros clientes y creemos en la sinergia entre personas que comparten un mismo fin, cuya base, es construida sobre la confianza, las buenas prácticas y la transparencia.</p>
                </div>
                <div className="grid col-span-1">
                    <h1>Hello there 3</h1>
                </div>
            </div>
        </section>
    )

}

export default About;