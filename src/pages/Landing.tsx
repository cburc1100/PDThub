import React, { useState } from 'react';
import { Book, Play, ExternalLink, MessageSquare } from 'lucide-react';

interface LandingProps {
  onStartPresentation: () => void;
  onStartKnowledgeBase: () => void;
}

export default function Landing({ onStartPresentation, onStartKnowledgeBase }: LandingProps) {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white box-border p-0 m-0 flex flex-col">
      <div className="flex-1 w-full bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900 font-sans">
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
              Explore key concepts in collaboration, mindset, and personal growth for the modern IT workspace.
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

      <footer className="border-t border-slate-200 py-4 px-4 md:px-8 text-center text-slate-600 bg-white">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xs md:text-sm leading-relaxed">
            This Knowledge Base is an <strong>open-source</strong> project designed to provide free, accessible professional development resources. If you have feedback, suggestions for improvements, or need to report bugs and dead links, please reach out!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 py-1">
            <a
              href="https://github.com/cburc1100/PDThub"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-slate-800 font-medium py-1.5 px-4 rounded-full transition-colors border border-slate-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 flex items-center gap-2 text-xs md:text-sm"
            >
              <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
              GitHub Repository
            </a>
            {!showEmail ? (
              <button
                onClick={() => setShowEmail(true)}
                className="bg-white hover:bg-slate-50 text-slate-800 font-medium py-1.5 px-4 rounded-full transition-colors border border-slate-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 text-xs md:text-sm"
              >
                Show Contact Email
              </button>
            ) : (
              <a
                href="mailto:cburc1100+contact@gmail.com"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm transition-colors focus:outline-none focus:underline"
              >
                <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
                cburc1100+contact@gmail.com
              </a>
            )}
          </div>
          <div className="pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              A special thank you to <a href="https://www.relayresources.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 rounded">AbilIT and Relay Resources</a> for their outstanding education opportunities and support in Portland, Oregon.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
