import React from "react";
import video from "/src/assets/herovid1.MP4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute">
        <video className="object-cover w-full h-screen" autoPlay loop>
          <source src={video} type="video/MP4" preload="auto" />
        </video>
      </div>
      <div
        className="flex flex-col justify-center items-center align-middle font-worksans md:p-48"
        data-aos="fade-up"
      >
        <div className="flex">
          {/* <h1 className="text-white md:text-5xl text-4xl text-left font-normal">
            Pacific Environmental Solutions
          </h1> */}
        </div>
        <div className="flex justify-center">
          <div className="text-gray-100 bg-gray-800 bg-opacity-60 p-6 rounded-md text-left leading-5 md:w-[400px] mt-4">
             <h1 className="text-yellow-300 md:text-5xl text-5xl text-left font-medium my-2">
            Pacific Environmental Solutions
          </h1>
            <h2 className="text-lg text-white">
              We combine innovation, sustainability and cultural respect to{" "}
              <span className="text-yellow-300 font-medium">
                address regional environmental challenges.
              </span>
            </h2>
            <hr className="my-2 h-0.5 border-t-0 bg-gray-400" />
            <p className="text-sm text-justify">
              With our unwavering commitment to innovation, sustainability, and
              community engagement, we continuously strive to develop
              cutting-edge solutions that address the unique ecological
              challenges facing the South Pacific.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
