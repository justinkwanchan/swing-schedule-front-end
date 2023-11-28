import Image from 'next/image';
import splotch from 'public/splotch.svg';
import PreviewSection from './preview-section';
import DanceSchoolSection from './dance-school-section';
import PreviousFlyersSection from './previous-flyers-section';

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row h-[calc(100svh-62px)] w-full mb-12">
        <div className="bg-light-grey relative h-[70vw] md:h-auto md:w-2/5 2xl:w-1/3">
          <Image
            src={splotch}
            alt={'Splotchy Frame'}
            className="absolute top-16 left-4 md:top-8 md:left-8 z-10 w-[75%] md:w-[100%]"
          />
          <div className="md:h-[50vw] lg:h-[45vw] 2xl:h-[35vw]"></div>
          <p className="pl-[40%] pt-4 pr-4 sm:pt-8 sm:pr-8 md:px-12">
            Find dance classes, social events, dance studios, and performances
            for all levels of experience in Montreal.
          </p>
        </div>
        <div className="bg-dark-grey h-[calc(60svh-64px)] md:h-auto grow"></div>
      </section>

      <div className="flex flex-col w-4/5 mb-12 gap-12">
        <PreviewSection title={'Upcoming Social Dances'} />
        <PreviewSection title={'Newly-Listed Events'} />
        <PreviewSection title={'Beginner Classes'} />
        <DanceSchoolSection />
        <PreviousFlyersSection />
      </div>
    </>
  );
}
