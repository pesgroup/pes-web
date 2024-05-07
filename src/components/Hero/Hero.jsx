import React from "react";
import video from "/src/assets/herovid0.WEBM";

const Hero = () => {
  return (
    <div>
      <div className="absolute z-10 md:max-w-[1480px] grid md:grid-cols-1 max-w-[600px] justify-items-center">
        <div className="min-h-[250px] flex mt-4 sm:mt-0">
          <div className="gap-6">
            {/* Text section */}
            <div className="space-y-5 md:flex font-worksans flex justify-center flex-col">
              <div>
                <h1 className="text-white text-4xl p-12 flex justify-center">
                  Pacific Environmental Solutions 
                </h1>
              </div>

              <div className="text-white bg-gray-700 bg-opacity-40 p-8 rounded-xl m-8">
                <h1
                  // data-aos="fade-up"
                  className="text-2xl md:text-4xl text-white "
                  style={{ lineHeight: 1.2 }}
                >
                  We combine innovation, sustainability and cultural respect to{" "}
                  <span className="text-yellow-200 font-semibold">
                    address regional environmental challenges.
                  </span>
                </h1>
                <hr className="mt-4 h-0.5 border-t-0 bg-gray-400 opacity-50" />
                <p className="pt-8 text-justify">
                  With our unwavering commitment to innovation, sustainability,
                  and community engagement, we continuously strive to develop
                  cutting-edge solutions that address the unique ecological
                  challenges facing the South Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <video className="object-cover w-full h-screen" autoPlay loop playsInline>
          <source src={video} type="video/webm" preload="auto"/>
        </video>
      </div>
    </div>
  );
};

export default Hero;
