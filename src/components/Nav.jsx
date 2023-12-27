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
        <ul className="hidden space-x-6 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="hover:text-red-500 transition duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
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
