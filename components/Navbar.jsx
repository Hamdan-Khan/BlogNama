"use client";
import Image from "next/image";
import Link from "next/link";
import menu from "../public/menu.svg";
import close from "../public/close.svg";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex flex-row w-full bg-zinc-900 text-gray-300 items-center py-2 text-xl justify-between px-5 sm:px-8 md:px-10 overflow-x-hidden">
      <div>
        <Link href="/">
          <h1 className="text-2xl cursor-pointer text-white">BlogNama</h1>
        </Link>
      </div>
      <Image
        src={menu}
        alt="Menu"
        className="bg-white h-6 w-6 rounded-sm sm:hidden"
        onClick={() => setNav(!nav)}
      />
      <div
        className={`absolute z-10 h-screen pb-16 p-8 duration-200 w-screen bg-zinc-800 top-0 ${
          nav ? "left-0" : "left-[-150%]"
        }`}
      >
        <ul className="text-2xl h-full font-semibold flex flex-col justify-between">
          <li>
            <Image
              href={close}
              alt="close"
              className="bg-white h-6 w-6 rounded-sm float-right"
              onClick={() => setNav(false)}
            ></Image>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-white duration-200"
              onClick={() => setNav(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-white duration-200"
              onClick={() => setNav(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-white duration-200"
              onClick={() => setNav(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:text-white duration-200"
              onClick={() => setNav(false)}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              href="/getstarted"
              className="hover:text-white duration-200"
              onClick={() => setNav(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex-row gap-3 sm:gap-6 md:gap-14 font-semibold justify-evenly hidden sm:flex">
        <li>
          <Link href="/" className="hover:text-white duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-white duration-200">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-white duration-200">
            Log In
          </Link>
        </li>
        <li>
          <Link href="/getstarted" className="hover:text-white duration-200">
            Get Started
          </Link>
        </li>
      </ul>
    </div>
  );
}
