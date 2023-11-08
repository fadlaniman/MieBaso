"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxExit } from "react-icons/rx";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navStatic, setNavStatic] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      {
        currentScroll > 50 ? setNavStatic(true) : setNavStatic(false);
      }
    });
  });

  return (
    <div className={navStatic ? "header-active" : "header"}>
      <div className="flex space-x-1">
        <div className="my-auto">
          <Image
            src={Logo}
            alt={Logo}
            height={500}
            width={500}
            className="w-10"
          />
        </div>
        <h1 className="my-auto font-libre-baskerville text-lg">MieBaso</h1>
      </div>
      <div className="my-auto">
        <div className="xl:hidden cursor-pointer">
          <HiMenuAlt4
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-2xl my-auto"
          />
        </div>
        <div
          className={
            toggle
              ? "p-7 gap-5 grid fixed top-0 left-0 m-2 -translate-x-0 duration-500 bg-blue-600 text-white font-poppins-text text-sm xl:flex xl:static xl:bg-transparent xl:text-black xl:p-0"
              : "hidden xl:flex gap-5 text-sm font-monsterrat-text text-black"
          }
        >
          <Link className="Link" href="/">
            Home
          </Link>
          <Link className="Link" href="/">
            Menu
          </Link>
          <Link className="Link" href="">
            How it Works
          </Link>
          <Link className="Link" href="">
            Contact
          </Link>
          <div className="grid my-auto">
            <Link href="/">
              <FaShoppingCart className="text-xl" />
            </Link>
          </div>
          <div>
            <Link
              className="flex py-2 px-5 space-x-3 bg-blue-300 rounded-full text-black"
              href=""
            >
              <RxExit className="text-lg my-auto " />
              <p className="">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
