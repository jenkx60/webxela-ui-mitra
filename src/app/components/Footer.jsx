// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/ui-mitra-l1-darkmode.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href='/' className='mb-8'>
                <Image 
                    src={logo}
                    alt='UI Mitra'
                    width={120}
                />
            </Link>
            <p className="text-gray-400">Crafting exceptional user experiences through innovative design solutions.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-secondary">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-secondary">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-secondary">Portfolio</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Design Street</li>
              <li>Creative City, DC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@uimitra.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="w-full bg-secondary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300">
                Subscribe
              </button>
            </form>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-secondary"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UI Mitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;