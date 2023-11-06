'use client';
import Link from 'next/link';
import Hamburger from './Hamburger';

export default function Navbar() {
  return (
    <nav className="bg-teal-700 mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Hamburger />
        <div className="bg-gray-300 w-4 h-4">{/* Montreal icon */}</div>
      </div>
      <div className="hidden md:flex justify-between md:w-2/3 lg:w-1/2">
        <Link href="/">HOME</Link>
        <Link href="/events">ALL EVENTS</Link>
        <Link href="/contribute">HOW TO CONTRIBUTE</Link>
        <Link href="/large-events">LARGE EVENTS</Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-gray-300 hidden md:block w-4 h-4">
          {/* Instagram icon */}
        </div>
        <Link href="/login">LOGIN</Link>
        <div className="bg-gray-300 w-4 h-4">{/* En/Fr switch */}</div>
      </div>
    </nav>
  );
}
