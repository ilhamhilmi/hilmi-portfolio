import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
      {/* Mobile Start */}
      <header className="xl:hidden w-full z-50 fixed top-0 left-0 flex items-center justify-center px-6">
        <nav className="bg-white xl:w-3/4 w-full rounded-full px-6 py-3 mt-5 flex items-center justify-between">
          <button className="cursor-pointer bg-white">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <a className="border border-midnight rounded-full px-3 py-2  text-pearl bg-midnight font-montserrat">Download CV</a>
        </nav>
      </header>
      {/* Mobile End */}

      {/* Desktop Start */}
      <header className="hidden w-full z-50 fixed top-0 left-0 xl:flex items-center justify-center px-6">
        <nav className="bg-white xl:w-3/4 w-full rounded-full px-6 py-4 mt-5 flex items-center justify-between">
          <div>
            <a href="" className="text-midnight font-montserrat font-semibold">Ilham Hilmi</a>
          </div>
          <div className="space-x-15">
            <a href="" className="text-midnight font-montserrat ">Home</a>
            <a href="" className="text-midnight font-montserrat ">About</a>
            <a href="" className="text-midnight font-montserrat ">Contact</a>
            <a href="" className="border border-midnight rounded-full px-3 py-2  text-pearl bg-midnight font-montserrat">Download CV</a>
          </div>
        </nav>
      </header>
      {/* Desktop End */}


    </div>
  );
}
