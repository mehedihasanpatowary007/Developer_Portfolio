import { useEffect } from "react";
import { useState } from "react";
import SingleExpertise from "./SingleExpertise";

const Expertise = () => {
  const [expertises, setExpertises] = useState([])

  const loadExpertise = async ()=>{
    const response = await fetch("http://localhost:3000/expertise");
    const data = await response.json()
    setExpertises(data)
  }

  useEffect(()=> {
    loadExpertise()
  }, [])

    return (
      <div className="lg:w-[48%] w-full">
        <h1 className="text-3xl lg:text-4xl font-semibold text-white">
          My Expertise
        </h1>
        <div className="mt-10 flex gap-6">
          <div className="relative w-[6px] bg-white h-auto">
            <div className="absolute top-10 left-[50%] translate-x-[-50%] size-8 rounded-full border-[8px] border-black bg-gradient-to-l to-orange-600 from-[#ffac04]"></div>
            <div className="absolute top-[37%] left-[50%] translate-x-[-50%] size-8 rounded-full border-[8px] border-black bg-gradient-to-l to-orange-600 from-[#ffac04]"></div>
            <div className="absolute top-[73%] left-[50%] translate-x-[-50%] size-8 rounded-full border-[8px] border-black bg-gradient-to-l to-orange-600 from-[#ffac04]"></div>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {expertises.map((expertise) => {
              return (
                <SingleExpertise key={expertise?.name} expertise={expertise} />
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default Expertise;