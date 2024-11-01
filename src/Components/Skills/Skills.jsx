import { useEffect, useState } from "react";
import SingleSkill from "./SingleSkill";

const Skills = () => {
    const [skills, setSkills] = useState([])
    const loadSkills = async () => {
        const response = await fetch("http://localhost:3000/skills");
        const data = await response.json()
        setSkills(data)
    }
    useEffect(()=>{
        loadSkills()
    },[])
    return (
      <div className="bg-[#180c14] py-32">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
              Top Skills
            </div>
            <div className="text-white md:text-5xl text-3xl font-bold text-center">
              See My Expertise
            </div>
          </div>
          <div className="md:h-[500px] w-full flex flex-wrap justify-center items-end lg:gap-5 md:gap-2 gap-2 mt-6">
            {skills.map((skill)=>{
                return(
                    <SingleSkill key={skill.name} skill={skill}/>
                )
            })}
          </div>
        </div>
      </div>
    );
};

export default Skills;