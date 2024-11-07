import Education from "../Education/Education";
import Expertise from "../MyExpertise/Expertise";

const ExpertAndEducation = () => {
    return (
        <div id="resume" className="md:container mx-auto px-3 py-32 flex justify-between lg:flex-row flex-col gap-10">
            <Expertise/>
            <Education/>
        </div>
    );
};

export default ExpertAndEducation;