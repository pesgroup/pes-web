import React from "react";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ChargingStationIcon from "@mui/icons-material/ChargingStation";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import WindPowerIcon from "@mui/icons-material/WindPower";

const ServicesData = [
  {
    name: "Solar PV Systems",
    icon: <SolarPowerIcon sx={{ fontSize: [96] }} className="text-gray-400" />,
    link: "#",
    aosDelay: "0",
  },
  {
    name: "Waste-to-Energy",
    icon: (
      <ChargingStationIcon sx={{ fontSize: [96] }} className="text-gray-400" />
    ),
    link: "#",
    aosDelay: "300",
  },
  {
    name: "Water Desalination",
    icon: <LocalDrinkIcon sx={{ fontSize: [96] }} className="text-gray-400" />,
    link: "#",
    aosDelay: "500",
  },
  {
    name: "Wind Energy",
    icon: <WindPowerIcon sx={{ fontSize: [96] }} className="text-gray-400" />,
    link: "#",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div>
      <span id="services"></span>
      <div className="bg-gray-100 py-12 px-8 md:px-12 sm:grid sm:justify-items-center font-worksans text-gray-500">
        <div className="container">
          {/* HEADER */}
          <div className="pb-12 text-center space-y-2">
            <h1 data-aos="fade-up" className="text-3xl sm:text-3xl text-left">
              Our Services
            </h1>
            <p data-aos="fade-up" className="text-sm text-justify py-2">
              Pacific Environmental Solutions (PES) is at the forefront of
              revolutionizing waste management into sustainable energy solutions
              across the South Pacific. With our patent-pending Waste-to-Energy
              (WTE) technology, meticulously tailored for regional demands, we
              lead with innovation and environmental responsibility. Our mission
              is to seamlessly integrate human development with the fragile
              ecosystems of the South Pacific, envisioning a future where waste
              fuels prosperity while preserving the environment for posterity.
            </p>
            <hr className="mt-4 h-0.5 border-t-0 bg-gray-300 opacity-50" />
          </div>

          {/* SERVICES CARD */}
          <div className="grid grid-cols-2 xl:grid-cols-4 justify-items-center text-gray-500">
            {ServicesData.map((service) => (
              <div className="flex justify-center">
                <div
                  key={service.name}
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  className="flex sm:space-y-4 "
                >
                  <div>
                    <div className="flex justify-center p-8">
                      {service.icon}
                    </div>
                    <h1 className="text-sm flex justify-center">
                      {service.name}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
