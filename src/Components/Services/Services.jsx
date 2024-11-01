import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  const loadServices = async () => {
    const response = await fetch("http://localhost:3000/services");
    const data = await response.json();
    setServices(data);
  };
  useEffect(() => {
    loadServices();
  }, []);
  return (
    <div id="services" className="mt-32">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
          Services
        </div>
        <div className="text-white text-5xl font-bold">My Quality Services</div>
      </div>
      <div className="flex gap-5 mt-20">
        {services.map((service) => {
          return <SingleService key={service.name} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
