import { useEffect } from "react";
import { useState } from "react";
import SingleEducation from "./SingleEducation";

const Expertise = () => {
  const [educations, setEducation] = useState([]);

  const loadExpertise = async () => {
    const response = await fetch("http://localhost:3000/educations");
    const data = await response.json();
    setEducation(data);
  };

  useEffect(() => {
    loadExpertise();
  }, []);

  return (
    <div className="lg:w-[48%] w-full">
      <h1 className="text-3xl lg:text-4xl font-semibold text-white">
        Education Background
      </h1>
      <div className="mt-10 flex gap-6">
        <div className="relative w-[6px] bg-white h-auto">
          <div className="absolute top-10 left-[50%] translate-x-[-50%] size-8 rounded-full border-[8px] border-black bg-gradient-to-l to-orange-600 from-[#ffac04]"></div>
          <div className="absolute top-[37%] left-[50%] translate-x-[-50%] size-8 rounded-full border-[8px] border-black bg-gradient-to-l to-orange-600 from-[#ffac04]"></div>
          <div className="absolute top-[73%] left-[50%] translate-x-[-50%] size-8 rounded-full border-[8px] border-black bg-gradient-to-l to-orange-600 from-[#ffac04]"></div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {educations.map((education) => {
            return (
              <SingleEducation key={education?.name} education={education} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
