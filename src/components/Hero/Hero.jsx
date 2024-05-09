import React from "react";
import video from "/src/assets/herovid1.MP4";

const Hero = () => {
  return (
    <section className="relative h-screen align-middle">
      <div className="absolute w-full h-full overlfow-hidden">
        <video className="object-cover w-full h-screen" autoPlay loop>
          <source src={video} type="video/MP4" preload="auto" />
        </video>
      </div>
      <div
        className="z-10 flex flex-col justify-center items-center align-middle font-worksans"
        data-aos="fade-up"
      >
        <div className="relative z-10 flex mt-12 md:mt-24">
          <div className="text-gray-100 bg-gray-800 bg-opacity-60 p-8 rounded-md text-left leading-5 md:w-[350px] mt-4">
            <h1 className="text-yellow-300  text-4xl text-left font-medium my-2">
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
