import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      {/* Montreal icon */}
      <div>
        <Link href="/">HOME</Link>
        <Link href="/events">ALL EVENTS</Link>
        <Link href="/contribute">HOW TO CONTRIBUTE</Link>
        <Link href="/large-events">LARGE EVENTS</Link>
      </div>
      {/* Instagram icon */}
      <Link href="/login">LOGIN</Link>
      {/* En/Fr switch */}
    </nav>
  );
}
