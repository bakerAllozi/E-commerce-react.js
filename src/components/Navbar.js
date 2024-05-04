import React from "react";
import { NavLink } from "react-router-dom";
import Like from "./Like";
import Basket from "./Basket";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="   h-14  flex   justify-around items-center ">
      <p className=" text-xl  font-bold">Exclusive</p>
      <nav className=" flex  gap-5">
        <NavLink
          to="/"
          className="border-current border-zinc-300  p-2 p-b-4 hover:border-b-2 h-10 "
        >
          Home
        </NavLink>
        <NavLink
          to="Contact"
          className="border-current border-zinc-300 p-2 p-b-4 hover:border-b-2 h-10 "
        >
          Contact
        </NavLink>
        <NavLink
          to="About"
          className="border-current border-zinc-300 p-2 p-b-4 hover:border-b-2 h-10 "
        >
          About
        </NavLink>
        <NavLink
          to="SignUp"
          className="border-current border-zinc-300 p-2 p-b-4 hover:border-b-2 h-10 "
        >
          Sign Up
        </NavLink>
      </nav>
      <div className=" flex  gap-10  items-center justify-center">
        <SearchBar />
        <Like />
        <Basket />
      </div>
    </div>
  );
};

export default Navbar;
