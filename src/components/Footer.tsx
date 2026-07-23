import React from 'react';
import { SlideData } from '../types';

interface FooterProps {
  slides: SlideData[];
  activeSection: number;
  scrollToSlide: (index: number) => void;
}

export default function Footer({ slides, activeSection, scrollToSlide }: FooterProps) {
  return (
    <footer className="flex-shrink-0 flex items-center justify-between p-4 md:p-8 z-10 border-t border-slate-200/50">
      <div className="flex flex-col items-start" aria-live="polite" aria-atomic="true">
        <span className="sr-only">
          Current section: {slides[activeSection].title}. Slide {activeSection + 1} of {slides.length}.
        </span>
        <span className="block text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 uppercase text-blue-600" aria-hidden="true">
          {slides[activeSection].title}
        </span>
        <nav className="flex gap-1.5 md:gap-2" aria-label="Presentation Progress">
          {slides.map((slide, index) => {
            const isActive = activeSection >= index;
            return (
              <button
                key={slide.id}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSlide(index);
                }}
                className={`h-1.5 w-6 md:w-10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 ${
                  isActive ? 'bg-blue-600' : 'bg-slate-500 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${slide.num}: ${slide.title}`}
                aria-current={activeSection === index ? 'step' : undefined}
              />
            );
          })}
        </nav>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-widest">Presenter</p>
        <p className="text-sm md:text-base font-medium text-slate-800">Chris B.</p>
      </div>
    </footer>
  );
}
