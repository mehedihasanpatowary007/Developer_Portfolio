import { useEffect, useState } from "react";
import SingleService from "./SingleService";
import Aos from "aos";
Aos.init()

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
    <div data-aos="fade-up" id="services" className="py-32 bg-[#180c14]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
            Services
          </div>
          <div className="text-white md:text-5xl text-3xl font-bold">
            My Quality Services
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
          {services.map((service) => {
            return <SingleService key={service.name} service={service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
