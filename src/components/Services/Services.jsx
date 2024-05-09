import React from "react";

// ICON IMPORTS
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ChargingStationIcon from "@mui/icons-material/ChargingStation";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import WindPowerIcon from "@mui/icons-material/WindPower";

const ServicesData = [
  {
    name: "Solar PV Systems",
    icon: <SolarPowerIcon sx={{ fontSize: [96] }} />,
    link: "#",
    aosDelay: "0",
  },
  {
    name: "Waste-to-Energy",
    icon: <ChargingStationIcon sx={{ fontSize: [96] }} />,
    link: "#",
    aosDelay: "300",
  },
  {
    name: "Water Desalination",
    icon: <LocalDrinkIcon sx={{ fontSize: [96] }} />,
    link: "#",
    aosDelay: "500",
  },
  {
    name: "Wind Energy",
    icon: <WindPowerIcon sx={{ fontSize: [96] }} />,
    link: "#",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <section>
      <div className="bg-gray-100 py-12 px-8 md:px-12 font-worksans flex">
        <div>
          {/* HEADER */}
          <div className="flex border-l-8 border-blue-300/50 py-2 pl-2 text-3xl">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-3xl text-left text-gray-600"
            >
              Our Services
            </h1>
          </div>
          <div>
            <p
              data-aos="fade-up"
              className="text-sm text-justify py-2 text-gray-500"
            >
              Pacific Environmental Solutions (PES) is at the forefront of
              revolutionizing waste management into sustainable energy solutions
              across the South Pacific. With our patent-pending Waste-to-Energy
              (WTE) technology, meticulously tailored for regional demands, we
              lead with innovation and environmental responsibility. Our mission
              is to seamlessly integrate human development with the fragile
              ecosystems of the South Pacific, envisioning a future where waste
              fuels prosperity while preserving the environment for posterity.
            </p>
            <hr className="mt-4 h-1 border-t-0 bg-gray-300 opacity-50" />
          </div>

          {/* SERVICES CARD */}
          <div className="md:flex md:m-8 grid grid-cols-2 xl:grid-cols-4 justify-center">
            {ServicesData.map((service) => (
              <div>
                <div
                  key={service.name}
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  className="flex sm:space-y-4 mx-8"
                >
                  <div>
                    <div className="flex justify-center pt-4 text-gray-300">
                      {service.icon}
                    </div>
                    <h1 className="text-sm flex justify-center font-normal">
                      {service.name}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
