import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onExit: () => void;
}

export default function Header({ onExit }: HeaderProps) {
  return (
    <header className="flex-shrink-0 flex justify-between items-start p-4 md:p-8 z-10">
      <div className="flex items-start gap-4">
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
    </header>
  );
}
