import { FaWhatsapp } from "react-icons/fa";
import learn from "../assets/learn.pdf";
import React from "react";

const Learn = () => {
  return (
    <section data-aos="fade-up">
      <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div class=" text-white sm:text-lg  :text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight  text-white  :text-white">
              Master your money mindset
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Understand where your money goes, why saving isn’t enough, and how
              to avoid common financial traps. Learn to budget, invest, and grow
              wealth in simple Gujarati without confusing jargon.
            </p>

            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7  :border-gray-700"
            >
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5  text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-medium leading-tight  text-white  :text-white">
                  Budgeting made simple
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5  text-white  :text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-medium leading-tight  text-white  :text-white">
                  Save with purpose
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5  text-white  :text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-medium leading-tight  text-white  :text-white">
                  Smart investment habits
                </span>
              </li>
            </ul>
            <p class="mb-8 font-light lg:text-xl">
              Learn to budget, invest, and grow wealth in simple Gujarati
              without confusing jargon.
            </p>
          </div>
          <img
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="https://demo.themesberg.com/landwind/images/feature-1.png"
            alt="dashboard feature image"
          />
        </div>
        <a
          data-aos="flip-left"
          download
          href={learn}
          className={`h-[30%] llap:h-[60%] gap-3 flex justify-center `}
        >
          <button className="relative animate__animated  animate__tada inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-xs sm:text-sm md:text-base lg:text-base font-medium rounded-lg group bg-gradient-to-br bg-white text-black hover:text-purple-400  :text-white focus:ring-4 focus:outline-none focus:ring-blue-300  :focus:ring-blue-800">
            <span className="relative px-4 py-2 text-xs sm:text-sm md:text-base lg:text-base transition-all ease-in duration-75    :bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Download PDF
            </span>
          </button>
          <a
            href="https://wa.me/918980002847"
            data-aos="flip-left"
            target="_blank"
            rel="noopener noreferrer"
            className="relative animate__animated animate__tada inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-green-500 text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            <span className="flex items-center gap-2 px-4 py-2 transition-all ease-in duration-75 rounded-md">
              <FaWhatsapp className="text-lg" />
            </span>
          </a>
        </a>
      </div>
    </section>
  );
};

export default Learn;
