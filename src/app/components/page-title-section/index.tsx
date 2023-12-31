import Image from 'next/image';

type Props = {
  splotch: string;
};

export default function PageTitleSection({ splotch }: Props) {
  return (
    <section className="flex flex-col md:flex-row h-[calc(100svh-62px)] w-full mb-12">
      <div className="bg-light-grey relative h-[70vw] md:h-auto md:w-2/5 2xl:w-1/3">
        <Image
          src={splotch}
          alt={'Splotchy Frame'}
          className="absolute top-16 left-4 md:top-8 md:left-8 z-10 w-[75%] md:w-[100%]"
        />
        <div className="flex flex-col absolute top-[53%] left-[17%] md:top-[16vw] md:left-[30%] lg:top-[15vw] lg:left-[28%] xl:left-[26%] 2xl:top-[13vw] z-20 w-[55%] md:w-[70%] leading-tight">
          <h1 className="text-[11vw] md:text-[6vw] 2xl:text-[5vw] font-bold">
            This
          </h1>
          <h1 className="self-end text-[11vw] md:text-[6vw] 2xl:text-[5vw] font-bold">
            Week
          </h1>
          <h1 className="mt-4 ml-6 text-[3vw] md:text-[2vw] 2xl:text-[1vw]">
            in Montreal
          </h1>
        </div>
        <div className="md:h-[50vw] lg:h-[45vw] 2xl:h-[35vw]"></div>
        <p className="pl-[40%] pt-4 pr-4 sm:pt-8 sm:pr-8 md:px-12">
          Find dance classes, social events, dance studios, and performances for
          all levels of experience in Montreal.
        </p>
      </div>
      <div className="bg-dark-grey h-[calc(60svh-64px)] md:h-auto grow"></div>
    </section>
  );
}
