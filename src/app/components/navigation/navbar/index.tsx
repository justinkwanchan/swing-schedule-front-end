import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';
import instagramIcon from 'public/instagram-icon.svg';
import MontrealIcon from '../../svg/MontrealIcon';

export default function Navbar({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <nav className="bg-white mx-auto p-4 flex justify-between items-center sticky top-0 z-20">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <Hamburger isOpen={isOpen} handleClick={toggleOpen} />
        <MontrealIcon />
      </div>

      {/* Middle - Desktop Menu */}
      <div className="hidden md:flex justify-between md:w-2/3 lg:w-1/2">
        <Link href="/">HOME</Link>
        <Link href="/events">ALL EVENTS</Link>
        <Link href="/contribute">HOW TO CONTRIBUTE</Link>
        <Link href="/large-events">LARGE EVENTS</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Image
          src={instagramIcon}
          alt={'Instagram Icon'}
          className="hidden md:block"
        />
        <Link href="/login">LOGIN</Link>
      </div>
    </nav>
  );
}
