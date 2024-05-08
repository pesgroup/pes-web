import React from "react";
import LocationsCard from "./LocationsCard";

const LocationsData = [
  {
    id: 1,
    branch: "PES Samoa Office",
    address: "Apaula Heights",
    city: "Apia",
    country: "Samoa",
    phone: "+685 767-3000",
  },
  {
    id: 2,
    branch: "PES Solomon Islands Office",
    address: "Kukum Highway",
    city: "Honiara",
    country: "Solomon Islands",
    phone: "+677 777-3465",
  },
  {
    id: 3,
    branch: "PES Tonga Office",
    address: "Nukunuku",
    city: "Nuku'alofa",
    country: "Tonga",
    phone: "+676 777-0200",
  },
];

const LocationsComp = () => {
  return (
    <>
      <div className="bg-gray-100 text-gray-500 pt-6">
        <section data-aos="fade-up" className="container font-worksans">
          <div>
            <h1 className="m-8 border-l-8 border-blue-300/50 py-2 pl-2 text-3xl">
              Our Locations
            </h1>
          </div>
          <div className="pt-12 text-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500 text-sm">
              {LocationsData.map((item) => (
                <LocationsCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocationsComp;
