import React from "react";
import Learn from "./Learn";
import Services from "./Services";
import learn from "../assets/learn.pdf";
const Home = () => {
  return (
    <>
      <section class="bg-white  :bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl  :text-white">
              પગાર છે… પણ યોજના નથી? <br /> Let's Fix That, Together!
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  :text-gray-400">
              Earn. Save. Invest. Grow. — Simple, Gujarati-friendly personal
              finance guidance with our team and support
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                download
                href={learn}
                className={` h-[30%] llap:h-[60%] w- flex items-end justify-center `}
              >
                <button className="relative animate__animated  animate__tada z-10 inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-xs sm:text-sm md:text-base lg:text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-700 group-hover:to-blue-600 hover:text-white  :text-white focus:ring-4 focus:outline-none focus:ring-blue-300  :focus:ring-blue-800">
                  <span className="relative px-4 py-2 text-xs sm:text-sm md:text-base lg:text-base transition-all ease-in duration-75 bg-white  :bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Download PDF
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://demo.themesberg.com/landwind/images/hero.png"
              alt="hero image"
            />
          </div>
        </div>
      </section>
      <Learn />
      <Services />
    </>
  );
};

export default Home;
