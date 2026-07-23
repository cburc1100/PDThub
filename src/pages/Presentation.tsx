import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';
import { slides } from '../data/slides';

interface PresentationProps {
  onExit: () => void;
}

export default function Presentation({ onExit }: PresentationProps) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Observe scrolling to update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if focused on a button or link (standard accessibility)
      if (document.activeElement?.tagName === 'BUTTON' || document.activeElement?.tagName === 'A') {
        return;
      }
      
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleAdvance();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onExit();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, onExit]);

  const handleAdvance = () => {
    if (activeSection < slides.length - 1) {
      const nextIndex = activeSection + 1;
      scrollToSlide(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (activeSection > 0) {
      const prevIndex = activeSection - 1;
      scrollToSlide(prevIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Move focus to the heading of the new slide for screen readers
      const heading = el.querySelector('h2');
      if (heading) {
        // Small delay to allow scroll to start
        setTimeout(() => heading.focus({ preventScroll: true }), 100);
      }
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;

    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('nav') || target.closest('header')) return;

    handleAdvance();
  };

  return (
    <div className="h-screen w-full bg-white box-border p-0 m-0 overflow-hidden">
      <div className="h-full w-full border-4 md:border-8 border-white shadow-inner bg-slate-50 relative flex flex-col font-sans text-slate-900">
        
        {/* Screen Reader Announcement for Slide Changes */}
        <div aria-live="assertive" className="sr-only">
          {`Slide ${activeSection + 1} of ${slides.length}: ${slides[activeSection].title}`}
        </div>

        <Header onExit={onExit} />

        {/* Scrollable Main Content */}
        <main 
          className="flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar cursor-pointer focus:outline-none"
          onClick={handleBackgroundClick}
          aria-label="Presentation slides. Use arrow keys or space to navigate. Click the background to advance."
          tabIndex={-1}
        >
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              slide={slide}
              index={index}
              setRef={(el) => { sectionRefs.current[index] = el; }}
            />
          ))}
        </main>

        <Footer 
          slides={slides} 
          activeSection={activeSection} 
          scrollToSlide={scrollToSlide} 
        />
      </div>
    </div>
  );
}
