import React, { useState, useEffect } from "react";
import logo2 from "../assets/logo2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        "https://sindhal-web-server.onrender.com/api/auth/login",
        formData
      );

      toast.success("Login successful!");
      console.log(res);

      // Save token
      localStorage.setItem("token", res.data.token);

      // Dispatch tokenChange event so Header updates
      window.dispatchEvent(new Event("tokenChange"));

      toast.success("Login successful!");
      navigate("/");

      // Redirect after slight delay for toast to show
      setTimeout(() => {
        navigate("/"); // Redirect to /home
      }, 1000);
    } catch (err) {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
        <div
          data-aos="flip-left"
          className="rounded-xl bg-gray-100 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8"
        >
          <div className="text-black">
            <div className="mb-8 flex flex-col items-center">
              <img src={logo2} width="100" className="rounded-3xl" alt="logo" />
              <h1 className="mb-2 text-2xl text-black">Sindhal Finance</h1>
              <span className="text-black">Enter Login Details</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="email"
                  placeholder="id@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  name="password"
                  placeholder="*********"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <p className="text-black pt-3 text-center">
            No Account?{" "}
            <NavLink className="text-blue-500" to="/signup">
              Create One
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
