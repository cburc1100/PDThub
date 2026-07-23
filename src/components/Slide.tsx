import React from 'react';
import { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
  index: number;
  setRef: (el: HTMLElement | null) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, index, setRef }) => {
  return (
    <section
      data-index={index}
      ref={setRef}
      className="h-full w-full snap-start flex flex-col justify-center px-6 md:px-16 lg:px-32 max-w-6xl mx-auto py-8 md:py-12 cursor-default"
      aria-labelledby={`heading-${slide.id}`}
    >
      <div className="max-w-4xl focus:outline-none">
        <span className="text-5xl md:text-6xl font-black text-slate-500 mb-2 block select-none" aria-hidden="true">
          {slide.num}
        </span>
        <h2 
          id={`heading-${slide.id}`} 
          tabIndex={-1}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 rounded-lg"
        >
          {slide.heading}
        </h2>
        <div className="text-lg md:text-xl text-slate-600 leading-relaxed">
          {slide.desc}
        </div>
      </div>
    </section>
  );
}

export default Slide;
