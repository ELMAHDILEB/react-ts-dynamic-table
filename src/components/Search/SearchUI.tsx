import React from "react";
import { searchTermProps } from "../../Types/Types";

const SearchUI: React.FC<searchTermProps> = ({ setSearchTerm }) => {
  return (
    <section className="w-full md:w-[80%] mx-auto p-3 relative flex items-center justify-center">
      

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute right-6 text-slate-400 pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>


      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full 
          px-4 py-3 
          pr-12   /* space for icon */
          border-2 border-slate-300 
          rounded-xl
          bg-white
          text-slate-700
          transition-all duration-200
          focus:border-slate-400 focus:outline-none
          hover:border-slate-400
        "
      />
    </section>
  );
};

export default SearchUI;
