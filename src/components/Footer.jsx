import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[#1A8D91] rounded-tl-2xl rounded-tr-2xl mt-8 text-textDark h-72">
      <div className="p-10 w-full flex gap-6 justify-around">
        {/* SECTION ONE */}
        <div className="flex flex-col gap-1 max-md:hidden">
          <Link
            href="/"
            className="text-xl font-bold flex gap-1"
          >
            <Image src="/svg/leafdark.svg" width={20} height={20} />Bulten
          </Link>
          <Link
            href="/"
            className="font-thin text-sm text-white"
          >AGB</Link>
          <Link
            href="/"
            className="font-thin text-sm text-white"
          >Impressum</Link>
          <Link
            href="/"
            className="font-thin text-sm text-white"
          >Datenschutz</Link>
        </div>

        {/* SECTION TWO */}
        <div className="text-white flex flex-col items-left text-base justify-evenly max-lg:hidden">
          <div className="flex justify-between gap-4">
            <Link href="/" className="flex gap-1"><Image src="/svg/leafdark.svg" width={15} height={15} />Rezept einlösen</Link>
            <Link href="/" className="flex gap-1"><Image src="/svg/leafdark.svg" width={15} height={15} />Live Bestand</Link>
          </div>
          <div className="flex justify-between gap-4">
            <Link href="/" className="flex gap-1"><Image src="/svg/leafdark.svg" width={15} height={15} />Videosprechstunde</Link>
            <Link href="/" className="flex gap-1"><Image src="/svg/leafdark.svg" width={15} height={15} />FAQs</Link>
            <Link href="/" className="flex gap-1"><Image src="/svg/leafdark.svg" width={15} height={15} />Kontakt</Link>
          </div>
        </div>

        {/* SECTION THREE */}
        <div className="text-white flex flex-col text-base gap-2">
          <span className="font-thin text-sm" >Standort</span>
          <p className="font-semibold">Bergstraße 49 - <br />5769469 Weinheim<br />(3 Glocken Quartier)</p>
        </div>

        {/* SECTION FOUR */}
        <div className="text-white flex flex-col text-base gap-2">
          <span className="font-thin text-sm" >Telefone</span>
          <p className="font-semibold">0223 545 5250</p>
        </div>

        {/* SECTION FIVE */}
        <div className="text-white flex flex-col text-base gap-3">
          <span className="font-thin text-sm" >Öffnungszeiten</span>
          <div className="flex flex-col gap-1">
            <span className="font-thin text-sm" >Mo-Fr</span>
            <span className="font-semibold">09:00 – 18:00 Uhr</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-thin text-sm" >Sa</span>
            <span className="font-semibold">09:00 – 14:00 Uhr</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer