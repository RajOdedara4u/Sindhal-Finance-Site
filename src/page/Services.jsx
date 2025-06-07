import React from "react";

const Services = () => {
  return (
    <>
      <section data-aos="fade-up">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-10 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="https://demo.themesberg.com/landwind/images/feature-2.png"
              alt="feature image 2"
            />
            <div className=" text-white sm:text-lg  :text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight  text-white  :text-white">
                Personalized guidance without the noise
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                No product pushing—just clear, honest advice built around your
                income and lifestyle. Get custom plans, actionable insights, and
                financial clarity without overwhelm.
              </p>

              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7  :border-gray-700"
              >
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5  text-white  :text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight  text-white  :text-white">
                    Personal money plans
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5  text-white  :text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight  text-white  :text-white">
                    EMI & savings balance
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5  text-white  :text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight  text-white  :text-white">
                    No sales, just support
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5  text-white  :text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight  text-white  :text-white">
                    Build wealth step-by-step
                  </span>
                </li>
              </ul>
              <p className="font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
