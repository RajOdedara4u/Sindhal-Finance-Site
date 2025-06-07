import React from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Services from "./page/Services";
import Learn from "./page/Learn";
import About from "./page/About";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AdminUsers from "./page/AdminUsers";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/signup" element={<Signup />}>
          Signup
        </Route>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/learn" element={<Learn />}>
          Learn
        </Route>
        <Route path="/services" element={<Services />}>
          Services
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
