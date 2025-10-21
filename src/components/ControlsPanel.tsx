import { useState } from "react";

const ControlsPanel = () => {
  const [isUN, setIsUN] = useState(false);
  const [isIndependent, setIsIndependent] = useState(false);
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="sort"> Sort by</label>
        <select
          id="sort"
          className="appearance-none outline-0 bg-[#282B30] cursor-pointer border-1 border-[#6c727f] py-1 rounded-lg bg-[url('/resources/Expand_down.svg')] bg-no-repeat bg-right"
        >
          <option value="population">Population</option>
          <option value="name">Name</option>
          <option value="area">Area</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 mt-14">
        <label htmlFor="region_selection"> Region </label>

        {/* The Buttons for selecting regions */}
        <div className="flex flex-wrap ">
          <button
            className={` pl-3  pr-5 py-2 hover:rounded-lg hover:bg-[#1b1d1f] ${""}`}
            id="region_selection"
          >
            America
          </button>

          <button
            className={` pl-3  pr-5 py-2 hover:rounded-lg hover:bg-[#1b1d1f] ${""}`}
            id="region_selection"
          >
            Antartic
          </button>

          <button
            className={` pl-3  pr-5 py-2 hover:rounded-lg hover:bg-[#1b1d1f] ${""}`}
            id="region_selection"
          >
            Africa
          </button>

          <button
            className={` pl-3  pr-5 py-2 hover:rounded-lg hover:bg-[#1b1d1f] ${""}`}
            id="region_selection"
          >
            Asia
          </button>

          <button
            className={` pl-3  pr-5 py-2 hover:rounded-lg hover:bg-[#1b1d1f] ${""}`}
            id="region_selection"
          >
            Europe
          </button>

          <button
            className={` pl-3  pr-5 py-2 hover:rounded-lg hover:bg-[#1b1d1f] ${""}`}
            id="region_selection"
          >
            Oceania
          </button>
        </div>
      </div>


    

      <div className="flex flex-col gap-1 mt-14">
        <span>Status</span>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isUN}
            onChange={() => setIsUN((v) => !v)}
            aria-checked={isUN}
            aria-label="Member of the United Nations"
          />
          <span className={`w-5 h-5 rounded-sm border-2 border-[#6c727f] flex items-center justify-center
            text-transparent ${isUN ? 'text-white border-transparent bg-[#2563eb]' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 ${isUN ? 'opacity-100' : 'opacity-0'} transition-all duration-200`}>
              <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Member of United Nations</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isIndependent}
            onChange={() => setIsIndependent((v) => !v)}
            aria-checked={isIndependent}
            aria-label="Independent"
          />
          <span className={`w-5 h-5 rounded-sm border-2 border-[#6c727f] flex items-center justify-center
            text-transparent ${isIndependent ? 'text-white border-transparent bg-[#2563eb]' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 ${isIndependent ? 'opacity-100' : 'opacity-0'} transition-all duration-200`}>
              <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Independent</span>
        </label>
      </div>


      
    </div>
  );
};

export default ControlsPanel;
