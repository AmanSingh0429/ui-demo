"use client"

import { useState } from "react";
import FilterComponent from "./FilterComponent";

const Sidebar = () => {
  const [sideActive, setSideActive] = useState(false);
  const [isHerstellerExpanded, setIsHerstellerExpanded] = useState(false);
  const [isTerpeneExpanded, setIsTerpeneExpanded] = useState(false);

  const toggleHersteller = () => setIsHerstellerExpanded(!isHerstellerExpanded);
  const toggleTerpene = () => setIsTerpeneExpanded(!isTerpeneExpanded);

  return (
    <>

      {
        sideActive ? <>
          <div className="min-w-64 bottom-0 h-fit bg-slate-50 sticky top-0 rounded-2xl max-sm:hidden">
            <button
              onClick={() => setSideActive((prev) => prev = !prev)}
              className="text-4xl w-full font-semibold hover:-translate-y-1 hover:scale-110 transition hover:text-accentblue text-textDark"
            > &#8668; </button>
            <FilterComponent />
          </div>

        </> : <>
          <div className="min-w-16 bottom-0 h-screen bg-slate-50 sticky top-0 rounded-2xl ">
            <button
              onClick={() => setSideActive((prev) => prev = !prev)}
              className="text-4xl w-full font-semibold hover:-translate-y-1 hover:scale-110 transition hover:text-accentblue text-textDark"
            > &#8669; </button>
          </div>
        </>
      }
    </>
  )
}

export default Sidebar