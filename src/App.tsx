import React, { useState } from 'react';
import Landing from './pages/Landing';
import Presentation from './pages/Presentation';
import KnowledgeBase from './pages/KnowledgeBase';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'presentation' | 'knowledgeBase'>('landing');

  return (
    <>
      {currentView === 'landing' && (
        <Landing 
          onStartPresentation={() => setCurrentView('presentation')} 
          onStartKnowledgeBase={() => setCurrentView('knowledgeBase')}
        />
      )}
      {currentView === 'presentation' && (
        <Presentation onExit={() => setCurrentView('landing')} />
      )}
      {currentView === 'knowledgeBase' && (
        <KnowledgeBase onExit={() => setCurrentView('landing')} />
      )}
    </>
  );
}
