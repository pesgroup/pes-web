import React from "react";
import LocationsCard from "./LocationsCard";

const LocationsData = [
  {
    id: 0,
    branch: "PES Samoa Office",
    address: "Apaula Heights",
    city: "Apia",
    country: "Samoa",
    phone: "+685 767-3000",
  },
  {
    id: 1,
    branch: "PES Solomon Islands Office",
    address: "Kukum Highway",
    city: "Honiara",
    country: "Solomon Islands",
    phone: "+677 777-3465",
  },
  {
    id: 2,
    branch: "PES Tonga Office",
    address: "Nukunuku",
    city: "Nuku'alofa",
    country: "Tonga",
    phone: "+676 777-0200",
  },
];

const LocationsComp = () => {
  return (
    <section className="bg-gray-100 text-gray-600 p-8 md:px-12 font-worksans flex">
      <div>
        {/* HEADING */}
        <div className="border-l-8 border-blue-300/50 py-2 pl-2">
          <h1 data-aos="fade-up" className="text-3xl">
            Our Locations
          </h1>
        </div>

        <div className="pt-4 text-gray-500 flex align-middle md:justify-start">
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-500 text-sm justify-center"
          >
            {LocationsData.map((item) => (
              <LocationsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsComp;
