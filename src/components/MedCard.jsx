import Image from "next/image"

const MedCard = ({ avalibality = true }) => {
  return (
    <>
      <div className="border-2 border-accentblue text-textDark w-72 rounded-ss-3xl rounded-ee-3xl text-base h-fit hover:scale-105 transition group">
        {/* HEADER  */}
        <div className="p-3">
          <div className="flex justify-between">
            {
              avalibality ? <>
                <li>sofort lieferbar</li>
                <p>neu</p>
              </> : <>
                <li className="text-redText bg-red-50 w-fit px-2 text-sm group-hover:scale-110 rounded-full">
                  nicht lieferbar
                </li>
              </>
            }
          </div>
          <Image src="/svg/med.svg" height={250} width={250} />
        </div>

        {/* BODY */}
        <div className="bg-accentblue bg-opacity-30 p-4 border-t-2 border-accentblue flex flex-col gap-4 rounded-ee-3xl">

          {/* TITLE */}
          <div className="flex gap-3 flex-col">
            <p className="bg-accentblue px-1 rounded-md font-semibold w-fit text-textDark bg-opacity-30">
              Canify
            </p>
            <div className="flex gap-2 items-center">
              <span className="bg-white px-3 rounded-md">
                THC 18%
              </span>
              <span className="bg-textSoft text-white px-3 rounded-md">
                CBD &lt;1%
              </span>
              <Image src="/svg/medIcon.svg" width={27} height={27} className="group-hover:rotate-[360deg] transition group-hover:scale-110 duration-700" />
            </div>
            <div>
              <p className="font-semibold text-lg">
                Cannabis Flos 18/1 PT Mango
              </p>
            </div>
          </div>

          {/* OTHER DETAILS */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span>Kultivar</span>
              <span>Mango</span>
            </div>
            <div className="flex justify-between">
              <span>Genetik</span>
              <span>Hybrid</span>
            </div>
          </div>


          {/* PRICE */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-extrabold flex flex-col group-hover:scale-110 group-hover:-translate-y-2">
              <p>
                <span className="text-textSoft">€</span> 11,66¹
              </p>
              <p className="text-sm font-normal">pro Gramm</p>
            </div>
            <button className="bg-[#ECFEAA] px-3 rounded-ss-3xl rounded-ee-3xl text-base h-8">
              in den Warenkorb
            </button>
          </div>


        </div>

      </div>
    </>
  )
}

export default MedCard