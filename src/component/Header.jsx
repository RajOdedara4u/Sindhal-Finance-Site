import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    // Run once on mount
    checkToken();

    // Listen to storage changes → works if other components update token
    window.addEventListener("storage", checkToken);

    // Optional: also listen to custom event for in-page updates
    window.addEventListener("tokenChange", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
      window.removeEventListener("tokenChange", checkToken);
    };
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("tokenChange"));
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header data-aos="fade-down" className="block w-full z-50 shadow-md">
      <nav className="max-w-screen-xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-9 rounded-3xl" />
        </NavLink>

        {/* Hamburger Button (mobile) */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/learn", label: "Learn" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
              { to: "/about", label: "About" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 rounded lg:p-0 ${
                      isActive ? " text-white font-semibold" : "text-white"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // close menu on click
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {isLoggedIn && (
              <li>
                <NavLink
                  to="/admin/users"
                  className="block py-2 pl-3 pr-4 text-white font-semibold hover:text-green-400 lg:p-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Panel
                </NavLink>
              </li>
            )}

            {/* Conditionally show Login or Logout */}
            {!isLoggedIn ? (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 rounded lg:p-0 ${
                      isActive ? " text-white font-semibold" : "text-white"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // close menu on click
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 pl-3 pr-4 text-white font-semibold hover:text-red-400 lg:p-0"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
