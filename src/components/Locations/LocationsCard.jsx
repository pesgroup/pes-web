import React from "react";

const LocationsCard = ({ branch, address, city, country, phone }) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <h1 className="text-gray-700 text-md">{branch}</h1>
      <p className="text-gray-700 text-xs">{address}</p>
      <p className="text-gray-700 text-xs">{city}</p>
      <p className="text-gray-700 text-xs">{country}</p>
      <p className="text-gray-700 text-xs">{phone}</p>
    </div>
  );
};

export default LocationsCard;
