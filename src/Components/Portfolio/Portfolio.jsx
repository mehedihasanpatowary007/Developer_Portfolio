
const Portfolio = () => {
    return (
      <div className="my-32 container" id="portfolio">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
            Portfolio
          </div>
          <div className="text-white md:text-5xl text-3xl font-bold text-center">
            My Recent Work
          </div>
        </div>
      </div>
    );
};

export default Portfolio;