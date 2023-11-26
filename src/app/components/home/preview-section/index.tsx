'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';

import DanceEventPreviewCard from '../dance-event-preview-card';

import styles from '../Carousel.module.css';

type Props = {
  title: string;
};

export default function PreviewSection({ title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 80);
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <>
      <div className="embla overflow-hidden">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">{title}</h1>
          <div>
            <button
              className={`${styles.embla__prev} mr-4`}
              onClick={scrollPrev}
            >
              Prev
            </button>
            <button className={styles.embla__next} onClick={scrollNext}>
              Next
            </button>
          </div>
        </div>

        <div className={styles.embla__progress}>
          <div
            className={styles.embla__progress__bar}
            style={{ transform: `translateX(${scrollProgress}cqw)` }}
          />
        </div>

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex -ml-8">
            <DanceEventPreviewCard />
            <DanceEventPreviewCard />
            <DanceEventPreviewCard />
            <DanceEventPreviewCard />
            <DanceEventPreviewCard />
          </div>
        </div>
      </div>
    </>
  );
}
