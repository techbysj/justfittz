import React, { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import SignInSignUpModal from "./SignInSignUp";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleMouseEnter = (item) => {
    // Set the active dropdown item when mouse enters
    setActiveDropdown(item.label);
  };

  const handleMouseLeave = () => {
    // Clear the active dropdown item when mouse leaves
    setActiveDropdown(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignIn = (success) => {
    setLoggedIn(success);
    if (success) {
      localStorage.setItem("loggedIn", true);
    }
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

return (
  <header
    className={`px-4 py-3 bg-gray-800 text-black sticky top-0 z-50 ${
      isScrolled ? "scrolled" : ""
    }`}
  >
    <div className="flex items-center justify-between max-w-6xl mx-auto">
      <Link to="/" className="text-2xl font-semibold">
        <img src={headerLogo} alt="logo" className="w-32" />
      </Link>
      <div className="hidden lg:flex items-center space-x-6">
        {/* Add search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Product or Brand"
            className="border rounded-l px-4 py-2 outline-none"
            style={{ width: "300px" }}
            onClick={() => setIsSearchActive(true)} // Set search active on click
              onBlur={() => setIsSearchActive(false)} // Set search inactive on blur

          />
          <button className="bg-white text-black rounded-r px-4 py-2">
            {/* You can replace the icon with your search icon */}
            <span>🔍</span>
          </button>

          {isSearchActive && (
  <div className="absolute top-full left-0 bg-white border rounded mt-2 p-4">
    {/* Popular Searches */}
    <p className="font-bold mb-1 text-gray-700">Popular Searches</p>
                <hr className="border-t mb-2" />

                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Footballs
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Tracksuits
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Sports Shoes
                </p>

                {/* Categories */}
                <p className="font-bold mt-3 mb-1 text-gray-700">Categories</p>
                <hr className="border-t mb-2" />

                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Men
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Women
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Kids
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Equipments
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Sports
                </p>

                {/* Brands */}
                <p className="font-bold mt-3 mb-1 text-gray-700">Brands</p>
                <hr className="border-t mb-2" />

                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Justfit
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Adidas
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Nike
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Puma
                </p>
                <p
                  className={`${
                    isSearchActive ? "text-gray-500" : ""
                  } hover:text-red-500`}
                >
                  Skechers
                </p>
  </div>
)}

        </div>








        {/* End of search bar */}
        <ul className="flex list-none space-x-6">
        {navLinks.map((item) => (
  <li key={item.label} className="relative group" onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={handleMouseLeave}>
    <Link to={item.href} className="hover:text-red-500 transition duration-300">
      {item.label}
    </Link>

    {/* Dropdown Content */}
    {item.subcategories && (
      <div className="absolute-dropdown bg-white border rounded mt-2 p-4 w-full">
        <div className="grid grid-cols-3 gap-4">
          {item.subcategories.map((subcategory, index) => (
            <div key={index} className="subcategory-column" >
              <p className="font-bold mb-2 text-gray-700">
                {subcategory.label}
              </p>
              {subcategory.items.map((item) => (
                <p key={item} className="text-gray-500">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </li>
))}

</ul>
      </div>
      {loggedIn ? (
          <div className="flex space-x-4 items-center">
            <button
              className="text-blue-500 hover:underline"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <>
            <div className="hidden lg:flex space-x-4 items-center">
              <button
                className="text-black bg-blue-500 hover:bg-red-100 px-4 py-2 rounded"
                onClick={openModal}
              >
                Sign in
              </button>
            </div>
          </>
        )}
        <div className="lg:hidden">
          <button className="text-white" onClick={openModal}>
            <img src={hamburger} alt="hamburger icon" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <SignInSignUpModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSignIn={handleSignIn}
      />
    </header>
  );
};

export default Nav;
