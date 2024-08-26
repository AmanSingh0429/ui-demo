"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const navlinks = [
    { name: "Live Bestand", icon: "/svg/leaflight.svg" },
    { name: "Rezept einlösen", icon: "/svg/leaflight.svg" },
    { name: "Videosprechstunde", icon: "/svg/leaflight.svg" },
    { name: "FAQs", icon: "/svg/leaflight.svg" },
  ];
  const [mobileDisp, setMobileDisp] = useState(false);

  return (
    <>
      {/* DESKTOP NAV */}
      <div className="flex justify-between items-center h-9 text-lg ">

        {/* SEARCH BAR */}
        <div className="flex items-center max-xl:hidden group hover:scale-110 transition">
          <input
            type="text"
            placeholder="Suchen"
            className="text-textSoft bg-[#EEF7F7] rounded-full text-lg font-normal placeholder:text-textSoft px-3 py-1 group-hover:scale-110 transition outline-1 outline-accentblue"
          />
          <button className="relative right-6 flex-shrink-0">
            <Image
              src="/svg/search.svg"
              width={20}
              height={20}
              className="block"
            />
          </button>
        </div>

        {/* NAVLINKS */}
        <div className="flex gap-3 items-center max-md:hidden max-lg:text-sm flex-nowrap">
          <Link
            href="/"
            className="text-textDark font-semibold flex gap-1 group hover:scale-110 transition whitespace-nowrap"
          >
            <Image
              src="/svg/leafdark.svg"
              width={10}
              height={10}
              className="group-hover:-translate-y-1 transition group-hover:scale-150"
            />
            Rezept einlösen
          </Link>
          {navlinks.map((link) => (
            <Link
              href="/"
              className="text-textDark flex gap-1 group hover:scale-110 transition whitespace-nowrap"
              key={link.name}
            >
              <Image
                src={link.icon}
                width={10}
                height={10}
                className="group-hover:-translate-y-1 transition group-hover:scale-150"
              />
              {link.name}
            </Link>
          ))}
        </div>

        {/* CART AND BUTTON */}
        <div className="flex gap-4 items-center max-md:hidden">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/svg/cart.svg"
              width={25}
              height={25}
              className="hover:-translate-y-1 transition hover:scale-150"
            />
          </Link>
          <button className="bg-[#ECFEAA] px-3 rounded-ss-full rounded-ee-full hover:-translate-y-1 transition hover:scale-150">
            Anmelden
          </button>
        </div>


        {/* MOBILE NAV */}
        <Link
          href="/"
          className="flex gap-1 items-center group text-textSoft text-3xl hover:scale-110 md:hidden font-bold"
        >
          <Image
            src="/svg/leafdark.svg"
            height={15}
            width={15}
            className="group-hover:-translate-y-1 transition"
          />
          Blüten
        </Link>
        <button
          className="font-bold text-3xl md:hidden"
          onClick={() => setMobileDisp((prev) => !prev)}
        >
          <Image src="/svg/menu.svg" width={30} height={30} />
        </button>
      </div>

      {mobileDisp && (
        <div className="w-[50%] bg-[#EEF7F7] md:hidden flex flex-col h-screen items-center gap-4 pt-2 fixed right-0 top-0">
          <button
            className="px-4 py-3 self-end"
            onClick={() => setMobileDisp((prev) => !prev)}
          >
            <Image src="/svg/cross.svg" width={20} height={20} />
          </button>

          {/* NAVLINKS */}
          <Link
            href="/"
            className="text-textDark font-semibold flex gap-1 rounded-full px-4 py-2 border hover:border-accentblue transition hover:scale-110 group"
            onClick={() => setMobileDisp((prev) => !prev)}
          >
            <Image
              src="/svg/leafdark.svg"
              width={10}
              height={10}
              className="group-hover:-translate-y-1 transition group-hover:scale-150"
            />
            Rezept einlösen
          </Link>
          {navlinks.map((link) => (
            <Link
              href="/"
              className="text-textDark flex gap-1 rounded-full px-4 py-2 border hover:border-accentblue transition hover:scale-110 group"
              key={link.name}
              onClick={() => setMobileDisp((prev) => !prev)}
            >
              <Image
                src={link.icon}
                width={10}
                height={10}
                className="group-hover:-translate-y-1 transition group-hover:scale-150"
              />
              {link.name}
            </Link>
          ))}

          {/* CART AND BUTTON */}
          <Link
            href="/"
            className="border rounded-full px-4 py-2 hover:border-accentblue transition hover:scale-110 group"
            onClick={() => setMobileDisp((prev) => !prev)}

          >
            <Image
              src="/svg/cart.svg"
              width={20}
              height={20}
              className="group-hover:-translate-y-1 transition group-hover:scale-125"
            />
          </Link>
          <hr />
          <button
            className="bg-[#ECFEAA] px-3 rounded-ss-full rounded-ee-full hover:-translate-y-1 transition hover:scale-150"
            onClick={() => setMobileDisp((prev) => !prev)}

          >
            Anmelden
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
