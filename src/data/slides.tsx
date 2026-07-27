import React from 'react';
import { SlideData } from '../types';

export const slides: SlideData[] = [
  {
    id: 'table-of-contents',
    imageUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2000&auto=format&fit=crop',
    num: '01',
    title: 'Table of Contents',
    heading: (
      <>
        Table of <br />
        <span className="text-blue-600">Contents</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <ul className="space-y-3 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium w-full max-w-xl xl:max-w-3xl 2xl:max-w-5xl">
          <li className="flex w-full">
            <a 
              href="#heading-format-and-design" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 2: Format and Design Choices"
            >
              <span className="pb-1 pr-2 leading-tight">Format and Design Choices</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">2</span>
            </a>
          </li>
          <li className="flex w-full">
            <a 
              href="#heading-growth-mindset" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 3: Growth vs Fixed Mindset"
            >
              <span className="pb-1 pr-2 leading-tight">Growth vs Fixed Mindset</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">3</span>
            </a>
          </li>
          <li className="flex w-full">
            <a 
              href="#heading-emotional-intelligence" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 4: Emotional Intelligence"
            >
              <span className="pb-1 pr-2 leading-tight">Emotional Intelligence</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">4</span>
            </a>
          </li>
          <li className="flex w-full">
            <a 
              href="#heading-smart-goals" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 5: S.M.A.R.T Goals"
            >
              <span className="pb-1 pr-2 leading-tight">S.M.A.R.T Goals</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">5</span>
            </a>
          </li>
          <li className="flex w-full">
            <a 
              href="#heading-maslow-needs" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 6: Hierarchy of Needs"
            >
              <span className="pb-1 pr-2 leading-tight">Hierarchy of Needs</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">6</span>
            </a>
          </li>
          <li className="flex w-full">
            <a 
              href="#heading-time-management" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 7: Time Management"
            >
              <span className="pb-1 pr-2 leading-tight">Time Management</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">7</span>
            </a>
          </li>
          <li className="flex w-full">
            <a 
              href="#heading-why-this-matters" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 8: Why This Matters"
            >
              <span className="pb-1 pr-2 leading-tight">Why This Matters</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">8</span>
            </a>
          </li>
          <li className="flex w-full">
            <a 
              href="#heading-knowledge-base" 
              className="flex w-full items-end group text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1 -m-1"
              aria-label="Go to slide 9: Knowledge Base"
            >
              <span className="pb-1 pr-2 leading-tight">Knowledge Base</span>
              <span className="flex-1 border-b-2 md:border-b-[3px] border-dotted border-black mb-2 group-hover:border-blue-400 opacity-70"></span>
              <span className="font-bold text-black group-hover:text-blue-600 pb-1 pl-2">9</span>
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'format-and-design',
    imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=2000&auto=format&fit=crop',
    imageOpacity: 0.45,
    num: '02',
    title: 'Format and Design Choices',
    heading: (
      <>
        Format and <br />
        <span className="text-blue-600">Design Choices</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Why did I choose this format?
          </li>
          <li>
            Why did I design it this way?
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'growth-mindset',
    imageUrl: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2000&auto=format&fit=crop',
    imageOpacity: 0.45,
    num: '03',
    title: 'Growth vs Fixed Mindset',
    heading: (
      <>
        Growth Mindset vs <br />
        <span className="text-blue-600">Fixed Mindset</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <p>A mindset dictates how we handle challenges and failure in professional environments.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Growth Mindset:</strong> Focuses on process, learning, and failing forward. Views abilities as things that can be developed.</li>
          <li><strong>Fixed Mindset:</strong> Views intelligence and talent as static traits. Leads to avoiding challenges or giving up easily.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'emotional-intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2000&auto=format&fit=crop',
    num: '04',
    title: 'Emotional Intelligence',
    heading: (
      <>
        Emotional Intelligence <br />
        <span className="text-blue-600">(EQ)</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <p>The ability to understand and manage your emotions and the emotions of others.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Self-Awareness:</strong> Recognizing your own emotional triggers.</li>
          <li><strong>Self-Management:</strong> Regulating your response to stress.</li>
          <li><strong>Social Awareness:</strong> Empathizing and understanding others' emotions.</li>
          <li><strong>Relationship Management:</strong> Handling conflict and collaborating effectively.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'smart-goals',
    imageUrl: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2000&auto=format&fit=crop',
    num: '05',
    title: 'S.M.A.R.T Goals',
    heading: (
      <>
        S.M.A.R.T <br />
        <span className="text-blue-600">Goals</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <p>A proven framework to clarify ideas, focus efforts, and use time productively.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Specific:</strong> What exactly do you want to accomplish?</li>
          <li><strong>Measurable:</strong> How will you track progress?</li>
          <li><strong>Achievable:</strong> Do you have the necessary skills and resources?</li>
          <li><strong>Relevant:</strong> Does this align with your broader objectives?</li>
          <li><strong>Time-Bound:</strong> When will this be completed?</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'maslow-needs',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Students_Engaged_in_Critical_Thinking_Activities.jpg',
    imageOpacity: 0.45,
    num: '06',
    title: 'Hierarchy of Needs',
    heading: (
      <>
        Maslow & Me <br />
        <span className="text-blue-600">(Hierarchy of Needs)</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <p>A psychological framework that outlines the conditions necessary for individuals to thrive at work.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Physiological & Safety:</strong> Basic needs like physical health, rest, job security, and a safe work environment.</li>
          <li><strong>Social & Esteem:</strong> Belonging, teamwork, respect, and recognition from peers and leadership.</li>
          <li><strong>Self-Actualization:</strong> Reaching your full potential, creativity, and career growth.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'time-management',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Alarm_clock_on_a_chair_%28Unsplash%29.jpg',
    imageOpacity: 0.45,
    num: '07',
    title: 'Time Management',
    heading: (
      <>
        Time <br />
        <span className="text-blue-600">Management</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <p>Effectively allocating your time to boost productivity and reduce stress.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Prioritization:</strong> Using the Eisenhower Matrix to distinguish between Urgent and Important tasks.</li>
          <li><strong>Task Breakdown:</strong> Turning large, overwhelming projects into manageable steps.</li>
          <li><strong>Focus Tools:</strong> Utilizing methods like the Pomodoro technique to combat distractions.</li>
          <li><strong>Accountability:</strong> Implementing systems and tracking tools to stay consistent.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'why-this-matters',
    imageUrl: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2000&auto=format&fit=crop',
    imageOpacity: 0.45,
    num: '08',
    title: 'Why This Matters',
    heading: (
      <>
        Why This <br />
        <span className="text-blue-600">Matters</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Why does a new IT employee need this information?
          </li>
          <li>
            Why did my personal experiences shape my choices?
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'knowledge-base',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop',
    imageOpacity: 0.45,
    num: '09',
    title: 'Knowledge Base',
    heading: (
      <>
        Explore the <br />
        <span className="text-blue-600">Knowledge Base</span>
      </>
    ),
    desc: (
      <div className="space-y-4">
        <p>A comprehensive, open-source resource for professional development.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Free Resources:</strong> Find actionable guides and tools to support your growth.</li>
          <li><strong>Continuous Learning:</strong> Revisit topics covered in this presentation at your own pace and more!</li>
          <li>
            <strong>Visit Now:</strong>{' '}
            <a
              href="https://cburc1100.github.io/PDThub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            >
              cburc1100.github.io/PDThub
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];
