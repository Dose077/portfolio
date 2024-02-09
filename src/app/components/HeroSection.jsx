'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import dev from "../../../public/img/dev.jpg";


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
         className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">Hello I`m {''}</span>
          <br />
          <TypeAnimation
      sequence={[
        'Doston',
         1500, 
        'Web Developer',
        1500,
        'Frontend Developer',
        1500,
        'JavaScript Developer',
        1500
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            dignissimos expedita inventore impedit adipisci,
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-blue-400  to-blue-900 rounded-full mr-4 bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit bg-gradient-to-br  from-blue-500 via-blue-400  to-blue-900  rounded-full bg-transparent hover:bg-slate-800 text-white  mt-3 ">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full  px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={dev}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
        </div>
    </section>
  );
};

export default HeroSection;
