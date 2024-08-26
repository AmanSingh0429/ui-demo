"use client"

import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
      {/* CURRENT PAGE DIV AND MORE  */}
      <div className="flex justify-between mt-14 max-md:hidden">
        <div className=" text-textSoft flex">
          <Link href="/" className="hover:scale-105">Home&ensp; &rarr; </Link>
          <Link href="/Livebestand" className="hover:scale-105">&ensp; Livebestand &ensp;&rarr; </Link>
          <Link href="/CannabisBluten" className="text-textDark hover:scale-105 font-semibold"> &ensp;Cannabis Blüten </Link>
        </div>
        <div className="flex flex-col   ">
          <Link href="/" className="hover:scale-110">GKV mit Kostenübernahme?</Link>
          <button
            className="text-textDark px-7 border-2 border-[#62C3C6] rounded-ss-full rounded-ee-full hover:scale-110 hover:bg-textDark hover:text-[#62C3C6] transition hover:rounded-es-full hover:rounded-tr-full"
          >
            Preisoptionen
          </button>
        </div>
      </div>


      {/* LOGO AND OPTIONS  */}
      <div className="flex justify-between max-md:hidden items-center my-10">
        <Link
          href="/"
          className="flex gap-1 items-center text-textSoft text-4xl font-bold hover:scale-105 group"
        >
          <Image
            src="/svg/leafdark.svg"
            height={15}
            width={15}
            className="group-hover:-translate-y-1 transition"
          />
          Blüten
        </Link>

        <div className="flex gap-2">
          {/* SEARCH */}
          <div className="flex hover:scale-105">
            <input type="text" placeholder="Suchen" className="bg-slate-100 rounded-3xl px-3 placeholder:text-textSoft" />
            <Image src="/svg/search.svg" height={20} width={20} className="relative -translate-x-6" />
          </div>

          {/* OTHER OPTIONS */}
          <div className="flex gap-2 cursor-pointer hover:scale-105 bg-bgSoft px-3 bg-opacity-30 items-center" onClick={() => { }}>
            Sortieren nach <Image src="/svg/downarrow.svg" height={20} width={20} className="text-accentblue " />
          </div>

          <div className="flex gap-2 cursor-pointer hover:scale-105 bg-bgSoft px-3 bg-opacity-30 items-center" onClick={() => { }}>
            Verfügbarkeit <Image src="/svg/toggle.svg" height={25} width={25} className="text-accentblue " />
          </div>
        </div>
      </div>

    </>
  )
}

export default Header