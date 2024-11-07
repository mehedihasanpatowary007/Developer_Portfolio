import Aos from "aos";

Aos.init()
const Contacts = () => {
    return (
      <div id="contacts" className="md:py-16 py-8">
        <div className="md:container mx-auto px-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
              Contacts
            </div>
            <div className="text-white md:text-5xl text-3xl font-bold text-center">
              Contact Me
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between lg:gap-16 gap-8 mt-10">
            <div
              className="space-y-5 aos-init aos-animate md:w-[50%]"
              data-aos="zoom-in-up"
            >
              <h2 className="text-transparent bg-gradient-to-r from-orange-600 to-[#ffac04] bg-clip-text text-4xl lg:text-5xl font-bold">
                Let&apos;s Talk
              </h2>
              <p className="text-gray-300 text-base text-justify">
                I&apos;m currently available to take on new projects, so feel
                free to send ma a message about anything that you want me to
                work on. You can contact anytime.
              </p>
              <div className="flex flex-row gap-x-4 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-2xl text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
                <h3 className="text-base text-gray-200 font-medium font-popins">
                  hasanmdrifat77@gmail.com
                </h3>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-2xl text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                </svg>
                <h3 className="text-base text-gray-200 font-medium font-popins">
                  +8801872993738
                </h3>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 384 512"
                  className="text-2xl text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <h3 className="text-base text-gray-200 font-medium font-popins">
                  kachua, Chandpur, Bangladesh
                </h3>
              </div>
            </div>
            <form
              data-aos="zoom-in-up"
              className="space-y-5 aos-init md:w-[50%]"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="shadow-sm border-2 outline-none focus:border-gray-400 text-sm rounded-lg block w-full p-2.5 bg-white/20 border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
                  placeholder="anonymous"
                  required=""
                  name="name"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm border-2 outline-none focus:border-gray-400 text-sm rounded-lg block w-full p-2.5 bg-white/20 border-gray-600 placeholder-gray-400 text-white  shadow-sm-light"
                    placeholder="example@gmail.com"
                    required=""
                    name="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="shadow-sm border-2 outline-none focus:border-gray-400 text-sm rounded-lg block p-2.5 w-full bg-white/20 border-gray-600 placeholder-gray-400 text-white  shadow-sm-light"
                    placeholder="018XXXXXXXX"
                    required=""
                    name="phone"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border-2 outline-none focus:border-gray-400 bg-white/20 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Leave a message..."
                  required=""
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-[#ffac04] py-2 text-white text-xl border-0 outline-0 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contacts;