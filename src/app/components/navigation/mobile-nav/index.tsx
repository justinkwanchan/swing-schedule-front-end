import Link from 'next/link';

export default function MobileNav({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) {
  return (
    <section
      id="mobile-menu"
      className={`${
        isOpen ? 'flex' : 'hidden'
      } top-16 justify-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl`}
      onClick={handleClick}
    >
      <nav
        className="flex min-h-screen flex-col items-center py-8"
        aria-label="mobile"
      >
        <Link
          href="/"
          className="w-full py-6 text-center hover:opacity-90 text-white"
        >
          HOME
        </Link>
        <Link
          href="/events"
          className="w-full py-6 text-center hover:opacity-90"
        >
          ALL EVENTS
        </Link>
        <Link
          href="/contribute"
          className="w-full py-6 text-center hover:opacity-90"
        >
          HOW TO CONTRIBUTE
        </Link>
        <Link
          href="/large-events"
          className="w-full py-6 text-center hover:opacity-90"
        >
          LARGE EVENTS
        </Link>
      </nav>
    </section>
  );
}
