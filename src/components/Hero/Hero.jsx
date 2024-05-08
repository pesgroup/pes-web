import React from "react";
import video from "/src/assets/herovid1.MP4";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center align-middle">
      <div className="absolute w-full h-full overflow-hidden">
        <video
          className="object-cover w-full h-screen"
          autoPlay
          loop
          playsinline
        >
          <source src={video} type="video/MP4" preload="auto" />
        </video>
      </div>

      <div className="absolute z-10 font-worksans flex-col justify-center lg:flex md:m-12 mt-12">
        <h1 className="text-white text-4xl md:text-5xl flex text-left p-8">
          Pacific Environmental Solutions
        </h1>
        <div className="text-white bg-gray-700 bg-opacity-40 p-4 md:p-8 rounded-xl m-8 text-left mt-4 md:mt-0">
          <h1
            // data-aos="fade-up"
            className="text-lg text-white"
            style={{ lineHeight: 1.2 }}
          >
            We combine innovation, sustainability and cultural respect to{" "}
            <span className="text-yellow-200 font-semibold">
              address regional environmental challenges.
            </span>
          </h1>
          <hr className="mt-4 h-0.5 border-t-0 bg-gray-400 opacity-50" />
          <p className="pt-4 text-sm text-left">
            With our unwavering commitment to innovation, sustainability, and
            community engagement, we continuously strive to develop cutting-edge
            solutions that address the unique ecological challenges facing the
            South Pacific.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
