"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed w-full top-0 left-0 z-10 ">
        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-sky-500 to-sky-950 md:w-full md:text-lg">
          <div className="font-bold text-xl text-white">Social Media</div>
          <div className="flex items-center w-1/5  justify-end">
            <button
              className="md:hidden flex justify-center w-8 h-8 text-white hover:text-sky-600 hover:bg-white duration-300 rounded"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex items-center justify-around p-1 ml-5 w-1/3 text-white text-lg">
            {isLoggedIn ? (
              <>
                <ul className="flex items-center justify-around">
                  <li className="mx-2">
                    <Link
                      href="/home"
                      className="hover:text-sky-600 hover:bg-white p-3 rounded-lg duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link
                      href="/profile"
                      className="hover:text-sky-600 hover:bg-white p-3 rounded-lg duration-300"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <Link
                href="/register"
                className="hover:text-[#93B1A6] hover:bg-black p-3 rounded-lg duration-300"
              >
                Register
              </Link>
            )}
          </nav>
        </div>
        <div className="flex items-center justify-end  bg-white">
          <ul
            className={`flex-col items-center justify-end h-30 gap  my-3   w-full  ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="list"
          >
            <li className=" hover:text-white hover:bg-sky-600 p-2 text-end  duration-300">
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li className=" hover:text-white hover:bg-sky-600 p-2  text-end duration-300">
              <Link href="/" className="">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
