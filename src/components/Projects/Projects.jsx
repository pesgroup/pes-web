import React from "react";
import Slider from "react-slick";
import HoniaraMap from "/src/assets/honiaramap.PNG";
import SogMap from "/src/assets/sogmap.PNG";

const projectData = [
  {
    id: 1,
    heading: "Honiara Properties Integrated Renewable Energy Project",
    subheading: "Pacific Crown Hotel: Project 1",
    text: "The Pacific Casino Honiara Properties are located in the capital city of Solomon Islands, Honiara. The properties span approximately 0.6 kilometers along the ocean side of Kukum Highway. Facing north towards the ocean, while Kukum Highway runs east to west. Currently, the properties are serviced by Solomon Power and have three 500KW primary generators on-site to address power shortages. Our project goal is to achieve full energy self-sufficiency by integrating solar PV and wind power, implementing a zero-waste facility with waste-to-energy (WTE) capabilities, and meeting 100% of our water needs through a desalination plant. To ensure reliability, the system will be backed up by a 3MW saltwater flow battery system, with any excess energy generated being sold back to Solomon Power.",
    img: HoniaraMap,
  },
  {
    id: 1,
    heading:
      "Soghonangola Island Properties Integrated Renewable Energy Project",
    subheading: "Pacific Crown Hotel: Project 2",
    text: "The Pacific Casino Soghonangola Island Properties is located off Nggela Sule Island North off the coast of the City of Honiara. The properties operates a boutique hotel, casino and resort area for day trips and overnight guests. Our goal is to provide 100% of the energy required to operate with integrate solar PV, Wind, Zero Waste facility with WTE, 100% of the water with a desalination plant. The system will be backed up with a 3Mw Salt Water Flow battery system with excess energy being sold back to Solomon Power.",
    img: SogMap,
  },
];

const Projects = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <section>
      <div className="m-8 font-worksans bg-white">
        {/* PROJECT SECTION */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
        >
          <Slider {...settings}>
            {projectData.map(({ id, heading, subheading, text, img }) => {
              return (
                <div key={id}>
                  {/* card */}
                  <div className="flex flex-col gap-5 md:gap-14 p-4 mx-4 rounded-xl relative">
                    <img src={img} alt="project-image" className="rounded-md" />
                    <div className="space-y-4">
                      <h1 className="text-xl text-gray-600">{heading}</h1>
                      <h2 className="font-semibold text-gray-500">
                        {subheading}
                      </h2>
                      <p className="text-gray-500 text-justify text-sm">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
