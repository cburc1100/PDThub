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
      className="h-full w-full snap-start relative cursor-default bg-slate-50 dark:bg-slate-900"
      aria-labelledby={`heading-${slide.id}`}
    >
      {/* Background Image with Gradient Overlay */}
      {slide.imageUrl && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={slide.imageUrl} 
            alt="" 
            className="w-full h-full object-cover"
            style={{ opacity: slide.imageOpacity ?? 0.35 }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/70 to-slate-50/10 dark:from-slate-900 dark:via-slate-900/70 dark:to-slate-900/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/60 via-transparent to-slate-50/30 dark:from-slate-900/60 dark:to-slate-900/30"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center px-6 md:px-16 lg:px-32 max-w-6xl mx-auto py-8 md:py-12">
        <div className="max-w-4xl focus:outline-none">
          <h2 
            id={`heading-${slide.id}`} 
            tabIndex={-1}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 lg:mb-8 leading-tight focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 rounded-lg text-slate-900 dark:text-white"
          >
            {slide.heading}
          </h2>
          <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            {slide.desc}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide;

