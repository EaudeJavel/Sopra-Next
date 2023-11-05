import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 justify-between">
      <div>
        <a className="btn btn-ghost normal-case text-xl">
          Sopra Next.JS project
        </a>
      </div>

      <ul>
        <li className="m-2 p-2">
          <Link href="/dashboard">dashboard</Link>
        </li>
        <li className="m-2 p-2 ">
          <Link href="/distance">Get distance between two cities !</Link>
        </li>
      </ul>

      <div className="flex-none gap-2">
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
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
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
    </nav>
  );
};

export default Navbar;
