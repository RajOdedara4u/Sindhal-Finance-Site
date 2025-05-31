import React from "react";
import logo2 from "../assets/logo2.jpg";
const Login = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-white bg-cover bg-no-repeat">
        <div className="rounded-xl bg-gray-200 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src={logo2}
                width="100"
                className="rounded-3xl"
                alt=""
                srcSet=""
              />
              <h1 className="mb-2 text-2xl text-black">Sindhal Finance</h1>
              <span className="text-black">Enter Login Details</span>
            </div>
            <form action="#">
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  placeholder="id@email.com"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="name"
                  placeholder="*********"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
