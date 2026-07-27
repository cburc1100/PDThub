import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { SlideData } from '../types';

interface HeaderProps {
  onExit: () => void;
  activeSection?: number;
  slides?: SlideData[];
}

export default function Header({ onExit, activeSection = 0, slides = [] }: HeaderProps) {
  const currentSlide = slides[activeSection];

  return (
    <header className="flex-shrink-0 flex justify-between items-start p-4 md:p-8 z-20 absolute top-0 w-full pointer-events-none">
      <div className="flex items-start gap-4 pointer-events-auto">
        <button
          onClick={onExit}
          className="p-2 -ml-2 rounded-full hover:bg-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Back to Landing Page"
        >
          <ArrowLeft className="w-5 h-5 text-slate-500" />
        </button>
        <div className="space-y-1">
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-blue-600" aria-label="Course Capstone Project 2026">
            Capstone Project 2026
          </h2>
          <h1 className="text-base md:text-xl font-light text-slate-600">Knowledge Base Presentation</h1>
        </div>
      </div>
      
      {currentSlide && (
        <div className="pointer-events-none text-right">
          <span className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 select-none drop-shadow-sm" aria-hidden="true">
            {currentSlide.num}
          </span>
        </div>
      )}
    </header>
  );
}
