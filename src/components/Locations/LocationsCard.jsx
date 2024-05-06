import React from "react";

const LocationsCard = ({ branch, address, city, country, phone }) => {
  return (
    <>
      <div className="">
        {/* <div className="overflow-hidden">
          <img className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300" />
        </div> */}
        <div className="space-y-2 p-6 ml-6 bg-white -translate-y-16 rounded-xl">
          <h1 className="line-clamp-1 text-gray-700 text-2xl ">{branch}</h1>
          <p className="line-clamp-4 text-gray-700 text-sm">{address}</p>
          <p className="line-clamp-4 text-gray-700 text-sm">{city}</p>
          <p className="line-clamp-4 text-gray-700 text-sm">{country}</p>
          <p className="line-clamp-4 text-gray-700 text-sm">{phone}</p>
        </div>
      </div>
    </>
  );
};

export default LocationsCard;
