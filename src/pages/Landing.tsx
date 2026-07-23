import React from 'react';
import { Book, Play } from 'lucide-react';

interface LandingProps {
  onStartPresentation: () => void;
  onStartKnowledgeBase: () => void;
}

export default function Landing({ onStartPresentation, onStartKnowledgeBase }: LandingProps) {
  return (
    <div className="h-screen w-full bg-white box-border p-0 m-0 overflow-hidden">
      <div className="h-full w-full border-4 md:border-8 border-white shadow-inner bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900 font-sans">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600">
              Capstone Project 2026
            </h2>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
              Professional Development <br className="hidden md:block" />
              <span className="text-blue-600">Training Program</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={onStartPresentation}
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 shadow-xl hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none"
              aria-label="Start Presentation"
            >
              <Play className="w-5 h-5" aria-hidden="true" />
              Start Presentation
            </button>
            
            <button
              onClick={onStartKnowledgeBase}
              className="w-full sm:w-auto bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 shadow-sm border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:ring-4 focus:ring-slate-200 focus:outline-none"
              aria-label="Open Knowledge Base"
            >
              <Book className="w-5 h-5" aria-hidden="true" />
              Knowledge Base
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
