import { useState } from "react";

const FilterComponent = () => {
  const [isHerstellerExpanded, setIsHerstellerExpanded] = useState(false);
  const [isTerpeneExpanded, setIsTerpeneExpanded] = useState(false);

  const toggleHersteller = () => setIsHerstellerExpanded(!isHerstellerExpanded);
  const toggleTerpene = () => setIsTerpeneExpanded(!isTerpeneExpanded);

  return (
    <div className="bg-slate-50 w-64 p-4 rounded-md text-center text-textDark flex flex-col items-center">
      <h2 className="text-center font-bold text-xl">Filter</h2>

      {/* Price Range */}
      <div className="mt-6 border-b-2 py-4">
        <h3 className="font-semibold">Preis</h3>
        <div className="flex justify-between mt-2">
          <input type="range" min="5" max="10" defaultValue="7" className="slider" />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>5€</span>
          <span>10€</span>
        </div>
      </div>

      {/* Hersteller */}
      <div className="mt-6 border-b-2 py-4">
        <h3 className="font-semibold flex justify-between cursor-pointer" onClick={toggleHersteller}>
          Hersteller
          <span>{isHerstellerExpanded ? "▲" : "▼"}</span>
        </h3>
        {isHerstellerExpanded && (
          <div className="mt-2">
            <div className="flex items-center">
              <input type="checkbox" id="adrexpharma" className="mr-2" />
              <label htmlFor="adrexpharma">ADREXpharma</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="aurora" className="mr-2" />
              <label htmlFor="aurora">Aurora</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="avaay" className="mr-2" />
              <label htmlFor="avaay">Avaay</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="bedrocan" className="mr-2" />
              <label htmlFor="bedrocan">Bedrocan</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cannamedical" className="mr-2" />
              <label htmlFor="cannamedical">Cannamedical</label>
            </div>
            <button className="mt-2 text-accentblue">mehr anzeigen</button>
          </div>
        )}
      </div>

      {/* THC Gehalt */}
      <div className="mt-6 border-b-2 py-4">
        <h3 className="font-semibold ">THC Gehalt</h3>
        <div className="flex justify-between mt-2">
          <input type="range" min="11" max="18" defaultValue="14" className="slider" />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>11%</span>
          <span>18%</span>
        </div>
      </div>

      {/* CBD Gehalt */}
      <div className="mt-6 border-b-2 py-4">
        <h3 className="font-semibold">CBD Gehalt</h3>
        <div className="flex justify-between mt-2">
          <input type="range" min="1" max="5" defaultValue="3" className="slider" />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>1%</span>
          <span>5%</span>
        </div>
      </div>

      {/* Genetik */}
      <div className="mt-6 border-b-2 py-4" >
        <h3 className="font-semibold">Genetik</h3>
        <div className="flex justify-between mt-2 text-sm">
          <button className="bg-accentblue text-white px-3 py-1 rounded-full">Indica</button>
          <button className="bg-accentblue text-white px-3 py-1 rounded-full">Sativa</button>
          <button className="bg-accentblue text-white px-3 py-1 rounded-full">Hybrid</button>
        </div>
      </div>

      {/* Bestrahlung */}
      <div className="mt-6 border-b-2 py-4">
        <h3 className="font-semibold">Bestrahlung</h3>
        <div className="flex justify-between mt-2 text-sm">
          <button className="bg-accentblue text-white px-3 py-1 rounded-full">bestrahlt</button>
          <button className="bg-accentblue text-white px-3 py-1 rounded-full">nicht bestrahlt</button>
        </div>
      </div>

      {/* Terpene */}
      <div className="mt-6">
        <h3 className="font-semibold flex justify-between cursor-pointer" onClick={toggleTerpene}>
          Terpene
          <span>{isTerpeneExpanded ? "▲" : "▼"}</span>
        </h3>
        {isTerpeneExpanded && (
          <div className="mt-2">
            {/* Add content for Terpene here */}
          </div>
        )}
      </div>

      {/* Reset Filters */}
      <div className="mt-6 text-center">
        <button className="text-accentblue">alle Filter zurücksetzen</button>
      </div>
    </div>
  );
};

export default FilterComponent;
