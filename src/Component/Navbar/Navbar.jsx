import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Meta, NavLink, useLocation } from "react-router";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={`${
        pathname === "/"
          ? "bg-banner_color text-white rounded-xl m-3"
          : "bg-white"
      }`}
    >
      <div className="navbar w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product">Product</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">GadgetBuy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>
              </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="mr-2">
            <CiShoppingCart className="text-4xl bg-white text-black rounded-full p-2" />
          </button>
          <button className="">
            <CiHeart className="text-4xl rounded-full bg-white text-black p-2" />
          </button>
        </div>
      </div>
      {pathname === "/" && <Banner></Banner>}
    </div>
  );
}
