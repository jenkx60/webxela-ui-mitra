// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/ui-mitra-l1-lightmode.svg';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path ? 'text-secondary font-bold' : 'text-primary';

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={logo}
                alt="UI Mitra"
                width={100}
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className={`hover:text-secondary px-3 py-2 text-sm font-semibold`}>About</Link>
            <Link href="/services" className={` hover:text-secondary px-3 py-2 text-sm font-semibold`}>Services</Link>
            <Link href="/portfolio" className={` hover:text-secondary px-3 py-2 text-sm font-semibold`}>Portfolio</Link>
            <Link href="/blog" className={`hover:text-secondary px-3 py-2 text-sm font-semibold`}>Blog</Link>
            <Link href="/contact" className={`hover:text-secondary px-3 py-2 text-sm font-semibold`}>Contact</Link>
            <Link href="/contact" className="bg-transparent text-secondary px-4 py-2 rounded-md text-sm font-semibold hover:before:bg-redborder-red-500 relative overflow-hidden border border-secondary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-primary hover:shadow-secondary hover:before:left-0 hover:before:w-full">
              <span className='relative z-10'>Get Free Consulation</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-secondary" /> : <Menu className="h-6 w-6 text-secondary" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className={`block px-3 py-2 text-gray-700 hover:text-secondary text-base font-semibold`}>About</Link>
            <Link href="/services" className={`block px-3 py-2 text-gray-700 hover:text-secondary text-base font-semibold`}>Services</Link>
            <Link href="/portfolio" className={`block px-3 py-2 text-gray-700 hover:text-secondary text-base font-semibold`}>Portfolio</Link>
            <Link href="/blog" className={`block px-3 py-2 text-gray-700 hover:text-secondary text-base font-semibold`}>Blog</Link>
            <Link href="/contact" className={`block px-3 py-2 text-gray-700 hover:text-secondary text-base font-semibold`}>Contact</Link>
            <Link href="/contact" className="block w-full text-center bg-secondary text-white px-4 py-2 rounded-md text-base font-semibold">
              Get Free Consultaion
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;