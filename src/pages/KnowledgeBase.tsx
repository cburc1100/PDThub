import React, { useState } from 'react';
import { ArrowLeft, Search, Briefcase, FileText, MessageSquare, Heart, Users, Target, BookOpen, ExternalLink, ChevronRight, Brain } from 'lucide-react';
import { knowledgeBaseData, Category, Article } from '../data/knowledgeBaseData';
import Markdown from 'react-markdown';

interface KnowledgeBaseProps {
  onExit: () => void;
}

export default function KnowledgeBase({ onExit }: KnowledgeBaseProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showEmail, setShowEmail] = useState(false);

  const filteredCategories = knowledgeBaseData.filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArticles = searchQuery.trim() !== '' 
    ? knowledgeBaseData.flatMap(c => c.articles).filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.information.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.solutions.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleBack = () => {
    if (selectedArticle) {
      setSelectedArticle(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      onExit();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-4 md:px-6 py-4 flex items-center gap-4 flex-shrink-0">
        <button
          onClick={handleBack}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label={selectedArticle ? "Back to Category" : selectedCategory ? "Back to Knowledge Base" : "Back to Landing Page"}
        >
          <ArrowLeft className="w-6 h-6 text-slate-600" />
        </button>
        <h1 className="text-lg md:text-xl font-bold text-slate-800">
          {selectedArticle ? selectedArticle.title : selectedCategory ? selectedCategory.title : 'PDT Knowledge Base'}
        </h1>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-6 py-12">
        {!selectedCategory && !selectedArticle && (
          <>
            {/* Search Hero */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                Professional Development Training
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Insights, strategies, and resources tailored to support you throughout your career journey.
              </p>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-slate-400" aria-hidden="true" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-12 pr-4 py-4 rounded-full border-2 border-slate-200 bg-white text-base md:text-lg placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all shadow-sm"
                  placeholder="Search for topics, guides, or concepts..."
                  aria-label="Search the Knowledge Base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredCategories.length > 0 ? (
                filteredCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    className="group flex flex-col text-left bg-white rounded-2xl p-6 md:p-8 border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                    aria-labelledby={`heading-${category.id}`}
                  >
                    {category.icon}
                    <h3 id={`heading-${category.id}`} className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-600 mb-6 flex-grow leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider flex items-center gap-2">
                      {category.articles.length} Articles
                      <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </div>
                  </button>
                ))
              ) : filteredArticles.length === 0 ? (
                <div className="col-span-full text-center py-12" role="status">
                  <p className="text-xl text-slate-500">No topics found matching "{searchQuery}".</p>
                </div>
              ) : null}
            </div>

            {/* Related Articles List */}
            {searchQuery.trim() !== '' && filteredArticles.length > 0 && (
               <div className="mt-12 max-w-4xl mx-auto">
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h3>
                 <div className="space-y-4">
                   {filteredArticles.map(article => {
                     const parentCategory = knowledgeBaseData.find(c => c.articles.some(a => a.id === article.id));
                     return (
                       <button
                         key={article.id}
                         onClick={() => {
                           if (parentCategory) setSelectedCategory(parentCategory);
                           setSelectedArticle(article);
                           window.scrollTo({ top: 0, behavior: 'smooth' });
                         }}
                         className="w-full text-left bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-600 hover:shadow-md transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                       >
                         <div className="flex flex-col gap-1">
                           <div className="flex items-center gap-4">
                             <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                             <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{article.title}</span>
                           </div>
                           {parentCategory && (
                             <span className="text-sm font-medium text-slate-500 ml-10">in {parentCategory.title}</span>
                           )}
                         </div>
                         <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                       </button>
                     );
                   })}
                 </div>
               </div>
            )}
          </>
        )}

        {selectedCategory && !selectedArticle && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
               <div className="flex justify-center mb-6">{selectedCategory.icon}</div>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{selectedCategory.title}</h2>
               <p className="text-xl text-slate-600">{selectedCategory.description}</p>
            </div>
            <div className="space-y-4">
              {selectedCategory.articles.map(article => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="w-full text-left bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-600 hover:shadow-md transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                    <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{article.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedArticle && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
            <div className="prose prose-slate prose-lg md:prose-xl max-w-none">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-6">{selectedArticle.title}</h2>
              
              {selectedArticle.visual && (
                <div className="mb-8 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  {selectedArticle.visual}
                </div>
              )}

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-blue-900 mt-0 mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5" /> Information
                </h3>
                <div className="text-blue-900/90 text-base md:text-lg leading-relaxed space-y-4 markdown-body">
                   <Markdown>{selectedArticle.information}</Markdown>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-amber-900 mt-0 mb-4 flex items-center gap-2">
                   <Users className="w-5 h-5" /> Solutions
                </h3>
                <div className="text-amber-900/90 text-base md:text-lg leading-relaxed space-y-4 markdown-body">
                   <Markdown>{selectedArticle.solutions}</Markdown>
                </div>
              </div>

              {selectedArticle.links.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Deeper Dive Resources</h3>
                  <ul className="space-y-3 list-none pl-0">
                    {selectedArticle.links.map((link, idx) => (
                      <li key={idx}>
                        {link.url ? (
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                            {link.title}
                          </a>
                        ) : (
                          <button
                            onClick={() => {
                              if (link.actionId) {
                                for (const cat of knowledgeBaseData) {
                                  const found = cat.articles.find(a => a.id === link.actionId);
                                  if (found) {
                                    setSelectedCategory(cat);
                                    setSelectedArticle(found);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    break;
                                  }
                                }
                              }
                            }}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors text-left focus:outline-none focus:underline"
                          >
                            <BookOpen className="w-4 h-4" aria-hidden="true" />
                            {link.title}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-8 border-t border-slate-200 py-4 px-4 md:px-8 text-center text-slate-600 bg-white">
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
