import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';
import montrealIcon from 'public/montreal-icon.svg';

export default function Navbar({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <nav className="bg-teal-700 mx-auto p-4 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <Hamburger isOpen={isOpen} handleClick={toggleOpen} />
        <Image src={montrealIcon} alt={'Montreal Icon'} />
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
        <div className="bg-gray-300 hidden md:block w-4 h-4">
          {/* Instagram icon */}
        </div>
        <Link href="/login">LOGIN</Link>
        <div className="bg-gray-300 w-4 h-4">{/* En/Fr switch */}</div>
      </div>
    </nav>
  );
}
