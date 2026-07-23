import React from 'react';

export default function WiseMindDiagram() {
  return (
    <div className="flex flex-col items-center justify-center py-8 w-full px-4 overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-[700px] aspect-[1.6/1] sm:aspect-[1.8/1] md:aspect-[2/1]">
        
        {/* Reasonable Mind Circle */}
        <div className="absolute w-[60%] h-[96%] sm:h-full left-0 rounded-full bg-blue-100/80 border-[3px] md:border-4 border-blue-400 shadow-lg mix-blend-multiply flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-[12%] pr-[28%] sm:pr-[30%]">
            <h4 className="font-bold text-blue-900 text-[11px] sm:text-base md:text-xl mb-1 md:mb-2">Rational Mind</h4>
            <p className="text-[9px] sm:text-xs md:text-sm text-blue-800 font-medium leading-tight">Logic, facts, rules, pragmatism, past experiences, data.</p>
          </div>
        </div>

        {/* Emotional Mind Circle */}
        <div className="absolute w-[60%] h-[96%] sm:h-full right-0 rounded-full bg-rose-100/80 border-[3px] md:border-4 border-rose-400 shadow-lg mix-blend-multiply flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col justify-center items-end pr-[12%] pl-[28%] sm:pl-[30%] text-right">
            <h4 className="font-bold text-rose-900 text-[11px] sm:text-base md:text-xl mb-1 md:mb-2">Emotional Mind</h4>
            <p className="text-[9px] sm:text-xs md:text-sm text-rose-800 font-medium leading-tight">Feelings, passions, urges, reactive, mood-dependent.</p>
          </div>
        </div>

        {/* Wise Mind (Overlap Area Text) */}
        <div className="absolute z-10 flex flex-col items-center justify-center text-center pointer-events-none w-[32%] sm:w-[35%]">
          <h4 className="font-black text-purple-900 text-[11px] sm:text-lg md:text-2xl drop-shadow-md leading-tight">Wise Mind</h4>
          <p className="text-[9px] sm:text-xs md:text-sm text-purple-950 font-bold mt-1 sm:mt-2 leading-tight">Intuition,<br className="hidden sm:block"/>Balance,<br className="hidden sm:block"/>Inner Wisdom</p>
        </div>
        
      </div>
      <p className="text-xs sm:text-sm text-slate-500 mt-4 sm:mt-6 md:mt-8 italic text-center">
        The three states of mind as described by Dr. Marsha Linehan in Dialectical Behavior Therapy (DBT).
      </p>
    </div>
  );
}
