import React from "react";
import NavLink from "./nav-link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200">
      <div className="container flex justify-between m-auto">
        <Logo />

        <ul className="flex justify-center items-center">
          <NavLink link="/dashboard" content="Dashboard" />
          <NavLink link="/distance" content="Distance" />
        </ul>

        <div className="flex-none gap-2 w-[200px] flex justify-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
