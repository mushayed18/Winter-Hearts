import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const { user, signOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginBtn = () => {
    navigate("/login");
  };

  const links = (
    <div className="font-normal text-base flex flex-col lg:flex-row gap-3 md:gap-7">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/donation-campaigns">Donation campaigns</NavLink>
      <NavLink to="/how-to-help">How to Help</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );

  return (
    <div
      className={`navbar bg-base-300 ${
        showNavbar ? "top-0" : "-top-24"
      } transition-all duration-300 fixed w-full z-50`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-8 h-8" src={icon} alt="" />
          <p className="btn btn-ghost text-xl p-0">WinterHearts</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div className="w-10 h-10 rounded-full mr-1">
            <img
              className="w-full h-full object-cover rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <button
            onClick={signOutUser}
            className="btn border bg-[#EF4323] text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <button
            onClick={handleLoginBtn}
            className="btn border bg-[#EF4323] text-white"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
