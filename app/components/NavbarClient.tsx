"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";


export default function NavbarClient() {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Mobile Start */}
      <header className="xl:hidden w-full z-50 fixed top-0 left-0 flex items-center justify-center px-6">
        <nav ref={menuRef} className="bg-white border border-slate-200 xl:w-3/4 w-full rounded-full px-6 py-4 mt-8 flex items-center justify-between relative shadow-md">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <span className={`w-6.5 h-0.5 my-2 block bg-primary transform transition-all duration-300 ${isOpen ? 'rotate-46 translate-y-1.25' : 'rotate-0 translate-y-0 scale-100'}`}></span>
            <span className={`w-6.5 h-0.5 my-2 block bg-primary transform transition-all duration-300 ${isOpen ? '-rotate-46 -translate-y-1.25' : 'rotate-0 translate-y-0'}`}></span>
          </button>
          <a href="" className="border border-primary rounded-full px-3 py-2  text-white bg-primary font-montserrat">Download CV</a>

          <div className={`bg-white shadow-md border border-slate-200 absolute left-0 top-full mt-3.5 rounded-4xl w-full px-6 transition-all duration-250 ease-in-out text-center flex flex-col space-y-5 ${isOpen ? 'max-h-100 opacity-100 py-4 pointer-events-auto visible' : 'max-h-0 opacity-0 py-0 pointer-event-none invisible'}`}>
            <a onClick={() => setIsOpen(false)} href="#home" className="text-primary font-montserrat font-semibold text-xl">Home</a>
            <a onClick={() => setIsOpen(false)} href="#about" className="text-primary font-montserrat font-semibold text-xl">About</a>
            <a onClick={() => setIsOpen(false)} href="#contact" className="text-primary font-montserrat font-semibold text-xl">Contact</a>
          </div>

        </nav>
      </header>
      {/* Mobile End */}

      {/* Desktop Start */}
      <header className="hidden w-full z-50 fixed top-0 left-0 xl:flex items-center justify-center px-6">
        <nav className="bg-white w-2/3 2xl:w-1/2 rounded-full px-6 py-4 mt-8 flex items-center justify-between">
          <div>
            <a href="#home" className="text-primary font-montserrat font-semibold uppercase">Ilham Hilmi</a>
          </div>
          <div className="space-x-12">
            <a href="#home" className="text-primary font-montserrat text-sm font-semibold hover:text-teal-600 duration-200">Home</a>
            <a href="#about" className="text-primary font-montserrat text-sm font-semibold hover:text-teal-600 duration-200">About</a>
            <a href="#contact" className="text-primary font-montserrat text-sm font-semibold hover:text-teal-600 duration-200">Contact</a>
            <a href="" className="border border-primary rounded-full px-3 py-1.5  text-white bg-primary font-montserrat text-sm hover:bg-teal-600 hover:border-teal-600 hover:shadow-md duration-200">Download CV</a>
          </div>
        </nav>
      </header>
      {/* Desktop End */}


    </div>
  );
}