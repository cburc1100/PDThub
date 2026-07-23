import React from 'react';
import { 
  Brain, 
  Clock, 
  Heart, 
  Briefcase, 
  MessageSquare, 
  Target, 
  ShieldCheck, 
  Users,
  Wallet
} from 'lucide-react';
import WiseMindDiagram from '../components/WiseMindDiagram';

export interface Article {
  id: string;
  title: string;
  information: string;
  solutions: string;
  links: { title: string; url?: string; actionId?: string }[];
  visual?: React.ReactNode;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  articles: Article[];
}

export const knowledgeBaseData: Category[] = [
  {
    id: 'mindset-time',
    title: 'Mindset & Time Management',
    description: 'Foundational skills for managing your time, energy, and perspective in the workplace.',
    icon: <Brain className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" />,
    articles: [
      {
        id: 'growth-mindset',
        title: 'Growth Mindset',
        information: `
A Growth Mindset is the belief that abilities and intelligence can be developed through dedication and hard work. It involves reframing failure as a learning opportunity rather than a permanent setback.
- **Fixed Mindset**: Believing traits are inherent and cannot change.
- **Growth Mindset**: Believing in the power of "yet" and embracing challenges.
        `,
        solutions: `
**Common Struggles**: 
Students may struggle to apply a growth mindset when dealing with past failures, such as losing a job due to unmanaged stress or health issues, often leading to stubbornness against using coping tools.

**What Can Work**:
- **Reframing**: Look at past employment not just as a failure, but as a place where valuable skills were gained (organization, communication).
- **Synergy**: Combine learned hard skills with new cognitive tools (like identifying fixed mindset thoughts and challenging them).
        `,
        links: [
          { title: 'Carol Dweck: The Power of Believing You Can Improve', url: 'https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve' },
          { title: 'Mindset Works — Growth Mindset Articles', url: 'https://www.mindsetworks.com/' }
        ]
      },
      {
        id: 'time-management',
        title: 'Time Management & The 4 Quadrants',
        information: `
Effective time management relies on distinguishing between what is urgent and what is important using **Stephen Covey's 4 Quadrants**:
1. **Urgent and Important**: Deadlines, emergencies, punctuality.
2. **Not Urgent, but Important**: Exercise, meditation, long-term planning. (This is where you want to spend the most time).
3. **Urgent, but Not Important**: Interruptions, some emails.
4. **Not Urgent, Not Important**: Excessive social media, gaming.
        `,
        solutions: `
**Common Struggles**: 
Underestimating how long tasks take, avoiding overwhelming tasks, and relying too heavily on motivation rather than discipline. Often, students get stuck in "robotic thinking" or "work-mode," neglecting self-care.

**What Can Work**:
- **Tech Stack Synergy**: Use multiple interconnected tools. For example, Google Sheets for detailed task descriptions, Google Keep for ideas, Google Calendar for deadlines/buffers, and Gemini for summarization.
- **Focus Tools**: Utilizing "Do Not Disturb" on devices to block notifications.
- **Gratitude as Accountability**: Practicing gratitude meditation after completing tasks helps exit the rational "robotic" mind, grounding the individual emotionally and reducing the feeling of isolation.
        `,
        links: [
          { title: 'Eisenhower Matrix Tool', url: 'https://todoist.com/productivity-methods/eisenhower-matrix' },
          { title: 'Goblin Tools', url: 'https://goblintools.com/' }
        ]
      },
      {
        id: 'maslow-needs',
        title: 'Maslow & Me (Hierarchy of Needs)',
        information: `
Understanding how Maslow’s hierarchy of needs impacts workplace success is critical. Meeting base needs supports professional performance.
- **Physiological**: Bare necessities (food, water, sleep).
- **Safety**: Personal security, income, structure.
- **Social**: Friendship, community, belonging.
- **Esteem**: Respect, recognition, achievement.
- **Self-Actualization**: Creation, purpose, exploration.
        `,
        solutions: `
**Common Struggles**: 
The *Social* tier is frequently the most difficult to meet, especially for individuals coping with social anxiety. Online socializing may not fully substitute the need for authentic in-person connections.

**What Can Work**:
- **Structured Fulfillment**: Ensure physiological needs are met through healthy eating routines, safety through budgeting, and esteem through attending classes and gaining skills.
- **Incremental Socializing**: Recognizing social deficits and making small plans to integrate socialization into daily routines, such as inviting a peer out once a week.
        `,
        links: [
          { title: 'Maslow\'s Hierarchy of Needs in the Workplace', url: 'https://www.simplypsychology.org/maslow.html' }
        ]
      },
      {
        id: 'smart-goals',
        title: 'SMART Goals & Personal Development',
        information: `
A Personal Development Plan helps you stay on track with your long-term career goals. A core component of this is creating **SMART Goals**:
- **S – Specific**: What do you want to accomplish? Who needs to be included? When do you want to do this? Why is this a goal?
- **M – Measurable**: How can you measure progress and know if you’ve successfully met your goal?
- **A – Achievable**: Do you have the skills required to achieve the goal? What is the motivation for this goal? Is the effort required on par with what the goal will achieve?
- **R – Relevant**: Why am I setting this goal now? Is it aligned with overall objectives?
- **T – Time-Bound**: What’s the deadline, and is it realistic?
        `,
        solutions: `
**Common Struggles**:
It's easy to get off track by losing focus, getting easily overwhelmed, or avoiding long-term tasks without clear structure.

**What Can Work**:
- **Risk Mitigation**: Identify potential risks (e.g., getting easily discouraged) and create a plan to mitigate them (e.g., weekly check-ins with an accountability partner).
- **Tracking Progress**: Use habit tracking apps or progress tracking boards to visualize your consistency.
- **Accountability**: Set up a self-accountability plan and an external accountability plan with specific people to support your progress.
        `,
        links: [
          { title: 'TED Talk: The Psychology of Your Future Self (Dan Gilbert)', url: 'https://www.ted.com/talks/dan_gilbert_the_psychology_of_your_future_self' },
          { title: 'TEDx: How to Achieve Your Most Ambitious Goals (Stephen Duneier)', url: 'https://www.youtube.com/watch?v=TQMbvJNRpLE' },
          { title: 'SMART Goals Explained (Productivity Game)', url: 'https://www.youtube.com/watch?v=1-SvuFIQjK8' },
          { title: 'PositivePsychology: SMART+ Goals Worksheet (PDF)', url: 'https://positivepsychology.com/wp-content/uploads/SMART-Goals-Worksheet.pdf' }
        ]
      }
    ]
  },
  {
    id: 'emotional-regulation',
    title: 'Emotional Intelligence & Regulation',
    description: 'Techniques for self-awareness, managing emotional triggers, and navigating stressful situations.',
    icon: <Heart className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" />,
    articles: [
      {
        id: 'emotional-intelligence',
        title: 'Emotional Intelligence (EQ)',
        information: `
Emotional Intelligence is divided into four main domains:
1. **Self-Awareness**: Recognizing your own emotions.
2. **Self-Management**: Regulating your emotions and stress.
3. **Social Awareness**: Empathizing and understanding others' emotions.
4. **Relationship Management**: Handling interpersonal interactions effectively.

**Locus of Control**:
- **Internal**: Believing you have control over your own life and reactions.
- **External**: Believing external forces dictate outcomes.
        `,
        solutions: `
**Common Struggles**: 
Individuals heavily reliant on the "rational mind" may struggle to process strong emotions or empathize with highly emotional coworkers. Conversely, there's a tendency to invalidate one's own feelings for the sake of productivity or to avoid conflict, leading to unmet needs and draining interactions.

**What Can Work**:
- **Internal Locus in High Stress**: Practice viewing stressful events (like an influx of tickets or an upset coworker) through an internal locus of control to build patience.
- **Mediator Role**: Leveraging a naturally rational mindset to act as an unbiased mediator during conflicts, provided stress levels are managed through grounding techniques.
- **Learn About the Wise Mind**: If you find yourself stuck in a purely logical or purely emotional state, exploring the concept of the "Wise Mind" can help bridge the gap.
        `,
        links: [
          { title: 'Locus of Control: What Is It & Why It Matters', url: 'https://www.verywellmind.com/what-is-locus-of-control-2795434' },
          { title: 'Feelings Wheel', url: 'https://feelingswheel.com/' },
          { title: 'States of Mind: Reasonable, Emotional, and Wise', actionId: 'states-of-mind' }
        ]
      },
      {
        id: 'states-of-mind',
        title: 'States of Mind: Reasonable, Emotional, and Wise',
        visual: <WiseMindDiagram />,
        information: `
Dialectical Behavior Therapy (DBT), developed by Dr. Marsha Linehan, identifies three primary states of mind that influence how we perceive and react to the world:

- **Reasonable Mind (Rational Mind)**: This state is driven by logic, facts, pragmatism, and past experiences. It is task-focused and detached from feelings. While excellent for solving math problems or following a recipe, relying *only* on the reasonable mind can make a person seem cold or detached, and it may lead to invalidating one's own or others' emotions.
- **Emotional Mind**: This state is ruled by feelings, urges, and passions. Logic and facts are pushed aside in favor of reactive, mood-dependent behaviors. While the emotional mind fuels creativity, love, and empathy, being entirely in this state during stressful workplace conflicts can lead to impulsive, regrettable actions.
- **Wise Mind**: This is the synthesis or overlap of the Reasonable and Emotional minds. It integrates the factual, logical approach of the reasonable mind with the sensitivity and passion of the emotional mind. Accessing the wise mind brings a sense of intuitive knowing, balance, and calm centeredness, allowing for thoughtful, effective responses to challenges.
        `,
        solutions: `
**Common Struggles**: 
In technical or high-stress environments, it's common to get stuck entirely in the "Reasonable Mind" (invalidating feelings to "power through" productivity) or get hijacked by the "Emotional Mind" (becoming defensive or overwhelmed during conflicts). Transitioning out of these extremes can feel unnatural.

**What Can Work**:
- **Mindfulness Practices**: Simple grounding techniques, such as focusing on your breath or the physical sensation of your feet on the floor, can pull you out of an extreme emotional or purely logical loop and guide you toward the Wise Mind.
- **Pause and Validate**: Before reacting to a frustrating message or situation, consciously acknowledge the emotion (Emotional Mind) while evaluating the facts of the scenario (Reasonable Mind) before choosing a path forward.
        `,
        links: [
          { title: 'Therapist Aid: Wise Mind Guide & Worksheet', url: 'https://www.therapistaid.com/therapy-worksheet/wise-mind' },
          { title: 'DBT Tools: Wise Mind', url: 'https://dbt.tools/mindfulness/wise-mind.php' }
        ]
      },
      {
        id: 'managing-triggers',
        title: 'Managing Triggers',
        information: `
Identifying personal triggers and warning signs is the first step to emotional regulation.
- **Triggers**: Situations that provoke an intense emotional response (e.g., yelling, unreasonableness).
- **Reactions**: Going quiet, feeling "blank," speaking sharply, over-apologizing, or agreeing when you don't want to.
- **Regulation Tools**: Belly breathing, box breathing (4-4-4), Cognitive Behavioral Therapy (CBT), taking a step back ("I need a minute to process this").
        `,
        solutions: `
**Common Struggles**: 
When triggered, a common reaction is to "power through" by invalidating or suppressing the emotion. This can lead to a build-up of stress and eventual burnout.

**What Can Work**:
- **Sensory Adjustments**: Using sunglasses or temperature regulation (cold temperatures) to shock the nervous system and reset.
- **Scheduled Reflection**: Allocating specific time for journaling to "dump thoughts" and notice inconsistencies in thinking patterns. 
- **Spiritual/Personal Practices**: Utilizing prayer or quiet meditation to tune into feelings that are hard to explain logically.
        `,
        links: [
          { title: 'STOP Skill for Emotion Regulation', url: 'https://dbt.tools/emotional_regulation/stop.php' },
          { title: 'Autism Level Up – Regulation Tools', url: 'https://www.autismlevelup.com/' }
        ]
      }
    ]
  },
  {
    id: 'communication-conflict',
    title: 'Workplace Communication & Conflict',
    description: 'Navigating office etiquette, team dynamics, and resolving disputes collaboratively.',
    icon: <MessageSquare className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" />,
    articles: [
      {
        id: 'office-etiquette',
        title: 'Office Etiquette & Norms',
        information: `
Workplace norms fall into three categories:
1. **Etiquette (E)**: Unwritten rules of polite behavior (e.g., sending a Slack message before calling).
2. **Policy (P)**: Formal company rules (e.g., cybersecurity training, SOPs).
3. **Preference (PR)**: Team or individual working styles (e.g., eating at desks, camera usage in meetings).

Understanding email responses (Reply vs. Reply All vs. CC) and tone translation is critical for professional communication.
        `,
        solutions: `
**Common Struggles**: 
Assuming intent based on brief messages, or not understanding unwritten rules (like responding promptly vs. assuming people will wait). Social anxiety can make participating in group norms (like inviting new employees to lunch) daunting.

**What Can Work**:
- **Proactive Empathy**: Being aware of coworkers' sensitivities (e.g., avoiding strong-smelling foods).
- **Tone Translation**: Rewriting blunt messages to include greetings, clear expectations, and polite sign-offs.
- **Stepping Out of Comfort Zones**: Setting a goal to invite a coworker or fellow student out once a week to build social skills.
        `,
        links: [
          { title: 'Harvard Business Review – Email Etiquette Tips', url: 'https://hbr.org/2022/11/how-to-write-better-emails-at-work' }
        ]
      },
      {
        id: 'conflict-management',
        title: 'Conflict Management',
        information: `
Conflicts often stem from communication differences, unclear requirements, or differing working styles. The Thomas-Kilmann model identifies 5 conflict management styles:
1. **Competing**: Assertive and uncooperative.
2. **Collaborating**: Assertive and cooperative (finding a win-win).
3. **Avoiding**: Unassertive and uncooperative.
4. **Accommodating**: Unassertive and cooperative.
5. **Compromising**: Intermediate assertiveness and cooperativeness.
        `,
        solutions: `
**Common Struggles**: 
Dealing with supervisors or team members who make assumptions or fail to communicate changes. When stress is high, individuals may lean heavily towards avoidance or unconstructive competition.

**What Can Work**:
- **Strategic Avoidance & Re-engagement**: Using avoidance temporarily when tensions are high, then re-approaching to collaborate or compromise once emotions have simmered down.
- **Clarifying Assumptions**: Directly addressing "I thought you were doing that" situations by establishing clear project requirements and expectations upfront.
        `,
        links: [
          { title: 'Crucial Conversations: Tools for Talking When Stakes Are High', url: 'https://cruciallearning.com/crucial-conversations-book/' }
        ]
      },
      {
        id: 'teamwork-dynamics',
        title: 'Teamwork & Dynamics',
        information: `
Effective teamwork requires recognizing individual strengths, understanding team dynamics, and navigating stages of team development.
- **Strengths**: Clear communication, staying positive during challenges, organization, taking initiative, and researching information.
- **Support Needs**: Everyone has areas where they need support from the team, such as needing encouragement to speak up, needing help breaking down complex tasks, or requiring extra time to process unexpected changes.
- **Team Development**: Teams generally move through stages (Forming, Storming, Norming, Performing) to reach their full potential.
        `,
        solutions: `
**Common Struggles**:
Barriers to teamwork often include poor focus, struggling to prioritize tasks, feeling discouraged by feedback, and struggling to manage deadlines or unexpected changes to the plan. 

**What Can Work**:
- **Self-Awareness**: Understanding your own communication and work style (e.g., using free personality or strengths assessments) helps you articulate what support you need from your teammates.
- **Psychological Safety**: The most effective teams, according to Google's Project Aristotle, share a high degree of psychological safety—where members feel safe to take risks and be vulnerable without fear of negative consequences.
- **Leveraging Diversity**: Diverse teams often make smarter decisions by combining different perspectives, such as balancing introverted and extroverted working styles.
        `,
        links: [
          { title: 'Indeed: 11 Common Barriers to Teamwork and How You Can Overcome Them', url: 'https://www.indeed.com/career-advice/career-development/barriers-to-teamwork' },
          { title: 'Google re:Work – Guide to Understand Team Effectiveness', url: 'https://rework.withgoogle.com/print/guides/5906140922445824/' },
          { title: 'MIT Human Resources: Using the Stages of Team Development', url: 'https://hr.mit.edu/learning-topics/teams/articles/stages-development' },
          { title: '16Personalities – Free Personality Test', url: 'https://www.16personalities.com/' },
          { title: 'VIA Character Strengths Assessment (Free)', url: 'https://www.viacharacter.org/' }
        ]
      }
    ]
  },
  {
    id: 'career-docs',
    title: 'Career Documents & Readiness',
    description: 'Crafting tailored resumes and cover letters to stand out to employers.',
    icon: <Briefcase className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" />,
    articles: [
      {
        id: 'resume-building',
        title: 'Resume Writing 101 & STAR Method',
        information: `
Resumes must pass through Applicant Tracking Systems (ATS) and impress human recruiters.
- **STAR Method**: Situation, Task, Action, Result. Used to turn weak bullet points into impactful achievements.
*Weak*: "Helped with troubleshooting computer issues."
*Strong*: "Diagnosed a failing graphics card causing system crashes, successfully replacing the hardware to restore 100% system stability and operational capacity."
- **Tailoring**: Adjusting keywords and skills to match specific job descriptions.

### Example Resume Snippet (Support Desk Specialist)

**Jane Doe** | 555-123-4567 | janedoe@email.com | Portland, OR 97204

**Professional Experience**
**IT Support Desk Specialist** | Tech Solutions Inc. | May 2024 – Present
- **(Situation & Task)** Faced with a 30% increase in daily support tickets following a major software update.
- **(Action)** Implemented a new triage system using Jira, categorizing issues by severity and assigning them to specialized technicians, while personally handling complex network connectivity issues.
- **(Result)** Reduced average ticket resolution time by 25% and maintained a 98% customer satisfaction rating over a 6-month period.
- Resolved over 50+ hardware and software issues daily for a 500+ employee user base using remote desktop tools.
        `,
        solutions: `
**Common Struggles**: 
Translating non-traditional or retail experience into IT-relevant skills. It can be challenging to see how past roles apply to technical positions.

**What Can Work**:
- **Identifying Transferable Skills**: Reframing retail tasks into professional competencies. For example, "Food Safety Compliance" demonstrates strict adherence to regulations; "Customer Interaction" translates to strong end-user support and communication skills; "Merchandising" shows attention to detail.
        `,
        links: [
          { title: 'O*NET OnLine – IT Role Descriptions', url: 'https://www.onetonline.org/' },
          { title: 'Jobscan – ATS Optimization', url: 'https://www.jobscan.co/' }
        ]
      },
      {
        id: 'cover-letters',
        title: 'Cover Letters & Professional Storytelling',
        information: `
A cover letter is your opportunity to tell a story that your resume cannot. It connects your past experiences directly to the employer's needs.

- **Structure**: Include an engaging opening, a body paragraph that highlights a specific achievement (using the STAR method), and a closing that reiterates your enthusiasm and includes a call to action.
- **Tailoring**: Address the hiring manager by name if possible, and explicitly mention the company and the role you are applying for.

### Example Cover Letter (Support Desk Specialist)

Dear Hiring Manager,

With a strong foundation in hardware repair and over three years of high-volume customer service experience, I am thrilled to apply for the Support Desk Specialist position at Global Tech Industries. I have been following Global Tech's recent expansion into cloud services, and I am eager to bring my technical problem-solving skills to support your growing user base.

In my recent vocational training program, we were tasked with resolving a simulated network outage that affected multiple departments **(Situation & Task)**. I led my team in diagnosing the issue by methodically checking router configurations and identifying a misconfigured subnet mask **(Action)**. By quickly applying the correct settings and documenting the fix, we restored connectivity within 15 minutes, earning commendation from our instructors for our efficient incident response **(Result)**. 

I am passionate about making technology accessible and understandable for every client. I would welcome the opportunity to discuss how my combination of technical troubleshooting and customer-focused communication can benefit Global Tech Industries. Thank you for your time and consideration.

Sincerely,

Jane Doe
        `,
        solutions: `
**Common Struggles**:
Starting a cover letter can feel intimidating. Many candidates struggle to avoid simply repeating their resume or relying too heavily on AI-generated templates, which often sound robotic or include hallucinations.

**What Can Work**:
- **The Hook**: Start with a strong, personalized opening rather than "To Whom It May Concern."
- **Focus on One Story**: Instead of listing all your skills, pick one relevant, impactful story (like the network outage example) and expand on it using the STAR method.
- **Human Touch**: If using AI tools for drafting, carefully edit the tone to ensure it sounds like your authentic voice and accurately reflects your real experiences.
        `,
        links: [
          { title: 'Purdue OWL – Professional Writing: Cover Letters', url: 'https://owl.purdue.edu/owl/job_search_writing/cover_letters/index.html' },
          { title: 'Harvard Business Review – How to Write a Cover Letter', url: 'https://hbr.org/2014/02/how-to-write-a-cover-letter' }
        ]
      }
    ]
  },
  {
    id: 'networking-linkedin',
    title: 'Networking & LinkedIn',
    description: 'Strategies for expanding your professional network, leveraging LinkedIn, and mastering the elevator pitch.',
    icon: <Users className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" />,
    articles: [
      {
        id: 'digital-footprint-linkedin',
        title: 'Digital Footprint & LinkedIn Optimization',
        information: `
Employers actively screen online presence. Your digital footprint includes public social media, repositories (like GitHub), and general search results.
- **Positive Flags**: Public portfolios, uplifting community comments, professional LinkedIn headlines.
- **Red Flags**: Disrespectful comments, polarizing public opinions.

For LinkedIn, a strong profile is critical:
- **Headline**: Should combine your current pursuits with key soft skills (e.g., "Technical Support Specialist | Pursuing CompTIA A+ | Strong Listener").
- **About Section**: Own your transition into tech. Highlight transferable skills from past experiences like customer service.
        `,
        solutions: `
**Common Struggles**:
Transitioning from non-tech industries (like food service or retail) can make building a tech-focused LinkedIn profile feel daunting or lacking credibility.

**What Can Work**:
- **Leverage Transferable Skills**: Detail-oriented customer service experience is highly relevant to IT support. State clearly: "Transitioning into IT with over three years of high-volume customer service experience. Passionate about making technology human, accessible, and understandable."
- **Network with Peers**: Follow companies of interest and connect with classmates and instructors to build initial connections.
        `,
        links: [
          { title: 'freeCodeCamp: How to Build a Professional LinkedIn Profile', url: 'https://www.freecodecamp.org/news/how-to-build-a-professional-linkedin-profile/' },
          { title: 'LinkedIn Official Blog: Profile Tips', url: 'https://blog.linkedin.com/' }
        ]
      },
      {
        id: 'elevator-pitch',
        title: 'The 30-Second Elevator Pitch',
        information: `
An elevator pitch is a brief, 30-second introduction used at job fairs, networking events, or interviews. It should cover:
- **Who you are**: Name and current role/student status.
- **Your experience**: Relevant skills, certifications you are working toward (e.g., CompTIA A+).
- **A highlighted strength + proof**: Give a specific example of when you used a skill (e.g., "I demonstrated teamwork while deconstructing a laptop with classmates").
- **Your goal**: The specific role you are aiming for.
- **The benefit to the company**: What you bring to the table (e.g., troubleshooting skills).
        `,
        solutions: `
**Common Struggles**:
Pitches often sound too generic or overly focused on soft skills without concrete evidence. Introverts may find the networking aspect and self-promotion unnatural.

**What Can Work**:
- **Specific Evidence**: Don't just claim a skill. Tie it to a specific lab, project, or past work experience.
- **Practice and Refine**: Rehearse the pitch until it flows naturally. Adjust the length to be around 30 seconds to 1 minute, and don't forget to include technical hard skills alongside soft skills.
        `,
        links: [
          { title: 'The Muse: How to Give an Elevator Pitch', url: 'https://www.themuse.com/advice/perfect-elevator-pitch-examples' }
        ]
      },
      {
        id: 'informational-interviews',
        title: 'Informational Interviews & Outreach',
        information: `
Informational interviews are brief meetings (usually 15-20 minutes) with professionals in your desired field to gain insights, advice, and industry knowledge. They are not job interviews, but rather a tool for learning and expanding your network.
- **Outreach**: Craft concise, respectful messages via email or LinkedIn DMs asking for a brief chat.
- **Preparation**: Research the person and company beforehand. Prepare questions that show genuine interest.
        `,
        solutions: `
**Common Struggles**:
Knowing how to reach out to strangers and what questions to ask without sounding like you're simply asking for a job.

**What Can Work**:
- **Targeted Questions**: Ask insightful questions, such as: "When evaluating junior developers from non-traditional backgrounds, what specific qualities or portfolio elements make a candidate stand out?"
- **Clear, Professional Outreach**: Use a template like: "Hi [Name], I'm an IT student graduating this Fall. I've been following your team's work and am very interested in your approach. If you have 15 minutes, would you be open to a brief informational interview?"
- **Reconnect**: Start by reaching out to old friends or acquaintances who already work in the tech industry to practice your outreach skills.
        `,
        links: [
          { title: 'CareerOneStop: Networking Basics', url: 'https://www.careeronestop.org/JobSearch/Network/network.aspx' },
          { title: 'UC Berkeley Career Center: Informational Interviews', url: 'https://career.berkeley.edu/start-exploring/informational-interviews/' }
        ]
      }
    ]
  },
  {
    id: 'interview-ada',
    title: 'Interviews & ADA Accommodations',
    description: 'Navigating the interview process and understanding your workplace rights.',
    icon: <ShieldCheck className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" />,
    articles: [
      {
        id: 'interviewing-etiquette',
        title: 'Interviewing Etiquette & Preparation',
        information: `
Mastering interview etiquette is essential for making a strong impression and communicating your value effectively. Preparation is key, whether the interview is virtual or in-person.

**Key Elements of Interview Etiquette**:
- **Professional Attire & Body Language**: Dress appropriately for the role. Maintain good posture, make comfortable eye contact, and use active listening to show engagement.
- **Clear Communication**: Keep your answers concise, relevant, and focused. Avoid common errors like speaking negatively about past employers, giving overly vague answers without examples, or interrupting the interviewer.
- **The STAR Method**: Use the Situation, Task, Action, Result framework to structure your answers to behavioral questions, ensuring you highlight specific skills and concrete accomplishments.
- **Virtual Interviews**: Ensure your background is clean and well-lit, test your audio and video beforehand, and look at the camera rather than the screen to simulate eye contact.
        `,
        solutions: `
**Common Struggles**:
Many candidates struggle with nerves, rambling when answering questions, or figuring out how to clearly explain their thought process during technical interviews.

**What Can Work**:
- **Mock Interviews**: Practice answering common questions with a peer, mentor, or using video recording tools. Review your tone, pacing, and body language.
- **Prepare Questions**: Always have thoughtful questions prepared for the interviewer at the end of the session to demonstrate your interest and preparedness.
- **Self-Reflection**: After an interview, take time to reflect on what went well and what questions stumped you, so you can continuously improve.
        `,
        links: [
          { title: 'Indeed Career Guide: Interview Etiquette', url: 'https://www.indeed.com/career-advice/interviewing/interview-etiquette' },
          { title: 'The Muse: 10 Rules of Interview Etiquette', url: 'https://www.themuse.com/advice/interview-etiquette-rules' },
          { title: 'AskJAN: Interview Tips for New Grads on the Autism Spectrum', url: 'https://askjan.org/articles/Interview-Tips-for-New-Grads-on-the-Autism-Spectrum.cfm' },
          { title: 'Big Interview – Practice Interview Tool', url: 'https://biginterview.com/' }
        ]
      },
      {
        id: 'ada-rights',
        title: 'ADA Rights & Accommodations',
        information: `
The Americans with Disabilities Act (ADA) protects employees and applicants.
- **ADA Violations**: Employers cannot ask about medical conditions, medications, or require disclosure prior to an offer.
- **Accommodations vs. Preferences**: Accommodations (A) enable you to do your job (e.g., modified break schedules for panic attacks, written instructions for depressive disorders). Preferences (P) are things you'd simply like (e.g., avoiding all phone calls, Fridays off).
        `,
        solutions: `
**Common Struggles**: 
Knowing how and when to ask for an accommodation without feeling like a burden, and clearly distinguishing between a medical need and a personal preference.

**What Can Work**:
- **Structured Requests**: Write clear, professional requests focusing on how the accommodation helps achieve business goals. For example: "I am asking for written instructions and noise-canceling headphones to help maintain focus in loud environments, allowing me to consistently follow through on tasks."
        `,
        links: [
          { title: 'AskJAN - Job Accommodation Network', url: 'https://askjan.org/' },
          { title: 'Autism Self Advocacy Network', url: 'https://autisticadvocacy.org/' }
        ]
      }
    ]
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy & Budgeting',
    description: 'Understanding your finances, managing a personal budget, and planning for your career.',
    icon: <Wallet className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" />,
    articles: [
      {
        id: 'budgeting-basics',
        title: 'Budgeting Basics & Mindset',
        information: `
Understanding your finances is a crucial part of professional development. A well-structured budget can reduce stress and empower you to make informed decisions about your career, such as transitioning into a new role or investing in further education.

**Key Concepts**:
- **Fixed Expenses**: Regular, predictable costs like rent, utilities, and insurance.
- **Variable Expenses**: Costs that fluctuate, such as groceries, entertainment, and dining out.
- **Proactive Spending**: The mindset of telling your money where to go, rather than wondering where it went. Building habits around savings and debt management early in your career pays off long-term.
        `,
        solutions: `
**Common Struggles**:
Talking about money can bring up feelings of judgment or criticism. It can also be difficult to face the reality of fixed expenses compared to your current income, especially when transitioning careers.

**What Can Work**:
- **Start Early**: Don't wait until you have a higher salary to build good financial habits. Learning from small mistakes early is better than waiting until more money is at stake.
- **Utilize Tools**: Use visual and automated tools like spreadsheets or free budgeting templates to easily track expenses.
- **ND-Friendly Budgeting**: For neurodivergent individuals, managing finances can be tied to executive dysfunction. Systems that automate tracking or specific ADHD-friendly budgeting tips can help build consistent routines.
        `,
        links: [
          { title: 'NerdWallet: How to Budget: A Step-by-Step Guide', url: 'https://www.nerdwallet.com/article/finance/how-to-budget' },
          { title: 'Investopedia: How to Build a Personal Budget', url: 'https://www.investopedia.com/articles/pf/09/how-to-make-a-personal-budget.asp' },
          { title: 'ADDitude Magazine: ADHD-Friendly Budgeting Tips', url: 'https://www.additudemag.com/adhd-budget-personal-finances/' }
        ]
      },
      {
        id: 'budgeting-tools-templates',
        title: 'Budgeting Tools & Templates',
        information: `
Having the right tools is essential for maintaining a consistent budget. Whether you prefer a highly detailed spreadsheet or a simplified app, finding a system that works for your brain is the most important step.

Here is a budget spreadsheet example to help you get started:
[Budget Spreadsheet Example](https://docs.google.com/spreadsheets/d/1DgW1WxB2x5C5lL2--3mTWNmFP-WazYct/edit?usp=sharing&ouid=103565045233844877299&rtpof=true&sd=true)
        `,
        solutions: `
**Tools to Explore**:
- **Custom Spreadsheets**: Using Google Sheets or Excel with pre-built formulas gives you full control and visibility over your finances.
- **Budgeting Templates**: Utilize free templates provided by consumer protection agencies or educational institutions.
- **Calculators**: Free online budget calculators to quickly assess your financial health without needing a subscription.
        `,
        links: [
          { title: 'Student Budget Spreadsheet Example (Google Sheets)', url: 'https://docs.google.com/spreadsheets/d/1DgW1WxB2x5C5lL2--3mTWNmFP-WazYct/edit?usp=sharing&ouid=103565045233844877299&rtpof=true&sd=true' },
          { title: 'Consumer.gov: Free Printable Budget Worksheet', url: 'https://consumer.gov/managing-your-money/making-budget' },
          { title: 'Federal Student Aid: Budget Calculator', url: 'https://studentaid.gov/h/understand-aid/estimate-your-aid' }
        ]
      }
    ]
  }
];
