import Image from 'next/image';
import splotch from 'public/splotch.svg';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row h-[calc(100svh-62px)] w-full">
      <div className="bg-[#eff1f3] relative w-2/5">
        <Image
          src={splotch}
          alt={'Splotchy Frame'}
          className="absolute top-8 left-8 z-10"
        />
        <div className="h-4/5"></div>
        <p className="px-12">
          Find dance classes, social events, dance studios, and performances for
          all levels of experience in Montreal.
        </p>
      </div>
      <div className="bg-black/70 md:w-3/5"></div>
    </section>
  );
}
