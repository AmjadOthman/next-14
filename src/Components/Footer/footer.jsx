"use client";
import React from "react";
import Link from "next/link";
function footer() {
  return (
    <div className="fixed bottom-0 w-full ">
      <div className=" flex items-center justify-center bg-gradient-to-r from-sky-500 to-sky-950  text-white">
        <ul className=" w-full text-center gap-3 md:text-lg text-white">
          <li className="text-xl  p-3 font-bold">Social Media</li>
          <li className="text-xl  p-3 font-bold">
            © {new Date().getFullYear()}
          </li>
          <Link
            className="text-xl  font-bold hover:text-sky-600 duration-200 p-3"
            href="#"
          >
            By Ishtari
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default footer;
