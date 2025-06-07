import React from "react";
import Learn from "./Learn";
import Services from "./Services";
import WhatsAppButton from "../component/WhatsAppButton";
const Home = () => {
  return (
    <>
      <section data-aos="fade-up">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl  :text-white">
              પગાર છે… પણ યોજના નથી? <br /> Let's Fix That, Together!
            </h1>
            <p className="max-w-2xl mb-6 font-light  text-white lg:mb-8 md:text-lg lg:text-xl  :text-gray-400">
              Earn. Save. Invest. Grow. — Simple, Gujarati-friendly personal
              finance guidance with our team and support
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <WhatsAppButton />
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
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
