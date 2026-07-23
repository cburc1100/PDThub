import React from 'react';
import { SlideData } from '../types';

export const slides: SlideData[] = [
  {
    id: 'growth-mindset',
    num: '01',
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
    num: '02',
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
    num: '03',
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
    num: '04',
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
    num: '05',
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
];
