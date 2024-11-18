import { NavLink } from "react-router-dom";
import icon from "../assets/icon.png"

const Navbar = () => {
  const links = (
    <div className="font-normal text-base flex flex-col lg:flex-row gap-3 md:gap-7">
      <NavLink className='text-slate-700'>Home</NavLink>
      <NavLink>Donation campaigns</NavLink>
      <NavLink>How to Help</NavLink>
      <NavLink>Dashboard</NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
        <div className="navbar-end">
          <p className="btn border">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
